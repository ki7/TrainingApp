// app/api/user/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, age } = body;
  console.log("Received data from app/api/user/route.ts:", { name, age });
  return NextResponse.json({
    received: true,
    name,
    age,
  });
}
