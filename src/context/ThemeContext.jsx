import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] =
  useState(() => {

    const savedTheme =
      localStorage.getItem("darkMode");

    return savedTheme
      ? JSON.parse(savedTheme)
      : false;

  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {

  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );

}, [darkMode]);
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
