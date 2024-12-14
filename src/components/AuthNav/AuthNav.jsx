import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.navLink} to="/register"></NavLink>
      <NavLink className={styles.navLink} to="/login"></NavLink>
    </div>
  );
}
