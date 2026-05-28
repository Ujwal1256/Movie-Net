import { useContext } from "react";

import Navbar from "./components/Navbar";

import AppRoutes from "./routes/AppRoutes";

import { ThemeContext } from "./context/ThemeContext";

import "./styles/theme.css";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar />

      <AppRoutes />
    </div>
  );
}

export default App;
