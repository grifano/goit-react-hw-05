import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.moviesList}>
      {movies.map((movie) => {
        return (
          <li className={css.moviesList__item} key={movie.id}>
            <MovieCard movieDetail={movie} />
          </li>
        );
      })}
    </ul>
  );
}
