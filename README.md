# 🎬 MovieNet

MovieNet is a modern React Movie Watchlist application where users can explore movies, search and filter movie collections, view detailed information, and save favourite movies into a personal watchlist.

The project was built as a React mini project to practice core React concepts including routing, hooks, optimization techniques, Context API, and responsive UI development.

---

# 🌐 Live Demo

🚀 Deployed Project Link:

[MovieNet Live Demo](https://movie-net-khaki.vercel.app/)

---


# 🚀 Features

## ✅ Core Features

- Multi-page React application
- React Router based navigation
- Dynamic movie details page
- Search movies by title
- Filter movies by genre
- Sort movies by rating, release year, and title
- Save favourite movies to watchlist
- Remove movies from watchlist
- Prevent duplicate saves
- Responsive design for mobile and desktop
- 404 Not Found page
- Loading state simulation
- Dark/Light theme toggle
- Persistent theme and watchlist using localStorage

---

# 🧠 React Concepts Used

- React Components
- useState
- useEffect
- useMemo
- useRef
- useCallback
- useContext
- React.memo
- Context API
- Conditional Rendering
- Dynamic Routing
- List Rendering with map()
- React Router DOM

---

# 📂 Project Structure

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│
├── context/
│   ├── ThemeContext.jsx
│   ├── WatchlistContext.jsx
│
├── data/
│   └── movies.js
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── MovieDetails.jsx
│   ├── Watchlist.jsx
│   ├── About.jsx
│   └── NotFound.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   └── theme.css
│
├── App.jsx
├── main.jsx
```

---

# 🛣️ Routes

| Route | Description |
|---|---|
| `/` | Home Page |
| `/movies` | Movies Listing Page |
| `/movies/:movieId` | Movie Details Page |
| `/watchlist` | Saved Movies Page |
| `/about` | About Page |
| `*` | 404 Not Found Page |

---

# 🎥 Functionalities

## 🔍 Search Movies

Users can search movies by title in real time.

## 🎭 Filter Movies

Movies can be filtered by genre.

## 🔄 Sort Movies

Movies can be sorted by:

- Highest Rating
- Latest Release
- A-Z Order

## ❤️ Watchlist

Users can:

- Save favourite movies
- Remove saved movies
- View total saved movies
- View average rating of saved movies

## 🌙 Theme Toggle

Supports:

- Light Mode
- Dark Mode

Theme preference is saved using localStorage.

---

# ⚡ Performance Optimizations

## useMemo

Used for:

- Optimized filtering
- Sorting movies
- Watchlist summary calculations

## useCallback

Used for:

- saveMovie()
- removeMovie()

## React.memo

Used to prevent unnecessary re-renders of reusable movie card components.

---

# 📱 Responsive Design

MovieNet is fully responsive and works across:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

# 💾 localStorage Support

The app stores:

- Saved watchlist movies
- Theme preference

This ensures data persists after page refresh.

---

# 🛠️ Tech Stack

- React
- React Router DOM
- JavaScript
- CSS3
- Vite

---

# ▶️ Installation and Setup

## Clone Repository

```bash
git clone <your-github-repo-link>
```

## Navigate to Project

```bash
cd movienet
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 📸 Future Improvements

- Add movie posters
- Integrate Movie API (TMDB)
- Add authentication
- Add pagination
- Add trailer support
- Add movie reviews
- Deploy online

---

# 👨‍💻 Author

Developed by Ujwal Jakhamate

---

# ⭐ Conclusion

MovieNet is a feature-rich React movie watchlist application built to demonstrate practical frontend development concepts including routing, state management, optimization hooks, reusable components, and responsive UI design.