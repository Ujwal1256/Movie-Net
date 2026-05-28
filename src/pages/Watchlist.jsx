import { useContext, useMemo } from "react";

import { WatchlistContext } from "../context/WatchlistContext";

import "./Watchlist.css";

function Watchlist() {
  const { watchlist, removeMovie } = useContext(WatchlistContext);

  const averageRating = useMemo(() => {
    if (watchlist.length === 0) return 0;

    const total = watchlist.reduce((sum, movie) => sum + movie.rating, 0);

    return (total / watchlist.length).toFixed(1);
  }, [watchlist]);

  return (
    <div className="watchlist-page">
      <h1>❤️ My Watchlist</h1>

      <p>Total Saved Movies: {watchlist.length}</p>

      <p>Average Rating: ⭐ {averageRating}</p>

      {watchlist.length === 0 ? (
        <h2>No saved movies yet</h2>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <div className="watchlist-card" key={movie.id}>
              <h2>{movie.title}</h2>

              <p>Genre: {movie.genre}</p>

              <p>Rating: ⭐ {movie.rating}</p>

              <button onClick={() => removeMovie(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
