"use client";

import { useState, useMemo } from "react";
import styles from "./ExerciseDB.module.css";
import {
  EXERCISES,
  CATEGORY_LABELS,
  LATERALITY_LABELS,
  MUSCLE_KEYWORDS,
  type Category,
  type Laterality,
} from "./exerciseData";

import {SETS} from "./exerciseDataSets";

export default function ExerciseDB() {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<Category | "">("");
  const [filterLat, setFilterLat] = useState<Laterality | "">("");
  const [filterGroup, setFilterGroup] = useState("");
 console.log(SETS);
 
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return EXERCISES.filter((e) => {
      const allMuscles = [
        ...e.muscles.primary,
        ...e.muscles.secondary,
        ...e.muscles.tertiary,
      ]
        .join(" ")
        .toLowerCase();

      const matchQ =
        !q || e.name.toLowerCase().includes(q) || allMuscles.includes(q);
      const matchCat = !filterCat || e.category === filterCat;
      const matchLat = !filterLat || e.laterality === filterLat;
      const matchGroup =
        !filterGroup || allMuscles.includes(filterGroup.toLowerCase());

      return matchQ && matchCat && matchLat && matchGroup;
    });
  }, [search, filterCat, filterLat, filterGroup]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Rechercher exercice ou muscle…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.select}
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value as Category | "")}
        >
          <option value="">Toutes catégories</option>
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
            <option key={cat} value={cat}>
              {CATEGORY_LABELS[cat]}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={filterLat}
          onChange={(e) => setFilterLat(e.target.value as Laterality | "")}
        >
          <option value="">Toutes (latéralité)</option>
          {(Object.keys(LATERALITY_LABELS) as Laterality[]).map((lat) => (
            <option key={lat} value={lat}>
              {LATERALITY_LABELS[lat]}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={filterGroup}
          onChange={(e) => setFilterGroup(e.target.value)}
        >
          <option value="">Tous les groupes</option>
          {MUSCLE_KEYWORDS.map((kw) => (
            <option key={kw} value={kw}>
              {kw}
            </option>
          ))}
        </select>

        <span className={styles.count}>
          {filtered.length} exercice{filtered.length > 1 ? "s" : ""}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>Aucun exercice trouvé</p>
      ) : (
        <div className={styles.list}>
          {filtered.map((exercise) => (
            <div key={exercise.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.exerciseName}>{exercise.name}</span>
                <div className={styles.badges}>
                  <span
                    className={`${styles.badge} ${styles[`cat_${exercise.category}`]}`}
                  >
                    {CATEGORY_LABELS[exercise.category]}
                  </span>
                  <span
                    className={`${styles.badge} ${styles[`lat_${exercise.laterality}`]}`}
                  >
                    {LATERALITY_LABELS[exercise.laterality]}
                  </span>
                </div>
              </div>

              <div className={styles.muscleRows}>
                {exercise.muscles.primary.length > 0 && (
                  <div className={styles.muscleRow}>
                    <span
                      className={`${styles.tierLabel} ${styles.tierPrimary}`}
                    >
                      Primaire
                    </span>
                    <div className={styles.muscleList}>
                      {exercise.muscles.primary.map((m) => (
                        <span
                          key={m}
                          className={`${styles.tag} ${styles.tagPrimary}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {exercise.muscles.secondary.length > 0 && (
                  <div className={styles.muscleRow}>
                    <span
                      className={`${styles.tierLabel} ${styles.tierSecondary}`}
                    >
                      Secondaire
                    </span>
                    <div className={styles.muscleList}>
                      {exercise.muscles.secondary.map((m) => (
                        <span
                          key={m}
                          className={`${styles.tag} ${styles.tagSecondary}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {exercise.muscles.tertiary.length > 0 && (
                  <div className={styles.muscleRow}>
                    <span
                      className={`${styles.tierLabel} ${styles.tierTertiary}`}
                    >
                      Tertiaire
                    </span>
                    <div className={styles.muscleList}>
                      {exercise.muscles.tertiary.map((m) => (
                        <span
                          key={m}
                          className={`${styles.tag} ${styles.tagTertiary}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
