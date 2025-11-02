import React from "react";

export default function Footer() {
  const socials = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg", url: "https://github.com/LORD-OBITO-DEV" },
    { name: "YouTube", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg", url: "https://youtube.com/@lord_obito_tech_offc" },
    { name: "Telegram", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", url: "https://t.me/LORD_OBITO_DEV" },
    { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg", url: "https://whatsapp.com/channel/0029Vb65HSyHwXbEQbQjQV26" },
  ];

  const donations = [
    { name: "PayPal", url: "#" },
    { name: "Wave", url: "#" },
    { name: "Orange Money", url: "#" },
  ];

  return (
    <footer className="border-t bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Réseaux sociaux */}
        <div className="flex gap-4 flex-wrap justify-center">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition">
              <img src={s.icon} alt={s.name} className="w-5 h-5" />
              <span className="hidden sm:inline">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Dons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {donations.map((d) => (
            <a key={d.name} href={d.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
              {d.name}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4 pb-4">
        © {new Date().getFullYear()} N'GUESSAN JEAN STEPHANE ELIEL — LORD OBITO DEV • Déployé sur Render
      </div>
    </footer>
  );
}
