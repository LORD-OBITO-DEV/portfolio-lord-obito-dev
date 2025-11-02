import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

// Liste des articles du blog
const articlesData = [
  {
    id: 1,
    title: "Crée ton propre Bot WhatsApp – Tutoriel Complet !",
    excerpt: "Tu veux créer ton bot WhatsApp mais tu ne sais pas par où commencer ? Cette vidéo te montre tout ce qu’il faut — les fichiers, l’installation, et même des modèles de commandes prêts à l’emploi si tu ne sais pas coder !",
    content: (
      <>
        <p>📹 Regarde le tuto complet ici 👉{" "}
          <a
            href="https://youtu.be/-24iwWriOCc"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>
        <p>📦 Fichiers du bot (Téléchargement) ➡️{" "}
          <a
            href="https://t.me/Lord_obito_tech_official/37"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger ici
          </a>
        </p>
        <p>💬 Modèles de commandes à envoyer à ChatGPT :</p>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://t.me/Lord_obito_tech_official/44"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fichier anglais
            </a>
          </li>
          <li>
            <a
              href="https://t.me/Lord_obito_tech_official/46"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fichier français
            </a>
          </li>
        </ul>
        <p>🧠 Comment l’utiliser : Ouvre le fichier, copie tout le contenu, puis envoie-le à ton IA — de préférence sur GPT Chat. Elle générera automatiquement les commandes de ton bot !</p>
        <p className="font-semibold">✨ N’oublie pas de liker, t’abonner et partager à tes amis qui veulent leur propre bot !</p>
      </>
    ),
  },
  // Tu peux ajouter d’autres articles ici en copiant ce modèle
  {
    id: 2,
    title: "Comment automatiser WhatsApp avec ton bot",
    excerpt: "Découvre comment automatiser tes conversations WhatsApp et gérer les tâches répétitives grâce à ton bot personnalisé.",
    content: (
      <p>Ce guide te montrera comment configurer les commandes automatiques, envoyer des réponses programmées et gérer tes contacts efficacement. 🔥</p>
    ),
  },
  {
    id: 3,
    title: "Top 5 des projets pour débuter avec un bot",
    excerpt: "Tu veux te lancer dans le développement de bots mais tu ne sais pas quoi créer en premier ? Voici 5 idées de projets qui te feront progresser rapidement !",
    content: (
      <ul className="list-disc ml-6">
        <li>Bot de notifications pour groupes WhatsApp</li>
        <li>Bot pour envoyer des rappels quotidiens</li>
        <li>Bot de quiz interactif</li>
        <li>Bot pour gérer des sondages</li>
        <li>Bot de téléchargement multimédia</li>
      </ul>
    ),
  },
];

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);
  const articleRefs = useRef([]);

  // ScrollReveal pour animation des cartes
  useEffect(() => {
    ScrollReveal().reveal(articleRefs.current, {
      origin: "bottom",
      distance: "40px",
      duration: 800,
      easing: "ease-out",
      interval: 150,
    });
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">
        Blog – LORD OBITO TECH
      </h1>

      <div className="space-y-6">
        {articlesData.map((article, idx) => (
          <div
            key={article.id}
            ref={(el) => (articleRefs.current[idx] = el)}
            className="border rounded-lg shadow-lg overflow-hidden transition-all bg-white hover:shadow-xl"
          >
            <button
              onClick={() => toggleExpand(article.id)}
              className="w-full text-left px-6 py-4 bg-blue-50 hover:bg-blue-100 flex justify-between items-center font-semibold text-blue-700 focus:outline-none"
            >
              {article.title}
              <span className="text-xl">{expandedId === article.id ? "▲" : "▼"}</span>
            </button>

            {expandedId === article.id && (
              <div className="px-6 py-4 text-slate-700 space-y-2 border-t">
                <p>{article.excerpt}</p>
                {article.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
