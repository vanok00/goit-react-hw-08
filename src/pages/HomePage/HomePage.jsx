import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css";
const HomePage = () => {
  return (
    <div className={styles.menu}>
      <NavLink className={styles.navLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={styles.navLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default HomePage;
