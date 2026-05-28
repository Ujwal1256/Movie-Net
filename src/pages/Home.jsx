import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>🎬 Welcome to MovieNet</h1>

        <p>
          Discover amazing movies, explore details,
          and build your personal watchlist.
        </p>

        <Link to="/movies">
          <button className="explore-btn">
            Explore Movies
          </button>
        </Link>
      </section>

      <section className="features">

        <div className="feature-card">
          <h3>🔍 Search Movies</h3>
          <p>
            Quickly search your favourite movies.
          </p>
        </div>

        <div className="feature-card">
          <h3>❤️ Save Watchlist</h3>
          <p>
            Save movies to your personal watchlist.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎥 Movie Details</h3>
          <p>
            View ratings, genres, and descriptions.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Home;