import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

const MainLayout = lazy(() => import("../../components/MainLayout/MainLayout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={"/movies"} element={<MoviesPage />} />
          <Route path={"/movies/:movieId"} element={<MovieDetailsPage />}>
            <Route path={"cast"} element={<MovieCast />} />
            <Route path={"reviews"} element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
