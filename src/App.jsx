import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Lire le thème dans localStorage au chargement
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) setDarkMode(storedTheme === "true");
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Bouton flottant pour changer le thème */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
