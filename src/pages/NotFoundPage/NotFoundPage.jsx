import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import notFoundImage from "../../assets/404-img.svg";

export default function NotFoundPage() {
  return (
    <section className={css.notFoundPage}>
      <div className={css.notFoundPage__wrap}>
        <img src={notFoundImage} alt="ballons in the sky" />
        <Link to={"/"}>
          <button type="button">Back to home</button>
        </Link>
      </div>
    </section>
  );
}
