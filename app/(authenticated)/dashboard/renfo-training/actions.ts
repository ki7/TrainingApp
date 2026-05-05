"use server"

import { getDatabaseClient } from "@/app/utils"; 

export async function saveSessionAction(payload: {
  sets: Array<{ reps: number; weight: number }>
  notes: string
}) {
  const db = await getDatabaseClient();
  // Example: insert into DB
  await db.insert("workingsessions").values({
    data: JSON.stringify(payload),
    created_at: new Date(),
  })

  return { ok: true }
}
