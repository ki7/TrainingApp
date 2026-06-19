"use client";

import clsx from "clsx";
import styles from "./Button.module.css";

type VariantProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
  txt?: string;
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps {}

export const Button: React.FC<ButtonProps> = ({
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

  return (
    <button className={clsx(styles.button, variantClass, className)} {...props}>
      {txt || children}
    </button>
  );
};
