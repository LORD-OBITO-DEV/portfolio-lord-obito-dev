import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
