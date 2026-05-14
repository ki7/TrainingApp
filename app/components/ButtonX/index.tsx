"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import styles from "./ButtonX.module.css";
import { Elastic, SlowMo } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type VariantProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
  txt?: string;
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps {}

export const ButtonX: React.FC<ButtonProps> = ({
  primary,
  secondary,
  danger,
  success,
  className,
  txt,
  children,
  ...props
}) => {
  const variantClass =
    (primary && styles.primary) ||
    (secondary && styles.secondary) ||
    (danger && styles.danger) ||
    (success && styles.success) ||
    styles.primary; // fallback

  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<SVGFEGaussianBlurElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current!;
      const container = containerRef.current!;
      const cls = {
        topLeft: `.${styles["top-left"]}`,
        bottomRight: `.${styles["bottom-right"]}`,
        buttonBg: `.${styles["button__bg"]}`,
      };
      const circlesTopLeft = root.querySelectorAll(cls.topLeft);
      const circlesBottomRight = root.querySelectorAll(cls.bottomRight);
      const filter = filterRef.current!;

      // console.log(root, styles["top-left"], circlesTopLeft);
      console.log(cls.topLeft, cls.bottomRight);

      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

      const btTl = gsap.timeline({
        paused: true,
        onUpdate: () => filter.setAttribute("x", "0"),
        onComplete: () => (container.style.filter = "none"),
      });

      // --- TOP LEFT ---
      tl.to(circlesTopLeft, {
        duration: 1.2,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });
      tl.to(circlesTopLeft[0], {
        duration: 0.1,
        scale: 0.2,
        x: "+=6",
        y: "-=2",
      });
      tl.to(
        circlesTopLeft[1],
        { duration: 0.1, scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" },
        "-=0.1",
      );
      tl.to(
        circlesTopLeft[2],
        { duration: 0.1, scale: 0.2, x: "-=15", y: "+=6" },
        "-=0.1",
      );
      tl.to(circlesTopLeft[0], {
        duration: 1,
        scale: 0,
        x: "-=5",
        y: "-=15",
        opacity: 0,
      });
      tl.to(
        circlesTopLeft[1],
        {
          duration: 1,
          scale: 0.4,
          x: "-=10",
          y: "-=10",
          opacity: 0,
        },
        "-=1",
      );
      tl.to(
        circlesTopLeft[2],
        {
          duration: 1,
          scale: 0,
          x: "-=15",
          y: "+=5",
          opacity: 0,
        },
        "-=1",
      );

      const tlBt1 = gsap.timeline();
      tlBt1.set(circlesTopLeft, { x: 0, y: 0, rotation: -45 });
      tlBt1.add(tl);

      tl2.to(circlesBottomRight, 1.2, {
        x: 25,
        y: 25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });
      tl2.to(circlesBottomRight[0], 0.1, { scale: 0.2, x: "-=6", y: "+=3" });
      tl2.to(
        circlesBottomRight[1],
        0.1,
        { scale: 0.8, x: "+=7", y: "+=3" },
        "-=0.1",
      );
      tl2.to(
        circlesBottomRight[2],
        0.1,
        { scale: 0.2, x: "+=15", y: "-=6" },
        "-=0.1",
      );
      tl2.to(circlesBottomRight[0], 1, {
        scale: 0,
        x: "+=5",
        y: "+=15",
        opacity: 0,
      });
      tl2.to(
        circlesBottomRight[1],
        1,
        { scale: 0.4, x: "+=7", y: "+=7", opacity: 0 },
        "-=1",
      );
      tl2.to(
        circlesBottomRight[2],
        1,
        { scale: 0, x: "+=15", y: "-=5", opacity: 0 },
        "-=1",
      );

      const tlBt2 = gsap.timeline();
      tlBt2.set(circlesBottomRight, { x: 0, y: 0, rotation: -45 });
      tlBt2.add(tl2);

      // --- MASTER TIMELINE ---
      btTl.add(tlBt1);
      btTl.to(
        root.querySelectorAll(cls.buttonBg),
        { duration: 0.8, scaleY: 1.1 },
        0.1,
      );
      btTl.add(tlBt2, 0.2);
      btTl.to(
        root.querySelectorAll(cls.buttonBg),
        {
          duration: 1.8,
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4),
        },
        1.2,
      );

      btTl.timeScale(2.6);
      root.addEventListener("click", () => {
        container.style.filter = "url(#filter-goo-1)";
        btTl.restart();
      });
    },
    { scope: rootRef },
  );
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={styles["svg-filters"]}
      >
        <defs>
          <filter id="filter-goo-1">
            <feGaussianBlur
              ref={filterRef}
              in="SourceGraphic"
              stdDeviation="7"
              result="blur"
              x="0"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            ></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo"></feComposite>
          </filter>
        </defs>
      </svg>
      <button
        ref={rootRef}
        className={clsx(styles.gooffyFx, styles.base, variantClass, className)}
        {...props}
      >
        {txt || children}
        <span ref={containerRef} className={styles.button__container}>
          <span className={clsx(styles.circle, styles["top-left"])} />
          <span className={clsx(styles.circle, styles["top-left"])} />
          <span className={clsx(styles.circle, styles["top-left"])} />
          <span className={clsx(styles.button__bg, styles.base)} />
          <span className={clsx(styles.circle, styles["bottom-right"])} />
          <span className={clsx(styles.circle, styles["bottom-right"])} />
          <span className={clsx(styles.circle, styles["bottom-right"])} />
        </span>
      </button>
    </>
  );
};
