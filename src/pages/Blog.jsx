import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Blog – LORD OBITO TECH
      </h1>

      <div className="max-w-2xl text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Crée ton propre Bot WhatsApp – Tutoriel Complet !
        </h2>
        <p>
          Tu veux créer ton bot WhatsApp mais tu ne sais pas par où commencer ?
          Cette vidéo te montre tout ce qu’il faut — les fichiers, l’installation,
          et même des modèles de commandes prêts à l’emploi si tu ne sais pas coder !
        </p>
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
        <p>📦 Fichiers du bot 👉{" "}
          <a
            href="https://t.me/Lord_obito_tech_official/37"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger ici
          </a>
        </p>
        <p>
          💬 Modèles de commandes :
          <br />
          <a
            href="https://t.me/Lord_obito_tech_official/44"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇬🇧 Fichier anglais
          </a>{" "}
          |{" "}
          <a
            href="https://t.me/Lord_obito_tech_official/46"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇫🇷 Fichier français
          </a>
        </p>
        <p>
          🧠 Ouvre le fichier, copie tout le contenu, puis envoie-le à ton IA — de
          préférence sur GPT Chat. Elle générera automatiquement les commandes de ton bot !
        </p>
        <p className="font-semibold">✨ N’oublie pas de liker, t’abonner et partager à tes amis !</p>
      </div>
    </div>
  );
}
