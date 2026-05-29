import { Button } from "./comps";
import workoutSessions from "../../../db/sourcesJson/workoutSessions.json";
import SessionsSummary from "@/ui/SessionsSummary";



export default async function Page() {
  return (
    <div className="space-y-3">
      <div className="pb-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-black">
          Dashboard
        </h1>
        <SessionsSummary sessions={workoutSessions.sessions} />
        <Button />
      </div>
    </div>
  );
}
