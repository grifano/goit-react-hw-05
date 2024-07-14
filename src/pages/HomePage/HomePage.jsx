import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchMoviesByTrend } from "../../service/movies-api.js";
import css from "./HomePage.module.css";
import Container from "../../components/Container/Container.jsx";
import SectionWrap from "../../components/SectionWrap/SectionWrap.jsx";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMoviesByTrend();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getMovies();
  }, []);

  return (
    <section>
      <Container>
        <SectionWrap>
          <h1 className={css.mainTitle}>Trending today</h1>
          <MoviesList movies={trendingMovies} />
        </SectionWrap>
      </Container>
    </section>
  );
}
