import { Suspense, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { SlLike } from "react-icons/sl";
import css from "./MovieDetailsPage.module.css";
import { fetchMoviesById } from "../../service/movies-api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import CustomErrorMessage from "../../components/CustomErrorMessage/CustomErrorMessage";
import BackButton from "../../components/BackButton/BackButton";
import Container from "../../components/Container/Container";

export default function MovieDetailsPage() {
  const params = useParams();
  const movieId = params.movieId.substring(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackLink = useRef(location?.state ?? "/");

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.movieDetail__navLink, isActive && css.isCurrent);
  };

  useEffect(() => {
    setLoader(true);
    async function getMovie() {
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <section>
      <Container>
        {loader && <Loader />}
        {error && (
          <CustomErrorMessage message="Oops! Something went wrong 🤷‍♂️, let's trying to reload the page 😉" />
        )}
        {movie && (
          <div className={css.movieDetail}>
            <Link to={goBackLink.current}>
              <BackButton />
            </Link>
            <img
              className={css.movieDetail__posterBg}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
    `}
              alt={movie.title}
            />
            <div className={css.movieDetail__info}>
              <div className={css.movieDetail__info_header}>
                <img
                  className={css.movieDetail__info_poster}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
      `}
                  alt={movie.title}
                />
                <div className={css.movieDetail__info_header_col}>
                  <h1 className={css.movieDetail__info_title}>{movie.title}</h1>
                  <div className={css.info_release}>
                    <p>Release date:</p>
                    <p>{movie.release_date}</p>
                  </div>
                  <p className={css.movieDetail__info_desc}>{movie.overview}</p>
                  <p className={css.movieDetail__info_rating}>
                    <SlLike />
                    {movie.vote_average}
                  </p>
                </div>
              </div>

              <div className={css.movieDetail__info_extra}>
                <div className={css.movieDetail__info_links}>
                  <NavLink className={buildLinkClass} to="cast">
                    Cast
                  </NavLink>
                  <NavLink className={buildLinkClass} to="reviews">
                    Revews
                  </NavLink>
                </div>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </div>
        )}

        <Toaster />
      </Container>
    </section>
  );
}
