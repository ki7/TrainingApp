"use client";

import Link from "next/link";
import styles from "@/ui/Nav/Nav.module.css";

type NavLink = {
  label: string;
  href: string;
};

interface NavProps {
  links?: NavLink[];
}

export const Nav: React.FC<NavProps> = ({ links }) => {
  const items: NavLink[] = links ?? [
    { label: "Todos", href: "todos" },
    { label: "Renfo Training page", href: "renfo-training" },
    { label: "Exercise page", href: "sets" },
    { label: "Exercise Reference", href: "exerciseRef" },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {items.map(({ href, label }) => (
          <li key={href} className={styles.item}>
            <Link href={`/dashboard/${href}`} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
