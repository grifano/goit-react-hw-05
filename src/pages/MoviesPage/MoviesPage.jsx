import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchMoviesByQuery } from "../../service/movies-api.js";
import Loader from "../../components/Loader/Loader.jsx";
import CustomErrorMessage from "../../components/CustomErrorMessage/CustomErrorMessage.jsx";
import Container from "../../components/Container/Container.jsx";
import SectionWrap from "../../components/SectionWrap/SectionWrap.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const savedSearchQuery = searchParams.get("searchParams") ?? "";
  const [newQuery, setNewQuery] = useState(savedSearchQuery);

  const location = useLocation();

  const handleSearch = (value) => {
    searchParams.set("searchParams", value);
    setSearchParams(searchParams);
    setNewQuery(value);
  };

  useEffect(() => {
    setLoader(true);
    async function getMovies() {
      try {
        const data = await fetchMoviesByQuery(newQuery);
        setMovies(data.results);
      } catch (error) {
        setError(true);
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    }

    getMovies();
  }, [newQuery]);

  return (
    <section>
      <Container>
        <SectionWrap>
          <SearchBar onSearch={handleSearch} />
          {error && (
            <CustomErrorMessage message="Oops! Something went wrong 🤷‍♂️, let's trying to reload the page 😉" />
          )}
          {loader && <Loader />}
          {movies.length > 0 && (
            <MoviesList movies={movies} location={location} />
          )}
          <Toaster />
        </SectionWrap>
      </Container>
    </section>
  );
}
