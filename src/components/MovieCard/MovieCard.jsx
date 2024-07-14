import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";
import Poster from "../Poster/Poster";

export default function MovieCard({ movieDetail }) {
  const location = useLocation();
  const { id } = movieDetail;

  return (
    <Link className={css.movieCard} to={`/movies/:${id}`} state={location}>
      <Poster movieDetail={movieDetail} />
    </Link>
  );
}
