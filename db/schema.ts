import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const todos = sqliteTable("todos", {
  id: integer("id", {
    mode: "number",
  }).primaryKey({ autoIncrement: true }),
  tenantId: text("tenant_id").notNull(),
  description: text("description").notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull().default(false),
});

export const exerciseSets = sqliteTable("exercise_sets", {
  id: text("id").primaryKey(),
  exerciseType: text("exercise_type").notNull(), // "bench" | "squat" | ...
  reps: integer("reps").notNull(),
  weight: integer("weight").notNull(),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%s','now'))`),
});
