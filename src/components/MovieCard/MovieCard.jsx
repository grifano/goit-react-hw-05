import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";
import Poster from "../Poster/Poster";

export default function MovieCard({ movieDetail, location }) {
  const { id } = movieDetail;

  return (
    <Link className={css.movieCard} to={`/movies/:${id}`} state={location}>
      <Poster movieDetail={movieDetail} />
    </Link>
  );
}
