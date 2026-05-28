import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { WatchlistContext }
from "../context/WatchlistContext";

import "./MovieCard.css";

function MovieCard({ movie }) {

  const {
    watchlist,
    saveMovie
  } = useContext(WatchlistContext);

  const isSaved = watchlist.find(
    (item) => item.id === movie.id
  );

  return (
    <div className="movie-card">

      <h2>{movie.title}</h2>

      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {movie.rating}
      </p>

      <p>
        <strong>Duration:</strong> {movie.duration}
      </p>

      <div className="card-buttons">

        <Link to={`/movies/${movie.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

        <button
          className="save-btn"
          disabled={isSaved}
          onClick={() => saveMovie(movie)}
        >
          {isSaved ? "Saved" : "Save"}
        </button>

      </div>

    </div>
  );
}

export default React.memo(MovieCard);