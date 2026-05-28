import "./About.css";
import React from 'react'

function About() {
  return (
    <div className="about-page">

      <div className="about-card">

        <h1>🎬 About MovieNet</h1>

        <p>
          MovieNet is a movie watchlist
          application built using React.
        </p>

        <p>
          Users can explore movies,
          search by title,
          filter by genre,
          view movie details,
          and save favourite movies
          into a personal watchlist.
        </p>

        <p>
          This project demonstrates:
        </p>

        <ul>
          <li>React Router</li>
          <li>Dynamic Routing</li>
          <li>Context API</li>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>useRef</li>
          <li>React.memo</li>
          <li>Theme Switching</li>
          <li>localStorage</li>
        </ul>

      </div>

    </div>
  );
}

export default About;