// app/api/exercise-sets/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDatabaseClient } from "@/app/utils";
import { exerciseSets } from "@/db/schema";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  console.log("---- [API] POST /exercise-sets ----");

  // 1. Lire le body brut
  const rawBody = await req.text();
  console.log("RAW BODY:", rawBody);

  // 2. Parser JSON
  let body: any;
  try {
    body = JSON.parse(rawBody);
  } catch (e) {
    console.error("❌ JSON PARSE ERROR:", e);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log("PARSED BODY:", body);

  const { exerciseType, sets } = body;

  if (!exerciseType || !Array.isArray(sets)) {
    console.error("❌ Invalid payload structure");
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  console.log("SETS RECEIVED:", sets);

  // 3. Cast + logs
  const rows = sets.map((s: any) => {
    const row = {
      // id: uuid(),
      exerciseType,
      reps: parseInt(s.reps, 10),
      weight: parseInt(s.weight, 10),
    };

    console.log("ROW BUILT:", row);
    return row;
  });

  console.log("FINAL ROWS TO INSERT:", rows);
  for (const row of rows) {
    console.log(typeof row);
  }
  console.log("FINAL ROWS TO INSERT:", rows);

  // 4. Connexion DB via getDatabaseClient()
  const db = await getDatabaseClient();

  try {
    for (const row of rows) {
      console.log("INSERTING ROW:", row);
      await db.insert(exerciseSets).values(row);
      console.log("DB INSERT RESULT:", row);
    }
    // const result = await db.insert(exerciseSets).values(rows);
    // console.log("DB INSERT RESULT:", result);

    return NextResponse.json({ success: true, rows });
  } catch (e: any) {
    console.error("❌ DB ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
