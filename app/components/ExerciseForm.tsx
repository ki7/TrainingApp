// components/ExerciseForm.tsx
"use client";

import { useState } from "react";
import { ExerciseSelector } from "@/app/components/ExerciseSelector";
import { ExerciseRow } from "@/app/components/ExerciseRow";
import { ExerciseSet, ExerciseType } from "@/app/types/exercise";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

export function ExerciseForm() {
  const [exercise, setExercise] = useState<ExerciseType>("bench");
  const [sets, setSets] = useState<ExerciseSet[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState<"idle" | "ok" | "error">(
    "idle",
  );

  const addSet = () => {
    setSets((prev) => [...prev, { id: uuid(), reps: "", weight: "" }]);
  };

  const updateSet = (id: string, updated: ExerciseSet) => {
    setSets((prev) => prev.map((s) => (s.id === id ? updated : s)));
  };

  const deleteSet = (id: string) => {
    setSets((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSave = async () => {
    const cleaned = sets.filter(
      (s) => s.reps !== "" && s.weight !== "" && s.reps > 0 && s.weight >= 0,
    );

    if (cleaned.length === 0) {
      setSavedFeedback("error");
      return;
    }

    setSaving(true);
    setSavedFeedback("idle");

    try {
      const sets = cleaned.map((s) => ({
        reps: Number(s.reps),
        weight: Number(s.weight),
      }));

      const res = await fetch("/api/exercise-sets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exerciseType: exercise,
          sets,
        }),
      });
      console.log("===========SETS TO SAVE===========");
      sets.map( x=>console.log(JSON.stringify(x)));
      // console.log({ sets });

      if (!res.ok) {
        console.log("Failed to save", await res);
        throw new Error("Failed");
      }

      setSaving(false);
      setSavedFeedback("ok");
      // Optionnel : reset local
      setSets([]);
    } catch (e) {
      setSaving(false);
      setSavedFeedback("error");
      console.log({e});
      
    } finally {
      setTimeout(() => setSavedFeedback("idle"), 1500);
    }
  };

  return (
    <div className="space-y-4">
      <ExerciseSelector value={exercise} onChange={setExercise} />

      <div className="flex items-center gap-3">
        <button
          onClick={addSet}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Ajouter une série
        </button>

        <button
          onClick={handleSave}
          disabled={saving || sets.length === 0}
          className="bg-emerald-600 disabled:bg-emerald-300 text-white px-4 py-2 rounded text-sm"
        >
          {saving ? "Enregistrement..." : "Enregistrer en base"}
        </button>

        <motion.span
          key={savedFeedback}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className={
            savedFeedback === "ok"
              ? "text-emerald-600 text-sm"
              : savedFeedback === "error"
                ? "text-red-600 text-sm"
                : "text-transparent text-sm"
          }
        >
          {savedFeedback === "ok"
            ? "Enregistré"
            : savedFeedback === "error"
              ? "Erreur"
              : "…"}
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {sets.map((set) => (
          <ExerciseRow
            key={set.id}
            set={set}
            onChange={(updated) => updateSet(set.id, updated)}
            onDelete={() => deleteSet(set.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
