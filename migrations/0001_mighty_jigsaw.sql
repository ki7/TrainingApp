CREATE TABLE `exercise_sets` (
	`id` text PRIMARY KEY NOT NULL,
	`exercise_type` text NOT NULL,
	`reps` integer NOT NULL,
	`weight` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `todos` ADD `tenant_id` text NOT NULL;
