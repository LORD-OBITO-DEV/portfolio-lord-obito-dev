import React from "react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-16">
      <div>
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Développeur Web & Bots
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">
          Salut, moi c’est <span className="text-blue-600">LORD OBITO DEV</span>
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Fondateur de <strong>LORD OBITO TECH</strong>, je crée des sites modernes et des bots puissants
          pour automatiser les communications et améliorer l’expérience utilisateur.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Voir mes projets
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition">
            Me contacter
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-56 h-56 rounded-xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center">
          <img
            src="/assets/profile.jpg"
            alt="LORD OBITO DEV"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div className="text-3xl font-bold text-slate-400">LO</div>
        </div>
      </div>
    </section>
  );
      }
