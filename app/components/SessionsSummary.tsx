import React from "react";
export type Session = {
  title?: string;
  date?: string;
  notes?: string;
  exercises: Exercises[];
};

export type Exercises = {
  name: string;
  notes?: string;
  sets?: Exercise[];
};

export type Exercise = {
  reps?: number;
  weight?: number;
  assist?: number;
  unit?: "kg" | "lb";
  duration?: string; // ex: "40s"
  notes?: string;
};

export default function SessionsSummary({ sessions }: { sessions: Session[] }) {
  return (
    <main>
      <h1>Globals stats</h1>
      <p className="bg-blue-100 font-semibold text-lg">
        {sessions.length} sessions
      </p>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
        {sessions.map((session: Session, i: number) => {
          const ExercicesNameOnly = session.exercises.map(({ name }) => name);
          return (
            <div
              key={i}
              className="rounded-2xl border-red-200 border-2 p-6  m-10-auto colspan-3"
            >
              <div className="max-w-sm bg-white rounded-xl shadow p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                  Session : {session.date}
                </h2>
                <h2 className="text-xl font-semibold">
                  Source :  {session.title}
                </h2>
                <p className="text-zinc-600">{session.exercises.length} sets</p>
                {ExercicesNameOnly.map((name) => (
                  <p key={name}>{name}</p>
                ))}
              </div>

              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  {session.title || "Session"}
                  &nbsp;
                  <span className="text-sm text-red-500 color-red-500">
                    <i>{session.date}</i>
                  </span>
                  <br />
                  <span className="text-sm text-red-500 color-red-500">
                    Sets : <i>{session.exercises.length}</i>
                  </span>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="space-y-6 m-10-auto">
        {sessions.map((session: Session, i: number) => {
          const totalSetsPerMuscleRecord = session.exercises.reduce(
            // (acc: Record<string, number>, ex: Exercises[]) => {
            (acc, ex) => {
              acc[ex.name] = ex.sets?.length || 0;
              return acc;
            },
            {},
          );

          const totalSets = session.exercises.reduce(
            (acc, ex) => acc + (ex.sets?.length || 0),
            0,
          );

          const totalVolume = session.exercises.reduce((acc, ex) => {
            const vol = ex.sets?.reduce((s, set) => {
              if (set.weight) return s + set.reps * set.weight;
              return s;
            }, 0);
            return acc + (vol || 0);
          }, 0);

          return (
            <div
              key={i}
              className="rounded-xl border border-neutral-300 p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  {session.title || "Session"}
                  &nbsp;
                  <span className="text-sm text-red-500 color-red-500">
                    <i>{session.date}</i>
                  </span>
                </h2>
              </div>

              <div className="text-sm text-neutral-700 mb-3">
                <span className="font-medium">
                  {Object.keys(totalSetsPerMuscleRecord).length}
                </span>{" "}
                Sets • <span className="font-medium">{totalSets}</span> séries •{" "}
                <span className="font-medium">
                  {Math.round(totalVolume)} kg
                </span>{" "}
                volume total
              </div>

              <ul className="text-sm text-neutral-800 space-y-1">
                {session.exercises.map((ex, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{ex.name}</span>
                    <span className="text-neutral-500">
                      {ex.sets?.length || 0} séries
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
