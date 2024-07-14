import HomePage from "../../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MainLayout from "../MainLayout/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/movies/:movieId"} element={<MovieDetailsPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
