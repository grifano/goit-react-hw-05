import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { fetchMoviesCredits } from "../../service/movies-api";
import toast from "react-hot-toast";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import fallbackImage from "../../assets/bg-popcorn.svg";

export default function MovieCast() {
  const params = useParams();
  const movieId = params.movieId.substring(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function getMovie() {
      try {
        const data = await fetchMoviesCredits(movieId);
        setCastList(data.cast);
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
    <div className={css.movieCast}>
      {loader && <Loader />}
      {error && (
        <CustomErrorMessage message="Oops! Something went wrong 🤷‍♂️, let's trying to reload the page 😉" />
      )}
      {castList.length > 0 ? (
        <ul className={css.movieCast__list}>
          {castList.map((cast) => {
            return (
              <li key={cast.id} className={css.movieCast__item}>
                <img
                  className={css.movieCast__profile}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : fallbackImage
                  }
                  alt={cast.name}
                />
                <p className={css.movieCast__actorName}>{cast.name}</p>
                <p className={css.movieCast__actorCharacter}>
                  {`"${cast.character}"`}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about cast for this movie</p>
      )}
      <Toaster />
    </div>
  );
}
