import { Todos } from "./todos";

export default async function Page() {
  return (
    <div className="space-y-3">
      <div className="pb-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-black">
          Dashboard
        </h1>
        <h2 className="text-2xl font-black tracking-tight text-black mt-10">
          Pages
        </h2>

        <h2 className="text-2xl font-black tracking-tight text-black mt-10">
          Todos
        </h2>
        <p className="text-black/60">
          The todos you add below are created inside your own database.
        </p>
      </div>
      <Todos />
    </div>
  );
}
