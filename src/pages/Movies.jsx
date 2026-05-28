import { useMemo, useRef, useState, useEffect } from "react";

import moviesData from "../data/movies";

import MovieCard from "../components/MovieCard";

import "./Movies.css";

function Movies() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [genre, setGenre] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const searchRef = useRef();

  const filteredMovies = useMemo(() => {
    let filtered = moviesData.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre = genre === "All" || movie.genre === genre;

      return matchesSearch && matchesGenre;
    });

    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "latest") {
      filtered.sort((a, b) => b.releaseYear - a.releaseYear);
    } else if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [search, genre, sortBy]);

  const focusSearch = () => {
    searchRef.current.focus();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="movies-page">
      <h1>🎥 Explore Movies</h1>

      <div className="top-controls">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={focusSearch}>Focus Search</button>

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Sort By</option>

          <option value="rating">Highest Rating</option>

          <option value="latest">Latest Release</option>

          <option value="az">A-Z</option>
        </select>
      </div>

      <p className="results">Showing {filteredMovies.length} results</p>

      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>

          <h2>Loading Movies...</h2>
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <h2>No movies found</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Movies;
