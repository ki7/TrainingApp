export type WorkingSessionState = {
  error: string | null;
  exerciseId: string | null;
  sets: Array<{ id: string; reps: number; weight: number }> | null;
  notes: string | null;
  isSaving: boolean | null;
};

export type WorkingSessionAction =
  | { type: "SET_EXERCISE"; exerciseId: string }
  | { type: "ADD_SET" }
  | { type: "UPDATE_SET"; id: string; reps?: number; weight?: number }
  | { type: "REMOVE_SET"; id: string }
  | { type: "SET_NOTES"; notes: string }
  | { type: "START_SAVING"; snapshot: WorkingSessionState }
  | { type: "SAVE_SUCCESS" }
  | { type: "SAVE_ERROR"; error: string; snapshot: WorkingSessionState }
  | { type: "ROLLBACK"; snapshot: WorkingSessionState }
  | { type: "END_SAVING" };

export const initialWorkingSessionState: WorkingSessionState = {
  exerciseId: null,
  sets: [],
  notes: "",
  isSaving: false,
  error: null,
};

let actionId = 0;
export function workingSessionReducer(
  state: WorkingSessionState,
  action: WorkingSessionAction,
): WorkingSessionState {
  const _ = (newState: {}): WorkingSessionState => {
    if (process.env.NODE_ENV === "production") {
      return newState as WorkingSessionState;
    }

    if (typeof window !== "undefined") {
      console.groupCollapsed(
        `%c${name} %c#${action.type} ${++actionId}`,
        "color:#4ade80;font-weight:bold",
        "color:#60a5fa",
      );
      console.log("%cAction:", "color:#facc15", action);
      console.log("%cPrev state:", "color:#f87171", state);
      console.log("%cNext state:", "color:#34d399", newState);
      console.groupEnd();
    }
    return newState as WorkingSessionState;
  };
  
  switch (action.type) {
    case "SET_EXERCISE":
      return _({ ...state, exerciseId: action.exerciseId });

    case "ADD_SET":
      return _({
        ...state,
        sets: [...(state.sets || []), { id: crypto.randomUUID(), reps: 0, weight: 0 }],
      });

    case "UPDATE_SET":
      return _({
        ...state,
        sets: state.sets?.map((s) =>
          s.id === action.id ? { ...s, ...action } : s,
        ) ?? [],
      });

    case "REMOVE_SET":
      return _({
        ...state,
        sets: state.sets?.filter((s) => s.id !== action.id) ?? [],
      });

    case "SET_NOTES":
      return _({ ...state, notes: action.notes });

    case "START_SAVING":
      return _({ ...state, isSaving: true });

    case "END_SAVING":
      return _({ ...state, isSaving: false });

    default:
      return state;
  }
}
