// seed.js
import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Import Drizzle schema (en JS)
import * as schema from "./db/schema.js";

// Import tes données
import { EXERCISES } from "./data/exercises.js";
import { MUSCLE_HEAD_DICTIONARY } from "./data/muscle-head-dictionary.js";
import { parseMuscleName } from "./utils/parseMuscleName.js";

async function main() {
  // 1. Connexion Turso
  const client = createClient({
    url: process.env.TURSO_SEED_URL,
    authToken: process.env.TURSO_SEED_AUTH_TOKEN,
  });

  const db = drizzle(client, { schema });

  // 2. Collecter muscles + heads
  const muscleNames = new Set();
  const muscleHeadKeys = new Set();

  for (const ex of EXERCISES) {
    const allNames = [
      ...ex.muscles.primary,
      ...ex.muscles.secondary,
      ...ex.muscles.tertiary,
    ];

    for (const raw of allNames) {
      const { muscle, heads } = parseMuscleName(raw);
      muscleNames.add(muscle);
      heads.forEach((h) => muscleHeadKeys.add(`${muscle}|${h}`));
    }
  }

  // 3. Insert MUSCLE
  const muscleIdMap = new Map();

  for (const name of muscleNames) {
    const [row] = await db.insert(schema.muscle).values({ name }).returning();
    muscleIdMap.set(name, row.id);
  }

  // 4. Insert MUSCLE_HEAD
  const muscleHeadIdMap = new Map();

  for (const key of muscleHeadKeys) {
    const [muscleName, headName] = key.split("|");
    const muscleId = muscleIdMap.get(muscleName);

    const meta = MUSCLE_HEAD_DICTIONARY[key] ?? { biodigitalId: null };

    const [row] = await db
      .insert(schema.muscleHead)
      .values({
        muscleId,
        name: headName,
        biodigitalId: meta.biodigitalId,
      })
      .returning();

    muscleHeadIdMap.set(key, row.id);
  }

  console.log("Seed completed.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
