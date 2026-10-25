import React from "react";
import { NavLink } from "react-router";
import styles from "./Nav.module.css";
import { memo } from "react";
const navRoutes = [
  { id: crypto.randomUUID(), path: "", title: "Home" },
  { id: crypto.randomUUID(), path: "clock", title: "Clock" },
  { id: crypto.randomUUID(), path: "form", title: "Form" },
  { id: crypto.randomUUID(), path: "friends", title: "Friends" },
  { id: crypto.randomUUID(), path: "counter", title: "Counter" },
];

export const Nav = memo(() => {
  return (
    <nav className={styles.nav}>
      {navRoutes.map(({ id, path, title }) => (
        <NavLink
          key={id}
          to={`/${path}`}
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          {" "}
          {title}
        </NavLink>
      ))}
    </nav>
  );
})
