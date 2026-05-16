import { Button } from "./comps";

export default async function Page() {
  return (
    <div className="space-y-3">
      <div className="pb-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-black">
          Dashboard
        </h1>
        <Button />
      </div>
    </div>
  );
}
