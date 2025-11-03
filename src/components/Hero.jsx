import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1200,
      easing: "ease-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <section className="bg-white text-slate-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte principal */}
        <div className="space-y-6 reveal">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm">
            Développeur Fullstack & Créateur de Bots
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Salut 👋, je suis{" "}
            <span className="text-blue-600">LORD OBITO DEV</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Fondateur de <strong>LORD OBITO TECH</strong> — je conçois des sites
            modernes et des bots puissants pour automatiser les communications,
            améliorer l’expérience utilisateur et booster la productivité.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              🚀 Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition font-semibold"
            >
              📩 Me contacter
            </a>
          </div>
        </div>

        {/* Image ou logo */}
        <div className="flex justify-center reveal">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center">
            {!imgError ? (
              <img
                src="https://files.catbox.moe/x4k80u.webp"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="text-4xl font-extrabold text-slate-300">
                LO
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
