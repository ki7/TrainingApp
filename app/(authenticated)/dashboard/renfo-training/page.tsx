"use client";
import { useReducer } from "react";
import {
  workingSessionReducer,
  initialWorkingSessionState,
} from "@/app/(authenticated)/dashboard/renfo-training/state/workingsession.reducer";
import Workingsession from "@/app/(authenticated)/dashboard/renfo-training/components/Workingsession";

export default function RenfoTrainingPage() {
  const [state, dispatch] = useReducer(
    workingSessionReducer,
    initialWorkingSessionState,
  );
  const handleSave = async () => {
    dispatch({ type: "START_SAVING" });

    // simulate async save
    await new Promise((r) => setTimeout(r, 600));
    console.log(" Saving session:", {});
    dispatch({ type: "END_SAVING" });
  };
  return (
    <main className="p-6 max-w-xl mx-auto bg-slate-100 rounded">
      <Workingsession />
      <h1 className="text-2xl font-bold mb-6">Workout !</h1>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button onClick={() => dispatch({ type: "SET_EXERCISE", exerciseId: "bench" })} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Lancer une session workout
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <h1 className="text-xl font-semibold">Working Session</h1>

        {/* Exercise selector */}
        <select
          value={state.exerciseId ?? ""}
          onChange={(e) =>
            dispatch({ type: "SET_EXERCISE", exerciseId: e.target.value })
          }
          className="border p-2 rounded"
        >
          <option value="">Select exercise</option>
          <option value="bench">Bench Press</option>
          <option value="squat">Squat</option>
        </select>

        {/* Sets */}
        <div className="space-y-2">
          {state.sets.map((set) => (
            <div key={set.id} className="flex gap-2 items-center">
              <input
                type="number"
                value={set.reps}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SET",
                    id: set.id,
                    reps: Number(e.target.value),
                  })
                }
                className="border p-1 w-20"
                placeholder="Reps"
              />

              <input
                type="number"
                value={set.weight}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SET",
                    id: set.id,
                    weight: Number(e.target.value),
                  })
                }
                className="border p-1 w-20"
                placeholder="Weight"
              />

              <button
                onClick={() => dispatch({ type: "REMOVE_SET", id: set.id })}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() => dispatch({ type: "ADD_SET" })}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Add Set
          </button>
        </div>

        {/* Notes */}
        <textarea
          value={state.notes}
          onChange={(e) =>
            dispatch({ type: "SET_NOTES", notes: e.target.value })
          }
          className="border p-2 w-full rounded"
          placeholder="Notes..."
        />

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={state.isSaving}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {state.isSaving ? "Saving..." : "Save Session"}
        </button>
      </div>
    </main>
  );
}
