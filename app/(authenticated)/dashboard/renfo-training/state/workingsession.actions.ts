import { saveSessionAction } from "../actions"
import {
  WorkingSessionState,
  WorkingSessionAction,
} from "./workingsession.reducer"

export async function saveSessionOptimistic(
  state: WorkingSessionState,
  dispatch: React.Dispatch<WorkingSessionAction>
) {
  const snapshot = structuredClone(state)

  dispatch({ type: "START_SAVING", snapshot })

  try {
    await saveSessionAction({
      sets: state.sets.map(({ reps, weight }) => ({ reps, weight })),
      notes: state.notes,
    })

    dispatch({ type: "SAVE_SUCCESS" })
  } catch (err: any) {
    dispatch({ type: "SAVE_ERROR", error: err.message, snapshot })
    dispatch({ type: "ROLLBACK", snapshot })
  }
}
