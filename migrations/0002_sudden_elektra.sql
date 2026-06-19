CREATE TABLE `exercises` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`machine_type` text,
	`default_grip_type` text
);
--> statement-breakpoint
CREATE TABLE `grip_types` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `grip_types_name_unique` ON `grip_types` (`name`);--> statement-breakpoint
CREATE TABLE `sets` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`exercise_id` text NOT NULL,
	`grip_type_id` text,
	`repetitions` integer NOT NULL,
	`weight_kg` real,
	`duration_seconds` integer,
	`avg_heart_rate` integer,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `workout_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`start_time` text NOT NULL,
	`end_time` text
);
--> statement-breakpoint
DROP INDEX IF EXISTS "grip_types_name_unique";--> statement-breakpoint
DROP INDEX IF EXISTS "users_email_unique";--> statement-breakpoint
ALTER TABLE `todos` ALTER COLUMN "tenant_id" TO "tenant_id" text NOT NULL DEFAULT 'c03b5e1feb5a68efb32f221f3836bab1';