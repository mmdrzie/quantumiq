// app/api/recaptcha/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    // Check if reCAPTCHA secret key is available
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing reCAPTCHA secret key");
      return NextResponse.json({ success: false, message: "Server misconfiguration" }, { status: 500 });
    }

    // Verify reCAPTCHA token with Google
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" }
    );

    const data = await response.json();

    // If Google reCAPTCHA validation fails
    if (!data.success) {
      console.warn("reCAPTCHA validation failed:", data);
      return NextResponse.json({ success: false, message: "reCAPTCHA validation failed" }, { status: 400 });
    }

    // Optional: Check reCAPTCHA score for bot detection
    if (data.score < 0.5) {
      console.warn("Low reCAPTCHA score detected:", data.score);
      return NextResponse.json({ success: false, message: "Suspicious activity detected" }, { status: 400 });
    }

    // If validation is successful
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("reCAPTCHA API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
