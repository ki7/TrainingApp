// import { db } from "./client"; --- IGNORE ---
import "dotenv/config";
import { db } from "@/app/seed-client"  ;
import { exercise, muscle, muscleHead, exerciseMuscle } from "./schema";
import { EXERCISES } from "@/app/(authenticated)/dashboard/exerciseRef/exerciseData";
import { MUSCLE_HEAD_DICTIONARY } from "@/app/types/anatomy/muscles";
import { parseMuscleName } from "@/app/libs/parseMuscleName";

async function seed() {
  console.log("Seeding…");
  // 1. Collecter tous les muscles + chefs
  const muscleNames = new Set<string>();
  const muscleHeadKeys = new Set<string>();

  for (const ex of EXERCISES) {
    const allNames = [
      ...ex.muscles.primary,
      ...ex.muscles.secondary,
      ...ex.muscles.tertiary,
    ];

    for (const raw of allNames) {
      const { muscle: m, heads } = parseMuscleName(raw);
      muscleNames.add(m);
      heads.forEach((h) => muscleHeadKeys.add(`${m}|${h}`));
    }
  }

  // 2. Insérer MUSCLE
  const muscleIdMap = new Map<string, number>();
  for (const name of muscleNames) {
    const [row] = await db.insert(muscle).values({ name }).returning();
    muscleIdMap.set(name, row.id);
  }

  // 3. Insérer MUSCLE_HEAD avec mapping BioDigital
  const muscleHeadIdMap = new Map<string, number>();

  for (const key of muscleHeadKeys) {
    const [muscleName, headName] = key.split("|");
    const muscleId = muscleIdMap.get(muscleName)!;

    const meta = MUSCLE_HEAD_DICTIONARY[key] ?? { biodigitalId: null };

    const [row] = await db
      .insert(muscleHead)
      .values({
        muscleId,
        name: headName,
        biodigitalId: meta.biodigitalId,
      })
      .returning();

    muscleHeadIdMap.set(key, row.id);
  }

  // 4. Insérer EXERCISES + PIVOT
  for (const ex of EXERCISES) {
    const [exRow] = await db
      .insert(exercise)
      .values({
        name: ex.name,
        category: ex.category,
        laterality: ex.laterality,
      })
      .returning();

    const exId = exRow.id;

    const attach = async (
      names: string[],
      role: "primary" | "secondary" | "tertiary",
    ) => {
      for (const raw of names) {
        const { muscle: m, heads } = parseMuscleName(raw);
        for (const h of heads) {
          const key = `${m}|${h}`;
          const mhId = muscleHeadIdMap.get(key);
          if (!mhId) {
            console.warn("Missing muscleHead for", key);
            continue;
          }
          await db.insert(exerciseMuscle).values({
            exerciseId: exId,
            muscleHeadId: mhId,
            role,
          });
        }
      }
    };

    await attach(ex.muscles.primary, "primary");
    await attach(ex.muscles.secondary, "secondary");
    await attach(ex.muscles.tertiary, "tertiary");
  }

  console.log("Seed done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
