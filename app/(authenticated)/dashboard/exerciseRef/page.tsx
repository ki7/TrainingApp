import ExerciseDB from "@/app/(authenticated)/dashboard/exerciseRef/ExerciseDB";
import { Button } from "@/app/components/Button";

export default function ExerciseReferencePage() {
  return (
    <main className="p-6 max-w-xl mx-auto bg-slate-100 rounded">
      <h1 className="text-2xl font-bold mb-6">Working Sets</h1>
      <Button txt="yep"/>
      <Button primary txt="nope"/>
      <Button secondary txt="maybe"/> 
        
      
      <h1 className="text-2xl font-bold mb-6">Créer un exercice</h1>
      <ExerciseDB />
    </main>
  );
}

