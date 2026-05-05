// types/muscles.ts
export type MuscleId =
  // Cou / haut du tronc
  | "sternocleidomastoid"
  | "trapeze_superieur_ant"
  // Épaules
  | "deltoide_anterieur"
  | "deltoide_median"
  // Poitrine
  | "grand_pectoral_claviculaire"
  | "grand_pectoral_sternal"
  // Bras
  | "biceps_brachial"
  | "brachial"
  | "brachioradialis"
  | "flexeurs_avant_bras"
  | "extenseurs_avant_bras"
  // Tronc / abdos
  | "droit_abdomen_superieur"
  | "droit_abdomen_inferieur"
  | "obliques_externes"
  | "obliques_internes_zone"
  // Hanches / cuisses
  | "iliopsoas_zone"
  | "adducteurs"
  | "sartorius"
  | "quadriceps_droit_femoral"
  | "quadriceps_vaste_medial"
  | "quadriceps_vaste_lateral"
  // Jambes
  | "tibial_anterieur"
  | "gastroc_medial_ant"
  | "gastroc_lateral_ant";

export interface MuscleMeta {
  id: MuscleId;
  name: string; // label FR
}

export const MUSCLES: MuscleMeta[] = [
  { id: "sternocleidomastoid", name: "Sterno-cléido-mastoïdien" },
  { id: "trapeze_superieur_ant", name: "Trapèze supérieur (vue antérieure)" },
  { id: "deltoide_anterieur", name: "Deltoïde antérieur" },
  { id: "deltoide_median", name: "Deltoïde médial" },
  { id: "grand_pectoral_claviculaire", name: "Grand pectoral (faisceau claviculaire)" },
  { id: "grand_pectoral_sternal", name: "Grand pectoral (faisceau sternal)" },
  { id: "biceps_brachial", name: "Biceps brachial" },
  { id: "brachial", name: "Brachial" },
  { id: "brachioradialis", name: "Brachioradialis" },
  { id: "flexeurs_avant_bras", name: "Fléchisseurs de l'avant-bras" },
  { id: "extenseurs_avant_bras", name: "Extenseurs de l'avant-bras" },
  { id: "droit_abdomen_superieur", name: "Droit de l'abdomen (supérieur)" },
  { id: "droit_abdomen_inferieur", name: "Droit de l'abdomen (inférieur)" },
  { id: "obliques_externes", name: "Obliques externes" },
  { id: "obliques_internes_zone", name: "Obliques internes (zone)" },
  { id: "iliopsoas_zone", name: "Iliopsoas (zone hanche)" },
  { id: "adducteurs", name: "Adducteurs" },
  { id: "sartorius", name: "Sartorius" },
  { id: "quadriceps_droit_femoral", name: "Quadriceps (droit fémoral)" },
  { id: "quadriceps_vaste_medial", name: "Quadriceps (vaste médial)" },
  { id: "quadriceps_vaste_lateral", name: "Quadriceps (vaste latéral)" },
  { id: "tibial_anterieur", name: "Tibial antérieur" },
  { id: "gastroc_medial_ant", name: "Gastrocnémien médial (vue antérieure)" },
  { id: "gastroc_lateral_ant", name: "Gastrocnémien latéral (vue antérieure)" },
];

export const MUSCLE_BY_ID: Record<MuscleId, MuscleMeta> = MUSCLES.reduce(
  (acc, m) => {
    acc[m.id] = m;
    return acc;
  },
  {} as Record<MuscleId, MuscleMeta>
);
