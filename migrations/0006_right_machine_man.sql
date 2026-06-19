CREATE TABLE `exercise` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`laterality` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `exercise_name_unique` ON `exercise` (`name`);--> statement-breakpoint
CREATE TABLE `exercise_muscle` (
	`exercise_id` integer NOT NULL,
	`muscle_head_id` integer NOT NULL,
	`role` text NOT NULL,
	FOREIGN KEY (`exercise_id`) REFERENCES `exercise`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`muscle_head_id`) REFERENCES `muscle_head`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `muscle` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `muscle_name_unique` ON `muscle` (`name`);--> statement-breakpoint
CREATE TABLE `muscle_head` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`muscle_id` integer NOT NULL,
	`name` text NOT NULL,
	`biodigital_id` text,
	FOREIGN KEY (`muscle_id`) REFERENCES `muscle`(`id`) ON UPDATE no action ON DELETE cascade
);
