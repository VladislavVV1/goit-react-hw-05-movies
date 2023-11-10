import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import Home from "pages/Home/Home";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Movies from "pages/Movies/Movies";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        <Route path="*" element={<div>error</div>} />
      </Route>
    </Routes>
  );
};