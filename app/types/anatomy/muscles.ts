export type MuscleHeadKey = {
  muscle: string; // FR global, ex: "Grand pectoral"
  head: string; // FR chef, ex: "faisceau sternal" ou "global"
};

export interface MuscleHeadMeta {
  biodigitalId: string | null;
}

export const MUSCLE_HEAD_DICTIONARY: Record<string, MuscleHeadMeta> = {
  // Grand pectoral
  "Grand pectoral|global": {
    biodigitalId: "pectoralis_major_muscle",
  },
  "Grand pectoral|faisceau sternal": {
    biodigitalId: "pectoralis_major_sternal_head_muscle",
  },
  "Grand pectoral|faisceau claviculaire": {
    biodigitalId: "pectoralis_major_clavicular_head_muscle",
  },

  // Grand dorsal
  "Grand dorsal|global": {
    biodigitalId: "latissimus_dorsi_muscle",
  },

  // Triceps brachial
  "Triceps brachial|longue portion": {
    biodigitalId: "triceps_brachii_long_head_muscle",
  },
  "Triceps brachial|chef latéral": {
    biodigitalId: "triceps_brachii_lateral_head_muscle",
  },
  "Triceps brachial|chef médial": {
    biodigitalId: "triceps_brachii_medial_head_muscle",
  },

  // Quadriceps
  "Quadriceps|vaste médial": {
    biodigitalId: "vastus_medialis_muscle",
  },
  "Quadriceps|vaste latéral": {
    biodigitalId: "vastus_lateralis_muscle",
  },
  "Quadriceps|droit fémoral": {
    biodigitalId: "rectus_femoris_muscle",
  },
  "Quadriceps|vaste intermédiaire": {
    biodigitalId: "vastus_intermedius_muscle",
  },

  // Deltoïde
  "Deltoïde antérieur|global": {
    biodigitalId: "deltoid_anterior_head_muscle",
  },
  "Deltoïde médial|global": {
    biodigitalId: "deltoid_middle_head_muscle",
  },
  "Deltoïde postérieur|global": {
    biodigitalId: "deltoid_posterior_head_muscle",
  },

  // etc. → tu complètes progressivement
};
