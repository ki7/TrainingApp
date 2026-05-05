// types/exercise.ts
export type ExerciseType = "bench" | "squat" | "deadlift" | "row" | "curl";

export interface ExerciseSet {
  id: string;
  reps: number | "";
  weight: number | "";
}

export interface PersistedExerciseSet {
  id: string;
  exerciseType: ExerciseType;
  reps: number;
  weight: number;
}
