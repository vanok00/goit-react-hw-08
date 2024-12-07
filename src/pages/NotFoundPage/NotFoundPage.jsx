import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFound() {
  return (
    <div className={s.main}>
      <h1 className={s.heading}>Looks like this page is unavailable...</h1>
      <Link to="/" className={s.backBtn}>
        Go home
      </Link>
    </div>
  );
}
