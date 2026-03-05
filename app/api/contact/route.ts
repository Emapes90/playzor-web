import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Use a dedicated server-side client to bypass any client-side caching issues
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServer = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate name length
    if (name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 },
      );
    }

    if (message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Message must be less than 5000 characters" },
        { status: 400 },
      );
    }

    // Validate phone (optional, but if provided must be reasonable)
    if (phone && phone.trim().length > 0) {
      const phoneClean = phone.replace(/[\s\-\(\)\+]/g, "");
      if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
        return NextResponse.json(
          { error: "Please provide a valid phone number" },
          { status: 400 },
        );
      }
    }

    // Get IP address from headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip_address = forwarded
      ? forwarded.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "Unknown";

    // Get user agent
    const user_agent = request.headers.get("user-agent") || "Unknown";

    const { data, error } = await supabaseServer
      .from("contact_messages")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        message: message.trim(),
        ip_address,
        user_agent,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 },
      );
    }

    console.log("Contact message saved:", data?.id);

    return NextResponse.json(
      { success: true, message: "Message sent successfully! We'll get back to you within 1-4 hours." },
      { status: 200 },
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
