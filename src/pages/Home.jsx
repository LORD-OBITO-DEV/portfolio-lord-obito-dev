import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";

export default function Home() {
  const author = {
    name: "N'GUESSAN JEAN STEPHANE ELIEL",
    email: "votre.email@exemple.com",
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
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <Parcours />
      <Skills />
      <Projects projects={projects} author={author} />
      <Contact author={author} />
      <Footer />
    </div>
  );
}
