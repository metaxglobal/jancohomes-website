import { NextRequest, NextResponse } from "next/server";

const SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL;

interface InquiryData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  pageUrl?: string;
  type?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryData = await request.json();

    // Basic validation for form submissions (not for WhatsApp clicks)
    if (body.type !== "whatsapp-click") {
      if (!body.name || !body.phone || !body.message) {
        return NextResponse.json(
          { error: "Missing required fields: name, phone, and message are required" },
          { status: 400 }
        );
      }

      // Validate email format if provided
      if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }

      // Validate phone format
      if (body.phone && !/^[+]?[\d\s-()]+$/.test(body.phone)) {
        return NextResponse.json(
          { error: "Invalid phone number format" },
          { status: 400 }
        );
      }
    }

    // If no webhook URL is configured, just log and return success
    if (!SHEET_WEBHOOK_URL) {
      console.log("📝 Form submission (no webhook configured):", body);
      return NextResponse.json({
        status: "success",
        message: "Form submitted successfully (logging only - configure SHEET_WEBHOOK_URL)",
      });
    }

    // Prepare payload for Google Sheets - only essential fields
    const payload = {
      timestamp: new Date().toISOString(),
      source: body.source || "unknown",
      name: body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      message: body.message || "",
    };

    // Send to Google Apps Script webhook
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Google Sheets webhook error:", response.statusText);
      return NextResponse.json(
        {
          error: "Failed to submit to Google Sheets",
          details: response.statusText,
        },
        { status: 502 }
      );
    }

    const result = await response.json();

    return NextResponse.json({
      status: "success",
      message: "Thank you! Our expert will contact you soon.",
      data: result,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
