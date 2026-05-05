import { text, integer, sqliteTable, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const todos = sqliteTable("todos", {
  id: integer("id", {
    mode: "number",
  }).primaryKey({ autoIncrement: true }),
  tenantId: text("tenant_id")
    .notNull()
    .default("c03b5e1feb5a68efb32f221f3836bab1"),
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

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const exercises = sqliteTable("exercises", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  machineType: text("machine_type"),
  defaultGripType: text("default_grip_type"),
});

export const gripTypes = sqliteTable("grip_types", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
});

// Table sessions
export const sessions = sqliteTable("workout_sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  startTime: text("start_time").notNull(),
  // end_time sera rempli plus tard (fin de session)
  endTime: text("end_time"),
  // timestamps
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").notNull().default("CURRENT_TIMESTAMP"),
});

export const sets = sqliteTable("sets", {
  id: text("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  exerciseId: text("exercise_id").notNull(),
  gripTypeId: text("grip_type_id"),
  repetitions: integer("repetitions").notNull(),
  weightKg: real("weight_kg"),
  durationSeconds: integer("duration_seconds"),
  avgHeartRate: integer("avg_heart_rate"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});
