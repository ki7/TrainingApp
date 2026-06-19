export type Category = "machine" | "bodyweight" | "barbell" | "dumbbell";
export type Laterality = "bilateral" | "unilateral" | "both";

export interface MuscleGroups {
  primary: string[];
  secondary: string[];
  tertiary: string[];
}

export interface Exercise {
  name: string;
  category: Category;
  laterality: Laterality;
  muscles: MuscleGroups;
}

export const EXERCISES: Exercise[] = [
  // ─── MACHINES ──────────────────────────────────────────────────────────────
  {
    name: "ISO-Lateral Front Lat Pulldown",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Rhomboïdes",
        "Trapèze inférieur",
      ],
      tertiary: [
        "Deltoïde postérieur",
        "Infraépineux",
        "Petit rond",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Pullover machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand pectoral (faisceau sternal)"],
      secondary: ["Grand rond", "Triceps brachial (longue portion)"],
      tertiary: ["Dentelé antérieur", "Rhomboïdes", "Coracobrachial"],
    },
  },
  {
    name: "ISO-Lateral Shoulder Press",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: [
        "Triceps brachial",
        "Trapèze supérieur",
        "Coiffe des rotateurs",
      ],
      tertiary: ["Deltoïde postérieur", "Dentelé antérieur"],
    },
  },
  {
    name: "Shoulder Press machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: ["Triceps brachial", "Trapèze supérieur"],
      tertiary: [
        "Deltoïde postérieur",
        "Coiffe des rotateurs",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Tirage horizontal double poulie",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Rhomboïdes", "Trapèze médial"],
      secondary: ["Biceps brachial", "Brachial", "Grand rond"],
      tertiary: ["Deltoïde postérieur", "Érecteurs du rachis", "Infraépineux"],
    },
  },
  {
    name: "Traction assistée",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Rhomboïdes",
        "Trapèze inférieur",
      ],
      tertiary: [
        "Deltoïde postérieur",
        "Infraépineux",
        "Petit rond",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Chest Fly / Pec Deck",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Grand pectoral (faisceau sternal)",
        "Grand pectoral (faisceau claviculaire)",
      ],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: ["Biceps brachial (stabilisation)", "Dentelé antérieur"],
    },
  },
  {
    name: "Chest Press machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: ["Dentelé antérieur", "Coiffe des rotateurs"],
    },
  },
  {
    name: "SO Latéral Row",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: ["Biceps brachial", "Brachioradialis", "Rhomboïdes"],
      tertiary: ["Deltoïde postérieur", "Trapèze médial", "Infraépineux"],
    },
  },
  {
    name: "Abdominal Oblique Crunch machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Obliques internes", "Obliques externes"],
      secondary: ["Droit de l'abdomen", "Transverse de l'abdomen"],
      tertiary: ["Iliopsoas", "Carré des lombes", "Multifides"],
    },
  },
  {
    name: "Hack Squat",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps (vaste médial, vaste latéral, droit fémoral)"],
      secondary: ["Grand fessier", "Moyen fessier", "Ischio-jambiers"],
      tertiary: [
        "Soléaire",
        "Gastrocnémiens",
        "Érecteurs du rachis",
        "Adducteurs",
      ],
    },
  },
  {
    name: "ISO-Lateral Leg Extension",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: [
        "Quadriceps (vaste médial, vaste latéral, droit fémoral, vaste intermédiaire)",
      ],
      secondary: [],
      tertiary: ["Tibial antérieur (stabilisation)", "Tenseur du fascia lata"],
    },
  },
  {
    name: "Biceps seated (curl machine)",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Biceps brachial"],
      secondary: ["Brachial", "Brachioradialis"],
      tertiary: [
        "Supinateur",
        "Deltoïde antérieur (stabilisation)",
        "Fléchisseurs de l'avant-bras",
      ],
    },
  },
  {
    name: "Rameur machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Quadriceps", "Grand fessier"],
      secondary: [
        "Ischio-jambiers",
        "Biceps brachial",
        "Rhomboïdes",
        "Trapèze médial",
      ],
      tertiary: [
        "Érecteurs du rachis",
        "Abdominaux",
        "Deltoïde postérieur",
        "Gastrocnémiens",
        "Soléaire",
      ],
    },
  },
  {
    name: "Papillon épaule extérieur (Rear Delt Fly)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde postérieur"],
      secondary: [
        "Rhomboïdes",
        "Trapèze médial",
        "Trapèze inférieur",
        "Infraépineux",
        "Petit rond",
      ],
      tertiary: [
        "Grand dorsal",
        "Biceps brachial (stabilisation)",
        "Érecteurs du rachis",
      ],
    },
  },
  {
    name: "Back Extension machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Érecteurs du rachis (iliocostal, longissimus, épineux)"],
      secondary: ["Grand fessier", "Ischio-jambiers"],
      tertiary: ["Carré des lombes", "Multifides", "Moyen fessier"],
    },
  },
  {
    name: "Leg Press",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteurs"],
      tertiary: [
        "Soléaire",
        "Gastrocnémiens",
        "Érecteurs du rachis (stabilisation)",
      ],
    },
  },
  {
    name: "Leg Curl couché",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Biceps fémoral", "Semi-tendineux", "Semi-membraneux"],
      secondary: ["Gastrocnémiens", "Poplité"],
      tertiary: ["Sartorius", "Gracile", "Grand fessier (stabilisation)"],
    },
  },
  {
    name: "Leg Curl assis",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Biceps fémoral", "Semi-tendineux", "Semi-membraneux"],
      secondary: ["Gastrocnémiens"],
      tertiary: ["Poplité", "Sartorius", "Gracile"],
    },
  },
  {
    name: "Hip Thrust machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers", "Adducteur magnus"],
      tertiary: [
        "Érecteurs du rachis",
        "Transverse de l'abdomen",
        "Carré des lombes",
      ],
    },
  },
  {
    name: "Abducteur (Hip Abduction)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Moyen fessier", "Petit fessier", "Tenseur du fascia lata"],
      secondary: ["Piriforme", "Obturateur interne"],
      tertiary: ["Grand fessier (faisceau sup.)", "Sartorius"],
    },
  },
  {
    name: "Adducteur (Hip Adduction)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Adducteur long",
        "Adducteur court",
        "Adducteur magnus",
        "Gracile",
      ],
      secondary: ["Pectiné", "Obturateur externe"],
      tertiary: ["Iliopsoas", "Droit interne"],
    },
  },
  {
    name: "Standing Calf Raise machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Gastrocnémien médial", "Gastrocnémien latéral"],
      secondary: ["Soléaire"],
      tertiary: [
        "Tibial postérieur",
        "Fléchisseurs des orteils",
        "Péronier long",
      ],
    },
  },
  {
    name: "Seated Calf Raise machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Soléaire"],
      secondary: ["Gastrocnémiens (faible, genou fléchi)"],
      tertiary: ["Tibial postérieur", "Fléchisseurs des orteils"],
    },
  },
  {
    name: "Triceps Pushdown (poulie haute)",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Triceps brachial (chef latéral, chef médial, longue portion)"],
      secondary: ["Anconé"],
      tertiary: [
        "Fléchisseurs du poignet (stabilisation)",
        "Deltoïde (stabilisation)",
      ],
    },
  },
  {
    name: "Curl poulie basse",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Biceps brachial"],
      secondary: ["Brachial", "Brachioradialis"],
      tertiary: ["Supinateur", "Fléchisseurs de l'avant-bras"],
    },
  },
  {
    name: "Face Pull (poulie haute)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde postérieur", "Infraépineux", "Petit rond"],
      secondary: ["Rhomboïdes", "Trapèze médial", "Trapèze inférieur"],
      tertiary: ["Biceps brachial", "Grand rond", "Érecteurs du rachis"],
    },
  },
  {
    name: "Lat Pulldown (tirage poitrine)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Rhomboïdes",
        "Trapèze inférieur",
      ],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Dentelé antérieur"],
    },
  },
  {
    name: "Cable Crossover",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral"],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: ["Dentelé antérieur", "Biceps brachial (stabilisation)"],
    },
  },
  {
    name: "Shoulder Lateral Raise machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Deltoïde médial"],
      secondary: ["Deltoïde antérieur", "Trapèze supérieur"],
      tertiary: [
        "Deltoïde postérieur",
        "Coiffe des rotateurs",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Crunch abdominaux machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen"],
      secondary: ["Obliques internes", "Obliques externes"],
      tertiary: ["Transverse de l'abdomen", "Iliopsoas (stabilisation)"],
    },
  },
  {
    name: "Smith Machine Squat",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteurs"],
      tertiary: [
        "Érecteurs du rachis",
        "Soléaire",
        "Gastrocnémiens",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Pec Deck incliné (upper chest)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau claviculaire)"],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: ["Biceps brachial (stabilisation)", "Dentelé antérieur"],
    },
  },
  {
    name: "Rotator Cuff machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Infraépineux", "Petit rond", "Subscapulaire", "Sus-épineux"],
      secondary: ["Deltoïde postérieur"],
      tertiary: ["Rhomboïdes", "Trapèze inférieur"],
    },
  },
  {
    name: "Hip Extension machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers (chef long)"],
      tertiary: ["Piriforme", "Petit fessier", "Érecteurs du rachis"],
    },
  },
  {
    name: "Chest Press incliné machine",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: [
        "Grand pectoral (faisceau claviculaire)",
        "Grand pectoral (faisceau sternal)",
      ],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: ["Dentelé antérieur", "Coiffe des rotateurs"],
    },
  },
  {
    name: "Ground Base Squat / Lunge",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: [
        "Gastrocnémiens",
        "Soléaire",
        "Érecteurs du rachis",
        "Abdominaux (stabilisation)",
        "Tibial antérieur",
      ],
    },
  },
  {
    name: "ISO-Lateral Kneeling Leg Curl",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Biceps fémoral", "Semi-tendineux", "Semi-membraneux"],
      secondary: ["Gastrocnémiens", "Poplité"],
      tertiary: ["Sartorius", "Gracile", "Grand fessier (stabilisation)"],
    },
  },
  {
    name: "V-Squat",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Quadriceps (vaste médial, vaste latéral, droit fémoral)",
        "Grand fessier",
      ],
      secondary: ["Ischio-jambiers", "Adducteurs", "Moyen fessier"],
      tertiary: [
        "Érecteurs du rachis",
        "Gastrocnémiens",
        "Soléaire",
        "Tibial antérieur",
      ],
    },
  },
  {
    name: "Glute Drive",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Ischio-jambiers", "Adducteur magnus", "Moyen fessier"],
      tertiary: [
        "Transverse de l'abdomen",
        "Carré des lombes",
        "Érecteurs du rachis",
      ],
    },
  },
  {
    name: "Linear Leg Press",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteurs"],
      tertiary: ["Soléaire", "Gastrocnémiens", "Tibial antérieur"],
    },
  },
  {
    name: "T-Bar Row",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Trapèze médial", "Rhomboïdes"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Grand rond",
        "Érecteurs du rachis",
      ],
      tertiary: [
        "Deltoïde postérieur",
        "Infraépineux",
        "Ischio-jambiers",
        "Grand fessier (stabilisation)",
      ],
    },
  },
  {
    name: "Glute Ham Raise (GHR)",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Biceps fémoral",
        "Semi-tendineux",
        "Semi-membraneux",
        "Grand fessier",
      ],
      secondary: ["Érecteurs du rachis", "Gastrocnémiens"],
      tertiary: ["Adducteur magnus", "Soléaire", "Multifides"],
    },
  },
  {
    name: "Reverse Hyper",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier", "Érecteurs du rachis (lombaires)"],
      secondary: ["Ischio-jambiers", "Moyen fessier"],
      tertiary: ["Carré des lombes", "Multifides", "Piriforme"],
    },
  },
  {
    name: "Seated Dip machine",
    category: "machine",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Triceps brachial (3 chefs)",
        "Grand pectoral (faisceau inférieur)",
      ],
      secondary: ["Deltoïde antérieur", "Anconé"],
      tertiary: ["Coracobrachial", "Dentelé antérieur", "Coiffe des rotateurs"],
    },
  },
  {
    name: "Plate Loaded Lat Raise",
    category: "machine",
    laterality: "both",
    muscles: {
      primary: ["Deltoïde médial"],
      secondary: ["Deltoïde antérieur", "Trapèze supérieur", "Sus-épineux"],
      tertiary: [
        "Deltoïde postérieur",
        "Coiffe des rotateurs",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "ISO-Lateral Row",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand dorsal", "Rhomboïdes", "Trapèze médial"],
      secondary: ["Biceps brachial", "Brachial", "Grand rond"],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Érecteurs du rachis"],
    },
  },
  {
    name: "ISO-Lateral Low Row",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand dorsal (faisceau inférieur)", "Grand rond"],
      secondary: ["Biceps brachial", "Brachial", "Rhomboïdes"],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Érecteurs du rachis"],
    },
  },
  {
    name: "ISO-Lateral Bench Press",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau sternal)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: ["Dentelé antérieur", "Coiffe des rotateurs", "Coracobrachial"],
    },
  },
  {
    name: "ISO-Lateral Incline Press",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau claviculaire)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: [
        "Grand pectoral (faisceau sternal)",
        "Dentelé antérieur",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "ISO-Lateral Wide Chest",
    category: "machine",
    laterality: "unilateral",
    muscles: {
      primary: [
        "Grand pectoral (faisceau sternal)",
        "Grand pectoral (faisceau claviculaire)",
      ],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: [
        "Dentelé antérieur",
        "Biceps brachial (stabilisation)",
        "Coiffe des rotateurs",
      ],
    },
  },

  // ─── POIDS DU CORPS ────────────────────────────────────────────────────────
  {
    name: "Traction (Pull-up)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Rhomboïdes",
        "Trapèze inférieur",
      ],
      tertiary: [
        "Deltoïde postérieur",
        "Infraépineux",
        "Dentelé antérieur",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Traction prise neutre (Chin-up)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Biceps brachial"],
      secondary: ["Brachial", "Brachioradialis", "Grand rond", "Rhomboïdes"],
      tertiary: [
        "Trapèze inférieur",
        "Deltoïde postérieur",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Pompes (Push-up)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral", "Triceps brachial"],
      secondary: ["Deltoïde antérieur", "Dentelé antérieur"],
      tertiary: ["Coracobrachial", "Abdominaux", "Érecteurs du rachis"],
    },
  },
  {
    name: "Pompes inclinées (Pike Push-up)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: ["Triceps brachial", "Grand pectoral (faisceau claviculaire)"],
      tertiary: [
        "Trapèze supérieur",
        "Dentelé antérieur",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "Pompes déclinées (Decline Push-up)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau inférieur)", "Triceps brachial"],
      secondary: ["Deltoïde antérieur", "Dentelé antérieur"],
      tertiary: ["Coracobrachial", "Abdominaux"],
    },
  },
  {
    name: "Dips (barres parallèles)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau inférieur)", "Triceps brachial"],
      secondary: ["Deltoïde antérieur", "Anconé", "Coracobrachial"],
      tertiary: ["Dentelé antérieur", "Rhomboïdes", "Abdominaux"],
    },
  },
  {
    name: "Squat (poids du corps)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteurs"],
      tertiary: [
        "Soléaire",
        "Gastrocnémiens",
        "Érecteurs du rachis",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Fente avant (poids du corps)",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: [
        "Gastrocnémiens",
        "Soléaire",
        "Tibial antérieur",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Fente latérale",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Adducteurs", "Quadriceps", "Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Érecteurs du rachis"],
    },
  },
  {
    name: "Bulgarian Split Squat",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: [
        "Gastrocnémiens",
        "Soléaire",
        "Érecteurs du rachis",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Step-up (poids du corps)",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Abdominaux"],
    },
  },
  {
    name: "Glute Bridge (poids du corps)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier"],
      tertiary: [
        "Érecteurs du rachis",
        "Transverse de l'abdomen",
        "Adducteurs",
      ],
    },
  },
  {
    name: "Single-Leg Glute Bridge",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier"],
      tertiary: ["Érecteurs du rachis", "Abdominaux", "Adducteurs"],
    },
  },
  {
    name: "Nordic Curl",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Biceps fémoral", "Semi-tendineux", "Semi-membraneux"],
      secondary: ["Gastrocnémiens", "Grand fessier"],
      tertiary: ["Soléaire", "Poplité", "Érecteurs du rachis"],
    },
  },
  {
    name: "Crunch",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen"],
      secondary: ["Obliques internes", "Obliques externes"],
      tertiary: ["Transverse de l'abdomen", "Iliopsoas (stabilisation)"],
    },
  },
  {
    name: "Crunch oblique",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Obliques internes", "Obliques externes"],
      secondary: ["Droit de l'abdomen"],
      tertiary: ["Transverse de l'abdomen", "Carré des lombes"],
    },
  },
  {
    name: "Planche (Plank)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Transverse de l'abdomen", "Droit de l'abdomen"],
      secondary: [
        "Obliques internes",
        "Obliques externes",
        "Érecteurs du rachis",
      ],
      tertiary: [
        "Grand fessier",
        "Quadriceps",
        "Deltoïdes",
        "Triceps brachial",
      ],
    },
  },
  {
    name: "Planche latérale (Side Plank)",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Obliques internes", "Obliques externes", "Carré des lombes"],
      secondary: ["Transverse de l'abdomen", "Moyen fessier"],
      tertiary: ["Grand fessier", "Adducteurs", "Deltoïde médial"],
    },
  },
  {
    name: "Superman",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Érecteurs du rachis", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Rhomboïdes", "Trapèze"],
      tertiary: ["Multifides", "Carré des lombes", "Deltoïde postérieur"],
    },
  },
  {
    name: "Hollow Body Hold",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen", "Transverse de l'abdomen"],
      secondary: ["Obliques", "Iliopsoas"],
      tertiary: ["Quadriceps", "Grand fessier", "Érecteurs du rachis"],
    },
  },
  {
    name: "L-Sit",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen", "Iliopsoas", "Droit fémoral"],
      secondary: ["Transverse de l'abdomen", "Obliques", "Triceps brachial"],
      tertiary: ["Grand pectoral", "Deltoïde antérieur", "Quadriceps"],
    },
  },
  {
    name: "Muscle-up",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand pectoral", "Triceps brachial"],
      secondary: ["Biceps brachial", "Deltoïde antérieur", "Rhomboïdes"],
      tertiary: ["Abdominaux", "Dentelé antérieur", "Grand rond"],
    },
  },
  {
    name: "Dips anneaux",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral", "Triceps brachial"],
      secondary: ["Deltoïde antérieur", "Coracobrachial", "Dentelé antérieur"],
      tertiary: ["Coiffe des rotateurs", "Rhomboïdes", "Abdominaux"],
    },
  },
  {
    name: "Traction anneaux",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand rond"],
      secondary: ["Biceps brachial", "Rhomboïdes", "Trapèze inférieur"],
      tertiary: ["Infraépineux", "Deltoïde postérieur", "Abdominaux"],
    },
  },
  {
    name: "Pistol Squat",
    category: "bodyweight",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteurs"],
      tertiary: [
        "Gastrocnémiens",
        "Soléaire",
        "Abdominaux",
        "Tibial antérieur",
      ],
    },
  },
  {
    name: "Burpee",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral", "Quadriceps", "Grand fessier"],
      secondary: ["Triceps brachial", "Ischio-jambiers", "Deltoïde antérieur"],
      tertiary: ["Abdominaux", "Gastrocnémiens", "Érecteurs du rachis"],
    },
  },
  {
    name: "Mountain Climber",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen", "Iliopsoas", "Quadriceps"],
      secondary: ["Obliques", "Transverse de l'abdomen", "Grand fessier"],
      tertiary: ["Deltoïdes", "Triceps brachial", "Gastrocnémiens"],
    },
  },
  {
    name: "Leg Raise couché",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Iliopsoas", "Droit de l'abdomen (bas)", "Droit fémoral"],
      secondary: ["Obliques", "Transverse de l'abdomen"],
      tertiary: ["Sartorius", "Tenseur du fascia lata", "Adducteurs"],
    },
  },
  {
    name: "Hanging Leg Raise",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Droit de l'abdomen (bas)", "Iliopsoas", "Droit fémoral"],
      secondary: [
        "Obliques",
        "Transverse de l'abdomen",
        "Grand dorsal (stabilisation)",
      ],
      tertiary: ["Sartorius", "Tenseur du fascia lata", "Avant-bras"],
    },
  },
  {
    name: "Inverted Row (TRX / barre basse)",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Rhomboïdes", "Trapèze médial", "Grand dorsal"],
      secondary: ["Biceps brachial", "Brachial", "Deltoïde postérieur"],
      tertiary: ["Érecteurs du rachis", "Grand fessier", "Abdominaux"],
    },
  },
  {
    name: "Wall Sit",
    category: "bodyweight",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps"],
      secondary: ["Grand fessier", "Ischio-jambiers"],
      tertiary: ["Moyen fessier", "Gastrocnémiens", "Adducteurs"],
    },
  },

  // ─── BARRE / CHARGE LIBRE ──────────────────────────────────────────────────
  {
    name: "Squat barre (Back Squat)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: [
        "Ischio-jambiers",
        "Moyen fessier",
        "Adducteurs",
        "Érecteurs du rachis",
      ],
      tertiary: ["Soléaire", "Gastrocnémiens", "Abdominaux", "Multifides"],
    },
  },
  {
    name: "Front Squat",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Adducteurs", "Moyen fessier", "Érecteurs du rachis"],
      tertiary: ["Soléaire", "Gastrocnémiens", "Abdominaux"],
    },
  },
  {
    name: "Deadlift (Soulevé de terre)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Érecteurs du rachis", "Grand fessier", "Ischio-jambiers"],
      secondary: ["Quadriceps", "Trapèze", "Rhomboïdes", "Grand dorsal"],
      tertiary: ["Avant-bras", "Abdominaux", "Moyen fessier", "Gastrocnémiens"],
    },
  },
  {
    name: "Romanian Deadlift (RDL)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Ischio-jambiers (biceps fémoral, semi-tendineux, semi-membraneux)",
        "Grand fessier",
      ],
      secondary: ["Érecteurs du rachis", "Adducteur magnus"],
      tertiary: ["Grand dorsal", "Trapèze", "Avant-bras", "Moyen fessier"],
    },
  },
  {
    name: "Sumo Deadlift",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier", "Adducteurs", "Quadriceps"],
      secondary: ["Ischio-jambiers", "Érecteurs du rachis", "Trapèze"],
      tertiary: [
        "Moyen fessier",
        "Grand dorsal",
        "Avant-bras",
        "Gastrocnémiens",
      ],
    },
  },
  {
    name: "Bench Press (développé couché plat)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau sternal)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: ["Dentelé antérieur", "Coiffe des rotateurs", "Coracobrachial"],
    },
  },
  {
    name: "Bench Press incliné",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau claviculaire)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: [
        "Grand pectoral (faisceau sternal)",
        "Dentelé antérieur",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "Bench Press décliné",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau inférieur et sternal)"],
      secondary: ["Triceps brachial", "Deltoïde antérieur"],
      tertiary: ["Coracobrachial", "Dentelé antérieur", "Coiffe des rotateurs"],
    },
  },
  {
    name: "Overhead Press (développé militaire)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: [
        "Triceps brachial",
        "Trapèze supérieur",
        "Coiffe des rotateurs",
      ],
      tertiary: [
        "Dentelé antérieur",
        "Érecteurs du rachis",
        "Abdominaux",
        "Grand fessier",
      ],
    },
  },
  {
    name: "Barbell Row (tirage barre)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Rhomboïdes", "Trapèze médial"],
      secondary: [
        "Biceps brachial",
        "Brachial",
        "Grand rond",
        "Érecteurs du rachis",
      ],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Ischio-jambiers"],
    },
  },
  {
    name: "Pendlay Row",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Rhomboïdes", "Trapèze médial"],
      secondary: ["Biceps brachial", "Brachial", "Grand rond"],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Érecteurs du rachis"],
    },
  },
  {
    name: "Barbell Curl",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Biceps brachial"],
      secondary: ["Brachial", "Brachioradialis"],
      tertiary: [
        "Supinateur",
        "Fléchisseurs de l'avant-bras",
        "Deltoïde antérieur (stabilisation)",
      ],
    },
  },
  {
    name: "Skull Crusher (barre EZ)",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Triceps brachial (chef latéral, chef médial, longue portion)"],
      secondary: ["Anconé"],
      tertiary: ["Deltoïde (stabilisation)", "Fléchisseurs du poignet"],
    },
  },
  {
    name: "Good Morning",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Ischio-jambiers", "Érecteurs du rachis"],
      secondary: ["Grand fessier", "Adducteur magnus"],
      tertiary: [
        "Moyen fessier",
        "Multifides",
        "Carré des lombes",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Hip Thrust barre",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Ischio-jambiers", "Adducteur magnus", "Moyen fessier"],
      tertiary: [
        "Érecteurs du rachis",
        "Transverse de l'abdomen",
        "Quadriceps",
      ],
    },
  },
  {
    name: "Barbell Lunge",
    category: "barbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: [
        "Gastrocnémiens",
        "Soléaire",
        "Érecteurs du rachis",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Barbell Bulgarian Split Squat",
    category: "barbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Érecteurs du rachis"],
    },
  },
  {
    name: "Power Clean",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier", "Quadriceps", "Érecteurs du rachis"],
      secondary: ["Trapèze", "Ischio-jambiers", "Gastrocnémiens"],
      tertiary: ["Deltoïdes", "Abdominaux", "Avant-bras", "Grand dorsal"],
    },
  },
  {
    name: "Clean & Jerk",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier", "Quadriceps", "Deltoïdes", "Triceps brachial"],
      secondary: [
        "Érecteurs du rachis",
        "Trapèze",
        "Ischio-jambiers",
        "Gastrocnémiens",
      ],
      tertiary: [
        "Abdominaux",
        "Avant-bras",
        "Grand dorsal",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "Snatch",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier", "Quadriceps", "Deltoïdes"],
      secondary: [
        "Érecteurs du rachis",
        "Trapèze",
        "Ischio-jambiers",
        "Gastrocnémiens",
      ],
      tertiary: [
        "Abdominaux",
        "Avant-bras",
        "Grand dorsal",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "Barbell Shrug",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Trapèze supérieur"],
      secondary: ["Trapèze médial", "Élévateur de la scapula"],
      tertiary: ["Avant-bras", "Rhomboïdes", "Deltoïde médial"],
    },
  },
  {
    name: "Upright Row",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde médial", "Trapèze supérieur"],
      secondary: ["Deltoïde antérieur", "Sus-épineux", "Biceps brachial"],
      tertiary: ["Brachial", "Brachioradialis", "Infraépineux"],
    },
  },
  {
    name: "Close-Grip Bench Press",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Triceps brachial"],
      secondary: ["Grand pectoral (faisceau sternal)", "Deltoïde antérieur"],
      tertiary: ["Anconé", "Coiffe des rotateurs", "Dentelé antérieur"],
    },
  },
  {
    name: "Zercher Squat",
    category: "barbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier", "Érecteurs du rachis"],
      secondary: ["Ischio-jambiers", "Adducteurs", "Biceps brachial"],
      tertiary: ["Abdominaux", "Moyen fessier", "Gastrocnémiens"],
    },
  },

  // ─── HALTÈRES ──────────────────────────────────────────────────────────────
  {
    name: "Dumbbell Press plat",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau sternal)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: ["Dentelé antérieur", "Coiffe des rotateurs", "Coracobrachial"],
    },
  },
  {
    name: "Dumbbell Press incliné",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau claviculaire)"],
      secondary: ["Deltoïde antérieur", "Triceps brachial"],
      tertiary: [
        "Grand pectoral (faisceau sternal)",
        "Dentelé antérieur",
        "Coiffe des rotateurs",
      ],
    },
  },
  {
    name: "Dumbbell Press décliné",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau inférieur)"],
      secondary: ["Triceps brachial", "Deltoïde antérieur"],
      tertiary: ["Coracobrachial", "Dentelé antérieur"],
    },
  },
  {
    name: "Dumbbell Fly plat",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: [
        "Grand pectoral (faisceau sternal)",
        "Grand pectoral (faisceau claviculaire)",
      ],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: ["Biceps brachial (stabilisation)", "Dentelé antérieur"],
    },
  },
  {
    name: "Dumbbell Fly incliné",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand pectoral (faisceau claviculaire)"],
      secondary: ["Deltoïde antérieur", "Coracobrachial"],
      tertiary: [
        "Grand pectoral (faisceau sternal)",
        "Biceps brachial (stabilisation)",
      ],
    },
  },
  {
    name: "Dumbbell Shoulder Press",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: ["Triceps brachial", "Trapèze supérieur"],
      tertiary: [
        "Deltoïde postérieur",
        "Coiffe des rotateurs",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Dumbbell Lateral Raise",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Deltoïde médial"],
      secondary: ["Deltoïde antérieur", "Trapèze supérieur", "Sus-épineux"],
      tertiary: [
        "Deltoïde postérieur",
        "Coiffe des rotateurs",
        "Dentelé antérieur",
      ],
    },
  },
  {
    name: "Dumbbell Front Raise",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Deltoïde antérieur"],
      secondary: ["Deltoïde médial", "Grand pectoral (faisceau claviculaire)"],
      tertiary: [
        "Trapèze supérieur",
        "Biceps brachial (stabilisation)",
        "Sus-épineux",
      ],
    },
  },
  {
    name: "Dumbbell Rear Delt Fly",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde postérieur"],
      secondary: ["Rhomboïdes", "Trapèze médial", "Infraépineux", "Petit rond"],
      tertiary: [
        "Grand dorsal",
        "Biceps brachial (stabilisation)",
        "Trapèze inférieur",
      ],
    },
  },
  {
    name: "Dumbbell Row (unilatéral)",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Grand dorsal", "Rhomboïdes", "Trapèze médial"],
      secondary: ["Biceps brachial", "Brachial", "Grand rond"],
      tertiary: ["Deltoïde postérieur", "Infraépineux", "Érecteurs du rachis"],
    },
  },
  {
    name: "Dumbbell Pullover",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand dorsal", "Grand pectoral (faisceau sternal)"],
      secondary: ["Grand rond", "Triceps brachial (longue portion)"],
      tertiary: ["Dentelé antérieur", "Rhomboïdes", "Coracobrachial"],
    },
  },
  {
    name: "Dumbbell Curl",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Biceps brachial"],
      secondary: ["Brachial", "Brachioradialis"],
      tertiary: [
        "Supinateur",
        "Fléchisseurs de l'avant-bras",
        "Deltoïde antérieur (stabilisation)",
      ],
    },
  },
  {
    name: "Hammer Curl",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Brachial", "Brachioradialis"],
      secondary: ["Biceps brachial"],
      tertiary: ["Supinateur", "Fléchisseurs de l'avant-bras"],
    },
  },
  {
    name: "Concentration Curl",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Biceps brachial (chef court)"],
      secondary: ["Brachial"],
      tertiary: ["Brachioradialis", "Supinateur"],
    },
  },
  {
    name: "Dumbbell Triceps Kickback",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Triceps brachial (chef latéral, chef médial)"],
      secondary: ["Anconé"],
      tertiary: ["Deltoïde postérieur (stabilisation)", "Rhomboïdes"],
    },
  },
  {
    name: "Dumbbell Overhead Triceps Extension",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Triceps brachial (longue portion)"],
      secondary: ["Triceps brachial (chef médial, chef latéral)", "Anconé"],
      tertiary: ["Coiffe des rotateurs", "Deltoïde (stabilisation)"],
    },
  },
  {
    name: "Dumbbell Goblet Squat",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Adducteurs", "Moyen fessier", "Ischio-jambiers"],
      tertiary: [
        "Érecteurs du rachis",
        "Soléaire",
        "Gastrocnémiens",
        "Abdominaux",
      ],
    },
  },
  {
    name: "Dumbbell Romanian Deadlift",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Ischio-jambiers", "Grand fessier"],
      secondary: ["Érecteurs du rachis", "Adducteur magnus"],
      tertiary: ["Grand dorsal", "Avant-bras", "Moyen fessier"],
    },
  },
  {
    name: "Dumbbell Lunge",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier", "Adducteur magnus"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Abdominaux"],
    },
  },
  {
    name: "Dumbbell Bulgarian Split Squat",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Ischio-jambiers", "Moyen fessier"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Érecteurs du rachis"],
    },
  },
  {
    name: "Dumbbell Step-up",
    category: "dumbbell",
    laterality: "unilateral",
    muscles: {
      primary: ["Quadriceps", "Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Abdominaux"],
    },
  },
  {
    name: "Dumbbell Hip Thrust",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Grand fessier"],
      secondary: ["Ischio-jambiers", "Adducteur magnus", "Moyen fessier"],
      tertiary: [
        "Érecteurs du rachis",
        "Transverse de l'abdomen",
        "Quadriceps",
      ],
    },
  },
  {
    name: "Dumbbell Sumo Squat",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Adducteurs", "Quadriceps", "Grand fessier"],
      secondary: ["Moyen fessier", "Ischio-jambiers"],
      tertiary: ["Gastrocnémiens", "Soléaire", "Érecteurs du rachis"],
    },
  },
  {
    name: "Dumbbell Shrug",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Trapèze supérieur"],
      secondary: ["Trapèze médial", "Élévateur de la scapula"],
      tertiary: ["Avant-bras", "Rhomboïdes"],
    },
  },
  {
    name: "Dumbbell Upright Row",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde médial", "Trapèze supérieur"],
      secondary: ["Deltoïde antérieur", "Sus-épineux", "Biceps brachial"],
      tertiary: ["Brachial", "Brachioradialis"],
    },
  },
  {
    name: "Farmer's Walk",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Avant-bras (fléchisseurs)", "Trapèze supérieur"],
      secondary: ["Grand fessier", "Quadriceps", "Érecteurs du rachis"],
      tertiary: ["Abdominaux", "Moyen fessier", "Gastrocnémiens"],
    },
  },
  {
    name: "Dumbbell Arnold Press",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde antérieur", "Deltoïde médial"],
      secondary: [
        "Triceps brachial",
        "Trapèze supérieur",
        "Coiffe des rotateurs",
      ],
      tertiary: ["Deltoïde postérieur", "Dentelé antérieur"],
    },
  },
  {
    name: "Dumbbell Reverse Fly debout",
    category: "dumbbell",
    laterality: "bilateral",
    muscles: {
      primary: ["Deltoïde postérieur", "Rhomboïdes"],
      secondary: ["Trapèze médial", "Infraépineux", "Petit rond"],
      tertiary: ["Grand dorsal", "Trapèze inférieur", "Érecteurs du rachis"],
    },
  },
  {
    name: "Dumbbell Calf Raise",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: ["Gastrocnémien médial", "Gastrocnémien latéral"],
      secondary: ["Soléaire"],
      tertiary: [
        "Tibial postérieur",
        "Péronier long",
        "Fléchisseurs des orteils",
      ],
    },
  },
  {
    name: "Dumbbell Wrist Curl",
    category: "dumbbell",
    laterality: "both",
    muscles: {
      primary: [
        "Fléchisseurs du carpe (cubital, radial)",
        "Fléchisseurs des doigts",
      ],
      secondary: ["Palmaire long"],
      tertiary: ["Brachioradialis", "Pronateur rond"],
    },
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  machine: "Machine",
  bodyweight: "Poids du corps",
  barbell: "Barre / Charge libre",
  dumbbell: "Haltères",
};

export const LATERALITY_LABELS: Record<Laterality, string> = {
  bilateral: "Bilatéral",
  unilateral: "Unilatéral",
  both: "Les deux",
};

export const MUSCLE_KEYWORDS = [
  "Grand pectoral",
  "Grand dorsal",
  "Quadriceps",
  "Grand fessier",
  "Moyen fessier",
  "Deltoïde antérieur",
  "Deltoïde médial",
  "Deltoïde postérieur",
  "Biceps brachial",
  "Biceps fémoral",
  "Triceps brachial",
  "Ischio-jambiers",
  "Gastrocnémiens",
  "Soléaire",
  "Obliques",
  "Droit de l'abdomen",
  "Rhomboïdes",
  "Trapèze",
  "Érecteurs du rachis",
  "Adducteurs",
  "Infraépineux",
  "Brachial",
  "Grand rond",
  "Transverse de l'abdomen",
  "Avant-bras",
  "Iliopsoas",
].sort();
