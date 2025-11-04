import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const articlesData = [
  {
    id: 1,
    title: "Crée ton propre Bot WhatsApp – Tutoriel Complet !",
    excerpt:
      "Découvre comment créer ton bot WhatsApp avec tous les fichiers, étapes d’installation et commandes prêtes à l’emploi !",
    content: (
      <>
        <p>
          📹 Regarde le tuto complet ici 👉{" "}
          <a
            href="https://youtu.be/-24iwWriOCc"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>
        <p>
          📦 Fichiers du bot (Téléchargement) ➡️{" "}
          <a
            href="https://t.me/Lord_obito_tech_official/37"
            className="text-blue-600 dark:text-blue-400 underline"
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
              className="text-blue-600 dark:text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fichier anglais
            </a>
          </li>
          <li>
            <a
              href="https://t.me/Lord_obito_tech_official/46"
              className="text-blue-600 dark:text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fichier français
            </a>
          </li>
        </ul>
        <p className="font-semibold">
          ✨ Ouvre le fichier, copie tout le contenu, puis envoie-le à ton IA —
          de préférence sur GPT Chat. Elle générera automatiquement les commandes
          de ton bot !
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Automatiser WhatsApp avec ton bot",
    excerpt:
      "Découvre comment ton bot peut répondre automatiquement, envoyer des rappels et gérer des groupes.",
    content: (
      <p>
        Ce guide te montre comment ajouter des commandes automatiques, gérer des
        groupes efficacement et personnaliser les réactions de ton bot 🔥.
      </p>
    ),
  },
  {
    id: 3,
    title: "Top 5 des projets simples pour débuter",
    excerpt:
      "Voici 5 idées de bots parfaits pour débuter avec JavaScript et Baileys.",
    content: (
      <ul className="list-disc ml-6">
        <li>Bot de notifications de groupe 📢</li>
        <li>Bot de quiz interactif 🎯</li>
        <li>Bot pour rappels quotidiens ⏰</li>
        <li>Bot de téléchargement média 🎵</li>
        <li>Bot de sondages anonymes 📊</li>
      </ul>
    ),
  },
];

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);
  const articleRefs = useRef([]);

  useEffect(() => {
    ScrollReveal().reveal(".blog-article", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      interval: 150,
      easing: "ease-out",
      reset: false,
    });
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 md:px-12 bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400">
          📰 Blog – LORD OBITO TECH
        </h2>

        <div className="space-y-8">
          {articlesData.map((article, idx) => (
            <div
              key={article.id}
              ref={(el) => (articleRefs.current[idx] = el)}
              className="blog-article border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              <button
                onClick={() => toggleExpand(article.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-blue-50 dark:bg-slate-700/40 hover:bg-blue-100 dark:hover:bg-slate-700/60 font-semibold text-blue-700 dark:text-blue-300"
              >
                <span>{article.title}</span>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    expandedId === article.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedId === article.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-slate-700 dark:text-slate-300 space-y-3 border-t border-slate-200 dark:border-slate-600">
                  <p>{article.excerpt}</p>
                  {article.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-20 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} LORD OBITO TECH — Tous droits réservés ⚡
      </footer>
    </section>
  );
          }
