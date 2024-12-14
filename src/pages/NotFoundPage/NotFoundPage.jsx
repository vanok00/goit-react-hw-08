import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Looks like this page is unavailable...</h1>
      <Link to="/" className={styles.backBtn}>
        Go home
      </Link>
    </div>
  );
}
