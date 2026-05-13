import { date } from "drizzle-orm/mysql-core";
import { EXERCISES } from "./exerciseData";

export interface Sets {
  // name: string;
  // category: Category;
  // laterality: Laterality;
  // muscles: MuscleGroups;
}

const exercises = EXERCISES.reduce(
  (acc, exercise) => {
    acc[exercise.name.replace(/\s+/g, "_")] = exercise.name;
    return acc;
  },
  {} as Record<string, Sets>,
);

const muscles = new Set();
EXERCISES.reduce((muscles, exercises) => {
  Object.keys(exercises.muscles).forEach((key) => {
    muscles.add([...(exercises.muscles[key as keyof typeof exercises.muscles] as string[])]);
  });

  return muscles;
}, muscles);

export const SETS: Sets[] = [
  {
    ["2026-03-25T10:00:00"]: [
      {
        exercise: exercises.IsoLateralFrontLatPulldown,
        sets: [
          { reps: 10, weight: 60 },
          { reps: 11, weight: 60 },
          { reps: 9, weight: 60 },
        ],
      },
      {
        exercise: exercises.HammerStrengthPullover,
        sets: [
          { reps: 10, weight: 10 },
          { reps: 12, weight: 20 },
          { reps: 11, weight: 30 },
        ],
      },
    ],
  },
];

/* 
HAMMER STRENGTH ISO-LATERAL FRONT LAT PULLDOWN
10 * 60 kg
11 * 60 kg
9 * 60 kg

HAMMER STRENGTH PULLOVER
(10/Start 18lb./8.2Kg.)
12 * 10kg
14 * 20kg
11 * 30kg

LAT PULLDOWN
15 * 35 kg
9 * 42,5 kg prise la plus large
10 * 42,5 kg

SHOULDER PRESS (pronation)
10 * 40 kg
7 * 40 kg

TRIAGE HORIZONTALE DOUBLE POULIE
10 * 20 kg
15 * 35 kg jambe plus tendue sur pose écartée 


Traction assisté (Supination)
10 Assist 50kg
10 Assist 50kg

Chest Fly (écarté couché)
7 * 50 kg 40s
15 * 35 kg 40s
12 * 42,5 kg 40s
10 * 50 kg 40s

Chest Press (bute développé)
15 * 40kg 
11 * 50kg 
8 * 50kg 

# Jeudi 26 03
ISO latéral row 5,4
pronation supination *2 hautes et basses + 1 neutre
_12.24 manque 1ere série sur app exercice_

20* 50 neutre
12 * 60 pronation prise du bas
12 * 60 pronation prise du haut
12 * 60 pronation prise du haut
12 * 60 pronation prise du bas die douleur début avant bras ressemble à un début de déchirure

ISO latéral shoulder press 4,5k
_chaise a 6_

12 * 40 
_douleur redescendre coude gauche_
9 * 40
7*40
10  @ 30
6 x 30


*Abdominal oblique crunch*


10 x 15
10 x 15

Hack squat 57k
15 x 0
12x 0
14 x 0
14 x 0

ISO last leg extension 1,8
10 x 20
10 x 20 
_tremble fort sur la re descente_


_ MIDI 30 salle chargé jusqu’à une heure_


# 27 03 2026

Fly chest
27 x 20 kg
25 x 50 kg
12 x 52,5kg
9 x 55 kg
9 x 52,5kg

SHOULDER PRESS (pronation)
12 * 17.5 ? Ou 35
10 * 17.5 ? Ou 35

TRIAGE HORIZONTALE DOUBLE POULIE monoprise

Mon première série à récupération sur lappli
15 * 13.75 jambe plus tendue sur pose écartée 
15 x 17,5 kg
15 x 17,5 kg
20 x 17,5 kg

Biceps seated 1.8kg

6 x 20kg
14 x 10kg
12x 10 kg

Rameur 5 minutes force 


## 30 03 voltaire

Papillon épaule extérieur
17 x 25
12 x 30
11 x 30
14 x 25

Poulie tirage mono prise
15 X 30
15 x 35
15 x 40
15 x 40


15 x 30
15 x 35
14 x 40
12 x 40

Abdo crunch 
16 x 25
15 x 30
15 x 35
15 x 40


15 x 61
20 x 77
17 x 85
17 x 93
17 x 101
14h22

Biceps curl

15x20
12 x 25
9 x 25

Lombaire

15
10
10
12

# 01 04
Hack squat 
12 x 57
12
14
16

ISO lateral kneeling leg curve deux côté a chaque fois
12 x 15
12 x 20
12 x 25
12 x 25
On dirait les muscles du mollet du bas de la cuisse et vont se rompre ça part en crampe t vite

Back extension
10x 20
7 x 20 + 5 x 0
12 x 0
12 x 0

Chest press
18 x 20 ou 40 ?
13 x 27.5
13 x 27.5
13 x 27.5

Lever de jambe sur demi lune

10 jambes droites
10 genou plié 
9 genou plié 
 */
