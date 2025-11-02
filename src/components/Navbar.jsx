import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-700";

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">LORD OBITO DEV</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className={isActive("/")}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/blog" className={isActive("/blog")}>
            Blog
          </Link>
        </li>
        <li>
          <a
            href="#contact"
            className="text-slate-700 hover:text-blue-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
