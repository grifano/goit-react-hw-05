import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchMoviesByTrend } from "../../service/movies-api.js";
import css from "./HomePage.module.css";
import Container from "../../components/Container/Container.jsx";
import SectionWrap from "../../components/SectionWrap/SectionWrap.jsx";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader.jsx";
import CustomErrorMessage from "../../components/CustomErrorMessage/CustomErrorMessage.jsx";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    async function getMovies() {
      try {
        const data = await fetchMoviesByTrend();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    }

    getMovies();
  }, []);

  return (
    <section>
      <Container>
        <SectionWrap>
          <h1 className={css.mainTitle}>Trending today</h1>
          {error && (
            <CustomErrorMessage message="Oops! Something went wrong 🤷‍♂️, let's trying to reload the page 😉" />
          )}
          {loader && <Loader />}
          {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
          <Toaster />
        </SectionWrap>
      </Container>
    </section>
  );
}
