import React from 'react'

export default function Home(){
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">N'GUESSAN JEAN STEPHANE ELIEL</h1>
          <p className="mt-2 text-slate-600">Développeur Web & Bots — Pseudo: LORD OBITO DEV • LORD OBITO TECH</p>

          <div className="mt-6 flex gap-3">
            <a href="/projects" className="px-4 py-2 rounded bg-primary text-white">Voir mes projets</a>
            <a href="/contact" className="px-4 py-2 rounded border">Me contacter</a>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Compétences</h3>
            <ul className="mt-2 text-sm text-slate-600">
              <li>• React, Vite, Tailwind</li>
              <li>• Node.js, Express</li>
              <li>• Bots WhatsApp (Baileys), sessions MEGA</li>
              <li>• Déploiement : Render, Vercel</li>
            </ul>
          </div>
        </div>

        <div className="w-48 h-48 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
          <img src="/src/assets/profile.jpg" alt="profile" className="w-full h-full object-cover" onError={(e)=>{e.target.style.display='none'}} />
          {/* fallback initials */}
          <div className="text-2xl font-bold text-slate-600">LO</div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">À propos</h2>
        <p className="mt-2 text-slate-600">Je crée des sites web et des bots pour automatiser des tâches et améliorer la présence digitale. J'offre aussi des services de maintenance et de conseil.</p>
      </div>
    </section>
  )
}
