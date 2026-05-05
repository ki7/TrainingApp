// components/HumanBodyFrontSvg.tsx
"use client";

import React from "react";
import type { MuscleId } from "@/types/muscles";

type Props = {
  onMuscleClick: (muscleId: MuscleId) => void;
};

export const HumanBodyFrontSvg: React.FC<Props> = ({ onMuscleClick }) => {
  return (
    <svg
      viewBox="0 0 260 520"
      className="w-full max-w-sm mx-auto select-none"
      aria-labelledby="human-body-front-title"
      role="img"
    >
      <title id="human-body-front-title">
        Modèle anatomique antérieur interactif
      </title>

      <defs>
        <linearGradient id="bodyGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="muscleGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>

        <style>
          {`
            .body-outline {
              fill: url(#bodyGradient);
              stroke: #1f2937;
              stroke-width: 2;
            }
            .muscle-area {
              fill: url(#muscleGradient);
              opacity: 0.85;
              transition: opacity 120ms ease-out, transform 120ms ease-out;
              cursor: pointer;
            }
            .muscle-area:hover {
              opacity: 1;
              transform: scale(1.02);
            }
          `}
        </style>
      </defs>

      {/* ─── SILHOUETTE GLOBALE ───────────────────────────── */}

      {/* Tête */}
      <ellipse cx="130" cy="60" rx="30" ry="35" className="body-outline" />

      {/* Cou + tronc */}
      <path
        className="body-outline"
        d="
          M 115 90
          Q 130 100 145 90
          L 160 140
          Q 170 190 172 230
          Q 175 270 170 310
          Q 165 350 158 390
          Q 152 430 148 460
          Q 142 495 130 510
          Q 118 495 112 460
          Q 108 430 102 390
          Q 95 350 90 310
          Q 85 270 88 230
          Q 90 190 100 140
          Z
        "
      />

      {/* Bras gauche */}
      <path
        className="body-outline"
        d="
          M 100 140
          Q 80 170 72 205
          Q 65 240 65 275
          Q 65 310 70 340
          Q 75 370 82 395
          Q 88 415 95 430
          Q 100 440 108 445
          Q 110 430 110 415
          Q 108 390 105 365
          Q 100 330 98 305
          Q 95 280 95 255
          Q 95 230 98 205
          Q 100 180 105 160
          Z
        "
      />

      {/* Bras droit */}
      <path
        className="body-outline"
        d="
          M 160 140
          Q 180 170 188 205
          Q 195 240 195 275
          Q 195 310 190 340
          Q 185 370 178 395
          Q 172 415 165 430
          Q 160 440 152 445
          Q 150 430 150 415
          Q 152 390 155 365
          Q 160 330 162 305
          Q 165 280 165 255
          Q 165 230 162 205
          Q 160 180 155 160
          Z
        "
      />

      {/* Jambes */}
      <path
        className="body-outline"
        d="
          M 102 390
          Q 108 420 110 445
          Q 112 470 115 490
          Q 118 510 130 520
          Q 142 510 145 490
          Q 148 470 150 445
          Q 152 420 158 390
          Z
        "
      />

      {/* ─── MUSCLES DE FACE ──────────────────────────────── */}

      {/* Sterno-cléido-mastoïdien gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("sternocleidomastoid")}
      >
        <path
          d="
            M 120 75
            Q 112 80 110 90
            Q 112 95 115 100
            Q 120 95 123 90
            Q 125 85 125 80
            Q 123 78 120 75
          "
        />
      </g>

      {/* Sterno-cléido-mastoïdien droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("sternocleidomastoid")}
      >
        <path
          d="
            M 140 75
            Q 148 80 150 90
            Q 148 95 145 100
            Q 140 95 137 90
            Q 135 85 135 80
            Q 137 78 140 75
          "
        />
      </g>

      {/* Trapèze supérieur (vue antérieure, base du cou) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("trapeze_superieur_ant")}
      >
        <path
          d="
            M 115 90
            Q 130 95 145 90
            Q 142 100 138 108
            Q 130 112 122 108
            Q 118 100 115 90
          "
        />
      </g>

      {/* Deltoïde antérieur gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("deltoide_anterieur")}
      >
        <path
          d="
            M 105 110
            Q 95 120 92 135
            Q 98 138 104 140
            Q 110 135 112 128
            Q 112 120 110 115
            Q 108 112 105 110
          "
        />
      </g>

      {/* Deltoïde antérieur droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("deltoide_anterieur")}
      >
        <path
          d="
            M 155 110
            Q 165 120 168 135
            Q 162 138 156 140
            Q 150 135 148 128
            Q 148 120 150 115
            Q 152 112 155 110
          "
        />
      </g>

      {/* Deltoïde médial gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("deltoide_median")}
      >
        <path
          d="
            M 92 135
            Q 85 150 82 165
            Q 88 168 94 170
            Q 100 165 104 158
            Q 104 148 102 140
            Q 98 138 92 135
          "
        />
      </g>

      {/* Deltoïde médial droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("deltoide_median")}
      >
        <path
          d="
            M 168 135
            Q 175 150 178 165
            Q 172 168 166 170
            Q 160 165 156 158
            Q 156 148 158 140
            Q 162 138 168 135
          "
        />
      </g>

      {/* Grand pectoral (faisceau claviculaire) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("grand_pectoral_claviculaire")}
      >
        <path
          d="
            M 110 100
            Q 130 105 150 100
            Q 152 110 152 118
            Q 140 122 130 124
            Q 120 122 108 118
            Q 108 110 110 100
          "
        />
      </g>

      {/* Grand pectoral (faisceau sternal) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("grand_pectoral_sternal")}
      >
        <path
          d="
            M 108 118
            Q 120 122 130 124
            Q 140 122 152 118
            Q 154 132 154 145
            Q 142 152 130 155
            Q 118 152 106 145
            Q 106 132 108 118
          "
        />
      </g>

      {/* Biceps brachial gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("biceps_brachial")}
      >
        <path
          d="
            M 88 165
            Q 80 180 78 195
            Q 80 205 84 215
            Q 90 210 94 202
            Q 96 192 96 182
            Q 94 172 88 165
          "
        />
      </g>

      {/* Biceps brachial droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("biceps_brachial")}
      >
        <path
          d="
            M 172 165
            Q 180 180 182 195
            Q 180 205 176 215
            Q 170 210 166 202
            Q 164 192 164 182
            Q 166 172 172 165
          "
        />
      </g>

      {/* Brachial gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("brachial")}
      >
        <path
          d="
            M 84 215
            Q 80 225 78 235
            Q 80 242 84 248
            Q 88 242 90 235
            Q 90 225 88 218
            Q 86 216 84 215
          "
        />
      </g>

      {/* Brachial droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("brachial")}
      >
        <path
          d="
            M 176 215
            Q 180 225 182 235
            Q 180 242 176 248
            Q 172 242 170 235
            Q 170 225 172 218
            Q 174 216 176 215
          "
        />
      </g>

      {/* Avant-bras fléchisseurs gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("flexeurs_avant_bras")}
      >
        <path
          d="
            M 78 235
            Q 72 250 70 265
            Q 72 275 76 285
            Q 82 280 86 272
            Q 88 262 88 252
            Q 84 242 78 235
          "
        />
      </g>

      {/* Avant-bras fléchisseurs droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("flexeurs_avant_bras")}
      >
        <path
          d="
            M 182 235
            Q 188 250 190 265
            Q 188 275 184 285
            Q 178 280 174 272
            Q 172 262 172 252
            Q 176 242 182 235
          "
        />
      </g>

      {/* Avant-bras extenseurs gauche (zone latérale) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("extenseurs_avant_bras")}
      >
        <path
          d="
            M 70 265
            Q 68 275 68 285
            Q 70 295 74 305
            Q 78 300 80 292
            Q 80 282 78 275
            Q 76 270 70 265
          "
        />
      </g>

      {/* Avant-bras extenseurs droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("extenseurs_avant_bras")}
      >
        <path
          d="
            M 190 265
            Q 192 275 192 285
            Q 190 295 186 305
            Q 182 300 180 292
            Q 180 282 182 275
            Q 184 270 190 265
          "
        />
      </g>

      {/* Droit de l'abdomen (supérieur) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("droit_abdomen_superieur")}
      >
        <path
          d="
            M 112 155
            Q 120 160 130 162
            Q 140 160 148 155
            Q 150 170 150 182
            Q 140 188 130 190
            Q 120 188 110 182
            Q 110 170 112 155
          "
        />
      </g>

      {/* Droit de l'abdomen (inférieur) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("droit_abdomen_inferieur")}
      >
        <path
          d="
            M 110 182
            Q 120 188 130 190
            Q 140 188 150 182
            Q 150 200 150 215
            Q 140 220 130 222
            Q 120 220 110 215
            Q 110 200 110 182
          "
        />
      </g>

      {/* Obliques externes gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("obliques_externes")}
      >
        <path
          d="
            M 100 160
            Q 92 170 88 185
            Q 86 200 88 215
            Q 96 210 102 205
            Q 104 195 104 185
            Q 104 175 100 160
          "
        />
      </g>

      {/* Obliques externes droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("obliques_externes")}
      >
        <path
          d="
            M 160 160
            Q 168 170 172 185
            Q 174 200 172 215
            Q 164 210 158 205
            Q 156 195 156 185
            Q 156 175 160 160
          "
        />
      </g>

      {/* Obliques internes (zone latéro-inférieure) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("obliques_internes_zone")}
      >
        <path
          d="
            M 100 205
            Q 92 215 90 230
            Q 92 240 96 248
            Q 102 244 106 238
            Q 108 228 108 220
            Q 106 212 100 205
          "
        />
      </g>

      {/* Obliques internes droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("obliques_internes_zone")}
      >
        <path
          d="
            M 160 205
            Q 168 215 170 230
            Q 168 240 164 248
            Q 158 244 154 238
            Q 152 228 152 220
            Q 154 212 160 205
          "
        />
      </g>

      {/* Iliopsoas (zone hanche) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("iliopsoas_zone")}
      >
        <path
          d="
            M 112 222
            Q 120 226 130 228
            Q 140 226 148 222
            Q 150 232 150 240
            Q 140 245 130 247
            Q 120 245 110 240
            Q 110 232 112 222
          "
        />
      </g>

      {/* Adducteurs (zone interne cuisse) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("adducteurs")}
      >
        <path
          d="
            M 112 247
            Q 118 252 130 255
            Q 142 252 148 247
            Q 150 260 150 270
            Q 140 278 130 280
            Q 120 278 110 270
            Q 110 260 112 247
          "
        />
      </g>

      {/* Sartorius (trajet oblique simplifié) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("sartorius")}
      >
        <path
          d="
            M 112 247
            Q 108 260 106 272
            Q 104 284 104 295
            Q 108 298 112 300
            Q 116 290 120 280
            Q 124 270 128 262
            Q 124 258 118 253
            Q 115 250 112 247
          "
        />
      </g>

      {/* Quadriceps : droit fémoral gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps_droit_femoral")}
      >
        <path
          d="
            M 118 255
            Q 116 270 116 290
            Q 116 310 118 330
            Q 122 338 126 344
            Q 128 330 128 310
            Q 128 290 126 270
            Q 124 262 118 255
          "
        />
      </g>

      {/* Quadriceps : droit fémoral droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps_droit_femoral")}
      >
        <path
          d="
            M 142 255
            Q 144 270 144 290
            Q 144 310 142 330
            Q 138 338 134 344
            Q 132 330 132 310
            Q 132 290 134 270
            Q 136 262 142 255
          "
        />
      </g>

      {/* Quadriceps : vaste médial gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps_vaste_medial")}
      >
        <path
          d="
            M 116 290
            Q 110 305 108 320
            Q 110 332 114 342
            Q 118 338 120 332
            Q 122 320 122 310
            Q 120 300 116 290
          "
        />
      </g>

      {/* Quadriceps : vaste latéral droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps_vaste_lateral")}
      >
        <path
          d="
            M 144 290
            Q 150 305 152 320
            Q 150 332 146 342
            Q 142 338 140 332
            Q 138 320 138 310
            Q 140 300 144 290
          "
        />
      </g>

      {/* Tibial antérieur gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("tibial_anterieur")}
      >
        <path
          d="
            M 118 344
            Q 116 360 116 380
            Q 118 395 120 410
            Q 124 408 126 402
            Q 126 388 126 374
            Q 124 360 122 350
            Q 120 346 118 344
          "
        />
      </g>

      {/* Tibial antérieur droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("tibial_anterieur")}
      >
        <path
          d="
            M 142 344
            Q 144 360 144 380
            Q 142 395 140 410
            Q 136 408 134 402
            Q 134 388 134 374
            Q 136 360 138 350
            Q 140 346 142 344
          "
        />
      </g>

      {/* Gastrocnémien médial (vue antérieure) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("gastroc_medial_ant")}
      >
        <path
          d="
            M 120 410
            Q 118 422 118 435
            Q 120 448 122 460
            Q 124 468 128 474
            Q 130 466 130 456
            Q 130 444 128 432
            Q 126 420 120 410
          "
        />
      </g>

      {/* Gastrocnémien latéral (vue antérieure) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("gastroc_lateral_ant")}
      >
        <path
          d="
            M 140 410
            Q 142 422 142 435
            Q 140 448 138 460
            Q 136 468 132 474
            Q 130 466 130 456
            Q 130 444 132 432
            Q 134 420 140 410
          "
        />
      </g>
    </svg>
  );
};
