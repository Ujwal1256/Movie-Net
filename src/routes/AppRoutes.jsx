import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Watchlist from "../pages/Watchlist";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />} />

      <Route
        path="/movies/:movieId"
        element={<MovieDetails />}
      />

      <Route
        path="/watchlist"
        element={<Watchlist />}
      />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;