import ExerciseDB from "@/app/(authenticated)/dashboard/exerciseRef/ExerciseDB";

export default function ExerciseReferencePage() {
  return (
    <main className="p-6 max-w-xl mx-auto bg-slate-100 rounded">
      <h1 className="text-2xl font-bold mb-6">Créer un exercice</h1>
      <ExerciseDB />
    </main>
  );
}

