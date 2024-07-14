import { TiArrowForward } from "react-icons/ti";
import css from "./Poster.module.css";
import { SlLike } from "react-icons/sl";

export default function Poster({
  movieDetail: { poster_path, title, overview, release_date, vote_average },
}) {
  const completeUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className={css.poster}>
      <img className={css.poster__img} src={completeUrl} alt={title} />
      <div className={css.poster__info}>
        <div className={css.poster__info_header}>
          <img
            className={css.poster__info_thumb}
            src={completeUrl}
            alt={title}
          />
          <div className={css.poster__info_headerCol}>
            <h2 className={css.poster__info_title}>{title}</h2>
            <p className={css.poster__info_release}>Release date:</p>
            <p className={css.poster__info_release}>{release_date}</p>
          </div>
        </div>
        <div>
          <p className={css.poster__info_desc}>{overview}</p>
        </div>
        <div className={css.poster__info_footer}>
          <p className={css.poster__rating}>
            <SlLike />
            {vote_average}
          </p>
          <p className={css.poster__info_link}>
            Read more <TiArrowForward />
          </p>
        </div>
      </div>
    </div>
  );
}
