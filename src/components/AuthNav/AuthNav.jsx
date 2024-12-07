import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.nav}>
      <NavLink className={s.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={s.navLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
