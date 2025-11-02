import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b bg-white/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* logo fallback: image if exists otherwise text */}
          <img src="/src/assets/logo.png" alt="LORD OBITO TECH" className="w-10 h-10 object-cover rounded" onError={(e)=>{e.target.style.display='none'}} />
          <div className="hidden sm:block">
            <div className="text-lg font-semibold">LORD OBITO TECH</div>
            <div className="text-xs text-slate-500">LORD OBITO DEV</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/projects" className={({isActive})=>isActive? 'text-primary font-medium':'opacity-80'}>Projets</NavLink>
          <NavLink to="/blog" className={({isActive})=>isActive? 'text-primary font-medium':'opacity-80'}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-primary font-medium':'opacity-80'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
