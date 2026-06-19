// components/ExerciseRow.tsx
"use client";

import { ExerciseSet } from "@/app/types/exercise";
import { motion } from "framer-motion";

interface Props {
  set: ExerciseSet;
  onChange: (updated: ExerciseSet) => void;
  onDelete: () => void;
}

export function ExerciseRow({ set, onChange, onDelete }: Props) {
  const update = (field: keyof ExerciseSet, value: string) => {
    const parsed = value === "" ? "" : Number(value);
    if (parsed !== "" && Number.isNaN(parsed)) return;
    console.log({ ...set, [field]: parsed });

    onChange({ ...set, [field]: parsed });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="flex items-center gap-3 py-2"
    >
      <input
        type="number"
        placeholder="Répétitions"
        className="border rounded px-3 py-2 w-28"
        value={set.reps}
        onChange={(e) => update("reps", e.target.value)}
        min={0}
      />

      <input
        type="number"
        placeholder="Charge (kg)"
        className="border rounded px-3 py-2 w-28"
        value={set.weight}
        onChange={(e) => update("weight", e.target.value)}
        min={0}
      />

      <button
        onClick={onDelete}
        className="text-red-600 hover:underline text-sm"
      >
        Supprimer
      </button>
    </motion.div>
  );
}
