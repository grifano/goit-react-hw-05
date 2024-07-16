import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { fetchMoviesReviews } from "../../service/movies-api";
import toast from "react-hot-toast";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
// import fallbackImage from "../../assets/bg-popcorn.svg";

export default function MovieReviews() {
  const params = useParams();
  const movieId = params.movieId.substring(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function getMovie() {
      try {
        const data = await fetchMoviesReviews(movieId);
        setReviewsList(data.results);
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
    <div className={css.movieReviews}>
      {loader && <Loader />}
      {error && (
        <CustomErrorMessage message="Oops! Something went wrong 🤷‍♂️, let's trying to reload the page 😉" />
      )}
      {reviewsList.length > 0 ? (
        <ul>
          {reviewsList.map((review) => {
            return (
              <li key={review.id} className={css.movieReviews__item}>
                <p className={css.movieReviews__text}>{review.content}</p>
                <div className={css.movieReviews__detail}>
                  <p className={css.movieReviews__author}>
                    {`${new Date(review.created_at).getDate()}-${new Date(
                      review.created_at
                    )
                      .getMonth()
                      .toString()
                      .padStart(2, 0)}-${new Date(
                      review.created_at
                    ).getFullYear()}`}
                  </p>
                  <p className={css.movieReviews__author}>
                    Author: <span>{review.author}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        "There is no reviews for this movie"
      )}
      <Toaster />
    </div>
  );
}
