// components/HumanBodySvg.tsx
"use client";

import React from "react";
import type { MuscleId } from "../types/muscles";

type Props = {
  onMuscleClick: (muscleId: MuscleId) => void;
};

export const HumanBodySvg: React.FC<Props> = ({ onMuscleClick }) => {
  return (
    <svg
      viewBox="0 0 260 520"
      className="w-full max-w-sm mx-auto select-none"
      aria-labelledby="human-body-title"
      role="img"
    >
      <title id="human-body-title">Modèle anatomique interactif</title>
      <defs>
        {/* Silhouette gradient */}
        <linearGradient id="bodyGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Muscles gradient */}
        <linearGradient id="muscleGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>

        <style>
          {`
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
            .body-outline {
              fill: url(#bodyGradient);
              stroke: #1f2937;
              stroke-width: 2;
            }
          `}
        </style>
      </defs>

      {/* Silhouette globale (face avant simplifiée) */}
      <g id="body">
        {/* Tête */}
        <ellipse
          cx="130"
          cy="60"
          rx="30"
          ry="35"
          className="body-outline"
        />
        {/* Cou + tronc */}
        <path
          className="body-outline"
          d="
            M 110 95
            Q 130 105 150 95
            L 165 150
            Q 175 210 170 260
            Q 165 320 155 380
            Q 150 420 145 460
            Q 140 500 130 510
            Q 120 500 115 460
            Q 110 420 105 380
            Q 95 320 90 260
            Q 85 210 95 150
            Z
          "
        />
        {/* Bras gauche */}
        <path
          className="body-outline"
          d="
            M 95 150
            Q 70 190 65 230
            Q 60 270 65 310
            Q 70 350 80 380
            Q 85 400 90 410
            Q 95 420 100 425
            Q 105 430 110 430
            Q 105 410 102 390
            Q 95 350 93 320
            Q 90 290 92 260
            Q 94 230 100 200
            Z
          "
        />
        {/* Bras droit */}
        <path
          className="body-outline"
          d="
            M 165 150
            Q 190 190 195 230
            Q 200 270 195 310
            Q 190 350 180 380
            Q 175 400 170 410
            Q 165 420 160 425
            Q 155 430 150 430
            Q 155 410 158 390
            Q 165 350 167 320
            Q 170 290 168 260
            Q 166 230 160 200
            Z
          "
        />
        {/* Jambes */}
        <path
          className="body-outline"
          d="
            M 105 380
            Q 110 420 112 450
            Q 115 480 118 500
            Q 120 515 130 520
            Q 140 515 142 500
            Q 145 480 148 450
            Q 150 420 155 380
            Z
          "
        />
      </g>

      {/* ─── MUSCLES CLIQUABLES ───────────────────────────── */}

      {/* Grand pectoral */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("grand_pectoral_claviculaire")}
      >
        <path
          d="
            M 105 110
            Q 130 115 155 110
            Q 160 125 158 140
            Q 145 150 130 152
            Q 115 150 102 140
            Q 100 125 105 110
          "
        />
      </g>

      {/* Grand dorsal (zone latérale + bas du dos) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("grand_dorsal")}
      >
        <path
          d="
            M 100 150
            Q 80 190 78 220
            Q 76 250 82 280
            Q 90 310 100 330
            Q 115 340 130 342
            Q 145 340 160 330
            Q 170 310 178 280
            Q 184 250 182 220
            Q 180 190 160 150
            Q 145 160 130 162
            Q 115 160 100 150
          "
        />
      </g>

      {/* Abdominaux (droit de l'abdomen) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("droit_abdomen_superieur")}
      >
        <path
          d="
            M 112 170
            Q 120 175 130 176
            Q 140 175 148 170
            Q 150 190 150 210
            Q 150 230 148 250
            Q 140 255 130 258
            Q 120 255 112 250
            Q 110 230 110 210
            Q 110 190 112 170
          "
        />
      </g>

      {/* Biceps gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("biceps_brachial")}
      >
        <path
          d="
            M 80 190
            Q 72 210 70 230
            Q 68 250 72 270
            Q 78 260 82 250
            Q 86 240 88 230
            Q 90 220 90 210
            Q 88 200 80 190
          "
        />
      </g>

      {/* Biceps droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("biceps_brachial")}
      >
        <path
          d="
            M 180 190
            Q 188 210 190 230
            Q 192 250 188 270
            Q 182 260 178 250
            Q 174 240 172 230
            Q 170 220 170 210
            Q 172 200 180 190
          "
        />
      </g>

      {/* Quadriceps gauche */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps")}
      >
        <path
          d="
            M 112 300
            Q 108 320 108 340
            Q 108 360 110 380
            Q 115 390 120 395
            Q 122 370 122 345
            Q 122 320 120 300
            Z
          "
        />
      </g>

      {/* Quadriceps droit */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("quadriceps")}
      >
        <path
          d="
            M 148 300
            Q 152 320 152 340
            Q 152 360 150 380
            Q 145 390 140 395
            Q 138 370 138 345
            Q 138 320 140 300
            Z
          "
        />
      </g>

      {/* Grand fessier (vue front simplifiée, zone hanche/cuisses hautes) */}
      <g
        className="muscle-area"
        onClick={() => onMuscleClick("grand_fessier")}
      >
        <path
          d="
            M 112 260
            Q 120 270 130 272
            Q 140 270 148 260
            Q 152 275 152 285
            Q 140 295 130 298
            Q 120 295 108 285
            Q 108 275 112 260
          "
        />
      </g>
    </svg>
  );
};

