"use client"

import { useReducer } from "react"
import {
  workingSessionReducer,
  initialWorkingSessionState,
} from "../state/workingsession.reducer"
import { saveSessionOptimistic } from "../state/workingsession.actions"

export default function Workingsession() {
  const [state, dispatch] = useReducer(
    workingSessionReducer,
    initialWorkingSessionState
  )

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={() => saveSessionOptimistic(state, dispatch)}
        disabled={state.isSaving}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {state.isSaving ? "Saving..." : "Save Session"}
      </button>

      {state.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}
    </div>
  )
}
