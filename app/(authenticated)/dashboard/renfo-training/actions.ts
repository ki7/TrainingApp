"use server";

import { getDatabaseClient } from "@/app/utils";

export async function saveSessionAction(payload: {
  sets: Array<{ reps: number; weight: number }>;
  notes: string;
}) {
  const db = await getDatabaseClient();
  // Example: insert into DB
  /* 
  
  Erreur de type dans actions.ts
L'erreur indique que la chaîne "workingsessions" est passée à une fonction ou méthode qui attend un objet de type SQLiteTable<TableConfig> (probablement de Drizzle ORM, une bibliothèque TypeScript pour SQLite). Cela signifie que le code tente d'utiliser une chaîne littérale au lieu d'une référence à une table définie.

Explication détaillée
Contexte probable : Dans Drizzle, les tables sont définies comme des objets exportés (ex. const workingsessions = table("workingsessions", { ... })). Ici, "workingsessions" est une simple chaîne, pas l'objet table.
Cause : TypeScript détecte une incompatibilité de types, empêchant la compilation. Cela peut arriver si vous importez mal la table ou si vous utilisez une chaîne par erreur.
Gotcha : Assurez-vous que workingsessions est bien l'objet table importé, pas son nom en chaîne. Les noms de tables sont des chaînes, mais les opérations (insert, select, etc.) nécessitent l'objet table.
Suggestion d'amélioration
Vérifiez l'importation et l'utilisation. Par exemple, si la table est définie dans un fichier séparé :

Si vous partagez plus de code autour de cette ligne (ex. la fonction appelante), je peux affiner l'explication.
*/
  /* 
  await db!.insert("workingsessions").values({
    data: JSON.stringify(payload),
    created_at: new Date(),
  })
 */
  return { ok: true };
}
