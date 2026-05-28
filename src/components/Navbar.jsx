import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";

import { ThemeContext } from "../context/ThemeContext";

import "./Navbar.css";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { watchlist } = useContext(WatchlistContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🎬 MovieNet</h2>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Movies
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Watchlist ({watchlist.length})
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
