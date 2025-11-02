import React from 'react'

const socials = [
  { name:'GitHub', url:'https://github.com/LORD-OBITO-DEV', icon:'/src/assets/icons/github.svg' },
  { name:'YouTube', url:'https://youtube.com/@lord_obito_tech_offc', icon:'/src/assets/icons/youtube.svg' },
  { name:'Telegram', url:'https://t.me/LORD_OBITO_DEV', icon:'/src/assets/icons/telegram.svg' },
  { name:'WhatsApp', url:'https://whatsapp.com/channel/0029Vb65HSyHwXbEQbQjQV26', icon:'/src/assets/icons/whatsapp.svg' },
]

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          {socials.map(s=> (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <img src={s.icon} alt={s.name} className="w-6 h-6" onError={(e)=>e.target.style.display='none'} />
              <span className="hidden sm:inline text-sm text-slate-600">{s.name}</span>
            </a>
          ))}
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} N'GUESSAN JEAN STEPHANE ELIEL — LORD OBITO TECH</div>
        <div className="text-xs text-slate-400 mt-2">Déployé sur Render • Code source sur <a className="underline" href="https://github.com/LORD-OBITO-DEV">GitHub</a></div>
      </div>
    </footer>
  )
              }
