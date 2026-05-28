import { Link, useParams } from "react-router-dom";

import { useContext } from "react";

import moviesData from "../data/movies";

import { WatchlistContext } from "../context/WatchlistContext";

import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();

  const movie = moviesData.find((movie) => movie.id === Number(movieId));

  const { watchlist, saveMovie } = useContext(WatchlistContext);

  const isSaved = watchlist.find((item) => item.id === movie.id);

  if (!movie) {
    return (
      <div className="not-found">
        <h1>Movie Not Found</h1>

        <Link to="/movies">
          <button>Back to Movies</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <div className="movie-details-card">
        <h1>{movie.title}</h1>

        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {movie.rating}
        </p>

        <p>
          <strong>Duration:</strong> {movie.duration}
        </p>

        <p>
          <strong>Release Year:</strong> {movie.releaseYear}
        </p>

        <p className="description">{movie.description}</p>

        <div className="details-buttons">
          <button
            className="save-btn"
            disabled={isSaved}
            onClick={() => saveMovie(movie)}
          >
            {isSaved ? "Saved" : "❤️ Save Movie"}
          </button>

          <Link to="/movies">
            <button className="back-btn">← Back to Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
