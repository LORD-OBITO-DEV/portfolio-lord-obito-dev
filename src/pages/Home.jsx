// src/pages/Home.jsx
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";

export default function Home() {
  const author = {
    name: "N'GUESSAN JEAN STEPHANE ELIEL",
    email: "lordobitoushiwa672@gmail.com",
    phone: "+2250712668494",
  };

  const projects = [
    {
      id: 1,
      title: "LORD OBITO XMD - Bot WhatsApp",
      desc: "Bot WhatsApp basé sur Baileys avec gestion de sessions MEGA, commandes premium et panel d'administration.",
      link: "https://github.com/LORD-OBITO-DEV/LORD_OBITO-XMD-V2",
      tags: ["WhatsApp", "Node.js", "Baileys"],
    },
    {
      id: 2,
      title: "LORD OBITO PANEL",
      desc: "Panel d'administration pour panneaux, gestion stockage et comptes utilisateurs.",
      link: "#",
      tags: ["Panel", "React", "Node"],
    },
    {
      id: 3,
      title: "Portfolio LORD OBITO DEV",
      desc: "Mon portfolio personnel construit en React avec mode sombre automatique et sections dynamiques.",
      link: "#",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      id: 4,
      title: "Bot Telegram d’abonnement",
      desc: "Bot de gestion d’abonnement automatique avec PayPal, Wave et Orange Money.",
      link: "#",
      tags: ["Telegram", "Bot", "Node.js"],
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
    });

    sr.reveal("section");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors duration-500">
      {/* Hero */}
      <Hero />

      {/* Mes projets */}
      <Projects projects={projects} author={author} />

      {/* Contact */}
      <Contact author={author} />

      {/* Footer */}
      <Footer />
    </div>
  );
             }
