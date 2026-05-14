import ExerciseDB from "@/app/(authenticated)/dashboard/exerciseRef/ExerciseDB";
import { Button } from "@/app/components/Button";
import {  ButtonX } from "@/app/components/ButtonX";

export default function ExerciseReferencePage() {
  return (
    <main className="p-6 max-w-xl mx-auto bg-slate-100 rounded">
      <h1 className="text-2xl font-bold mb-6">Working Sets</h1>
 {/*      <Button txt="yep"/>
      <Button primary txt="nope"/>
      <Button secondary txt="maybe"/> */} 
      <ButtonX txt="goofy"/>
      <ButtonX primary txt="primary"/>
      <ButtonX secondary txt="secondary"/>
      <ButtonX success txt="success"/>
      <ButtonX danger txt="danger"/>
      
      <h1 className="text-2xl font-bold mb-6">Créer un exercice</h1>
      <ExerciseDB />
    </main>
  );
}

