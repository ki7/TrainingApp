// app/api/exercise-sets/route.ts
import { NextRequest, NextResponse } from "next/server";

import { exerciseSets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";

import { getDatabaseClient } from "@/app/utils";

export async function GET() {
  const db = await getDatabaseClient();
  const rows = await db
    .select()
    .from(exerciseSets)
    .orderBy(exerciseSets.createdAt);
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const db = await getDatabaseClient();
  const body = await req.json();

  // body: { exerciseType, sets: { reps, weight }[] }
  const { exerciseType, sets } = body as {
    exerciseType: string;
    sets: { reps: number; weight: number }[];
  };

  if (!exerciseType || !Array.isArray(sets) || sets.length === 0) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const rows = sets.map((s) => ({
    id: uuid(),
    exerciseType,
    reps: Number(s.reps),
    weight: Number(s.weight),
  }));

  await db.insert(exerciseSets).values(rows);

  return NextResponse.json({ success: true, rows });
}

export async function DELETE(req: NextRequest) {
  const db = await getDatabaseClient();
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  await db.delete(exerciseSets).where(eq(exerciseSets.id, id));
  return NextResponse.json({ success: true });
}
