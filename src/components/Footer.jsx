import React from "react";

export default function Footer() {
  const socials = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", url: "https://github.com/LORD-OBITO-DEV" },
    { name: "YouTube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg", url: "https://youtube.com/@lord_obito_tech_offc" },
    { name: "Telegram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg", url: "https://t.me/LORD_OBITO_DEV" },
    { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg", url: "https://wa.me/2250712668494" },
  ];

  const donations = [
    { name: "PayPal", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg", url: "https://paypal.me/TonPseudoOuLien" },
    { name: "Wave", icon: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDA3QkYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik0yNTYsMGMyOC4zLDAsNTUuMyw0LjgsODAuMiwxMy43bC0xOS41LDUzLjZDMzA0LjIsNTcuMywyODAuOCw1NSwyNTYsNTVTMjA3LjgsNTcuMywxOTkuMyw2Ny4zTDE4MCwzMy44QzIwNC43LDI0LjgsMjMxLjcsMCwyNTYsMHoiLz48L3N2Zz4=", url: "https://wave.com/link-de-paiement" },
    { name: "Orange Money", icon: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY4MDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDI0LDMwMkM0MjQsNDQ2LjcsMzM0LjcsNTM2LDE5MC41LDUzNlM0Miw0NDYuNyw0MiwzMDJDNDEuOSwyNTYuNSw2OC4yLDEzOC4zLDE5MC41LDEyM2MzMi4yLTkuOCw2OC4xLTguNCw5OC41LDYuN2wyMy40LTcwLjVjLTMwLjktMTUuNy02OS44LTE2LjgtMTAyLjUtNy4zQzgwLjUsMTE2LjUsMzUuMSwyMTEuNiw0MiwzMDJ6Ii8+PC9zdmc+", url: "https://orangemoney.com/link-de-paiement" },
  ];

  return (
    <footer className="bg-white border-t mt-16 py-10 text-center text-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Boutons de dons */}
        <div>
          <h3 className="font-semibold text-lg text-slate-800 mb-3">Soutenez mon travail 💙</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {donations.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg transform transition duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg"
              >
                <img src={d.icon} alt={d.name} className="w-5 h-5" />
                {d.name}
              </a>
            ))}
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold text-lg text-slate-800 mb-3">Retrouvez-moi sur</h3>
          <div className="flex justify-center flex-wrap gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
              >
                <img src={s.icon} alt={s.name} className="w-5 h-5" />
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} <strong>LORD OBITO DEV</strong> — Fondateur de <strong>LORD OBITO TECH</strong><br />
          Développé avec 💻 & déployé sur <a href="https://render.com" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold">Render</a>.
        </div>
      </div>
    </footer>
  );
            }
