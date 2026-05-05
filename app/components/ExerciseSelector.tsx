// components/ExerciseSelector.tsx
"use client";

import { ExerciseType } from "@/app/types/exercise";

interface Props {
  value: ExerciseType;
  onChange: (value: ExerciseType) => void;
}

const OPTIONS: { label: string; value: ExerciseType }[] = [
  { label: "Bench Press", value: "bench" },
  { label: "Squat", value: "squat" },
  { label: "Deadlift", value: "deadlift" },
  { label: "Row", value: "row" },
  { label: "Curl", value: "curl" },
];

export function ExerciseSelector({ value, onChange }: Props) {
  return (
    <select
      className="border rounded px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value as ExerciseType)}
    >
      {OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
