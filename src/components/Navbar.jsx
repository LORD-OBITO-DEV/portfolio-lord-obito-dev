import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Nom */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="LORD OBITO TECH"
            onError={(e) => (e.target.style.display = "none")}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">LORD OBITO TECH</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">by LORD OBITO DEV</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 dark:hover:text-blue-400 transition ${
                isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-slate-700 dark:text-slate-200"
              }`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-blue-600 dark:hover:text-blue-400 transition ${
                isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-slate-700 dark:text-slate-200"
              }`
            }
          >
            Blog
          </NavLink>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 transition">
            Projets
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 transition">
            Contact
          </a>
          <a
            href="https://wa.me/2250712668494"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            Me Contacter
          </a>
        </nav>

        {/* Bouton Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-blue-50 dark:hover:bg-slate-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6 text-slate-700 dark:text-slate-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col gap-3">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link to="/blog" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>
            Projets
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a
            href="https://wa.me/2250712668494"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition text-center"
          >
            Me Contacter
          </a>
        </div>
      )}
    </header>
  );
      }
