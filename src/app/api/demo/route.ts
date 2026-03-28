import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // ✅ This logs in terminal
  console.log("📩 New Demo Booking:", data);

  return NextResponse.json({
    success: true,
  });
}