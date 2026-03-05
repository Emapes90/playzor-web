import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServer = createClient(supabaseUrl, supabaseKey);

// Rate limit: max 1 log per IP per 5 minutes (in-memory, resets on deploy)
const recentIps = new Map<string, number>();
const RATE_LIMIT_MS = 5 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, referrer } = body;

    // Get real IP from headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "Unknown";

    // Rate limit check
    const lastSeen = recentIps.get(ip);
    if (lastSeen && Date.now() - lastSeen < RATE_LIMIT_MS) {
      return NextResponse.json({ ok: true, cached: true });
    }
    recentIps.set(ip, Date.now());

    // Clean old entries periodically
    if (recentIps.size > 10000) {
      const now = Date.now();
      for (const [key, time] of recentIps) {
        if (now - time > RATE_LIMIT_MS) recentIps.delete(key);
      }
    }

    const user_agent = request.headers.get("user-agent") || "Unknown";

    // Fetch IP geolocation data (country, ISP, city, etc.)
    // Using ip-api.com free tier (no API key needed, 45 req/min)
    let geoData = {
      country: "Unknown",
      countryCode: "",
      city: "",
      regionName: "",
      isp: "Unknown",
      org: "",
      timezone: "",
    };

    if (ip !== "Unknown" && ip !== "127.0.0.1" && ip !== "::1") {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,countryCode,regionName,city,isp,org,timezone`,
          { signal: AbortSignal.timeout(3000) }
        );
        if (geoRes.ok) {
          const geo = await geoRes.json();
          if (geo.status === "success") {
            geoData = geo;
          }
        }
      } catch {
        // Geo lookup failed, continue with defaults
      }
    }

    // Insert into Supabase
    const { error } = await supabaseServer.from("visitor_logs").insert({
      ip_address: ip,
      country: geoData.country,
      country_code: geoData.countryCode,
      city: geoData.city,
      region: geoData.regionName,
      isp: geoData.isp,
      org: geoData.org,
      timezone: geoData.timezone,
      user_agent,
      page_url: typeof page === "string" ? page.slice(0, 500) : null,
      referrer: typeof referrer === "string" ? referrer.slice(0, 500) : null,
    });

    if (error) {
      console.error("Visitor log insert error:", error.message);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
