import { createContext, useCallback, useState,useEffect } from "react";

export const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
const [watchlist, setWatchlist] =
  useState(() => {

    const savedWatchlist =
      localStorage.getItem("watchlist");

    return savedWatchlist
      ? JSON.parse(savedWatchlist)
      : [];

  });
  const saveMovie = useCallback(
    (movie) => {
      const alreadySaved = watchlist.find((item) => item.id === movie.id);

      if (alreadySaved) {
        alert("Movie already saved");
        return;
      }

      setWatchlist((prev) => [...prev, movie]);
    },
    [watchlist],
  );

  const removeMovie = useCallback((id) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== id));
  }, []);

  useEffect(() => {

  localStorage.setItem(
    "watchlist",
    JSON.stringify(watchlist)
  );

}, [watchlist]);

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        saveMovie,
        removeMovie,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export default WatchlistProvider;
