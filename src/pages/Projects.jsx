import React from 'react'

const projects = [
  { id:1, title:'LORD OBITO XMD - Bot WhatsApp', desc:'Bot WhatsApp basé sur Baileys', link:'https://github.com/LORD-OBITO-DEV/LORD_OBITO-XMD-V2' },
  { id:2, title:'LORD OBITO PANEL', desc:'Panel d'administration pour hébergeurs', link:'#' },
]

export default function Projects(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map(p=> (
          <article key={p.id} className="p-4 border rounded">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
            <a className="text-sm mt-3 inline-block text-primary" href={p.link} target="_blank" rel="noreferrer">Voir le dépôt</a>
          </article>
        ))}
      </div>
    </section>
  )
}
