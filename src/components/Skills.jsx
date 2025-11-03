import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 100,
      reset: false,
    });
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-12 h-12" />, desc: "Structure sémantique et accessibilité" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />, desc: "Design responsive et animations" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-12 h-12" />, desc: "Interactivité et logique métier" },
    { name: "React", icon: <FaReact className="text-blue-400 w-12 h-12" />, desc: "UI dynamique et composants réutilisables" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" />, desc: "Backend et APIs performantes" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900 dark:text-slate-100 reveal">
          Mes Compétences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 text-center shadow-lg reveal hover:translate-y-[-5px] transition">
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{skill.name}</h3>
              <p className="text-slate-600 dark:text-slate-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                       }
