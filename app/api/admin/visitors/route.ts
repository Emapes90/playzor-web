import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/admin-auth";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServer = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
  const isAuth = await verifyAuth();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(Number(searchParams.get("limit")) || 100, 500);
    const country = searchParams.get("country");

    let query = supabaseServer
      .from("visitor_logs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (country) {
      query = query.ilike("country", `%${country}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Fetch visitor logs error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Also get summary stats
    const { data: statsData } = await supabaseServer
      .from("visitor_logs")
      .select("country, ip_address");

    const totalVisits = statsData?.length || 0;
    const uniqueIps = new Set(statsData?.map((v) => v.ip_address)).size;
    const countryCounts: Record<string, number> = {};
    statsData?.forEach((v) => {
      const c = v.country || "Unknown";
      countryCounts[c] = (countryCounts[c] || 0) + 1;
    });

    // Sort countries by count
    const topCountries = Object.entries(countryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([name, count]) => ({ name, count }));

    return NextResponse.json({
      visitors: data,
      stats: {
        totalVisits,
        uniqueIps,
        topCountries,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch visitor logs" },
      { status: 500 }
    );
  }
}
