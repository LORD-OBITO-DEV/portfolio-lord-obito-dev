import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Parcours() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
  }, []);

  const parcours = [
    {
      year: "2023",
      title: "Début de l'aventure",
      desc: "J'ai commencé mon parcours de développeur autodidacte. Passionné par la technologie et les bots, j'ai exploré HTML, CSS et JavaScript à travers de petits projets personnels.",
    },
    {
      year: "2023",
      title: "Premier bot WhatsApp",
      desc: "Création de mon premier bot WhatsApp. Cette étape m'a permis de comprendre l'automatisation, la gestion des sessions et la communication en temps réel avec les utilisateurs.",
    },
    {
      year: "2024",
      title: "Lancement de mes premiers sites",
      desc: "Développement de 3 sites web, dont des plateformes éducatives et portfolios. J'ai appliqué mes connaissances en frontend pour créer des interfaces modernes, responsives et accessibles.",
    },
    {
      year: "2024",
      title: "LORD OBITO TECH",
      desc: "Fondation de LORD OBITO TECH, mon projet phare. Ici, j'ai combiné mes compétences en développement web et bots pour créer des solutions professionnelles et des outils d'automatisation avancés.",
    },
    {
      year: "2025",
      title: "Projets actuels et vision future",
      desc: "Développement continu de bots et sites web innovants, dont ce portfolio et d'autres projets ambitieux. Objectif : créer des solutions qui automatisent les tâches, améliorent l'expérience utilisateur et apportent de la valeur à mes clients.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-slate-100 reveal">
          Mon Parcours
        </h2>

        <div className="space-y-12">
          {parcours.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-6 reveal">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                {step.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
