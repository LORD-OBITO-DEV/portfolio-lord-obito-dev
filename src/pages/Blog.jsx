import React from 'react'

const posts = [
  { id:1, title:'Construire un bot WhatsApp scalable', date:'2025-07-20', excerpt:'Guide pas à pas' }
]

export default function Blog(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {posts.map(p=> (
          <article key={p.id} className="p-4 border rounded">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
            <div className="text-xs text-slate-400 mt-3">{p.date}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

src/pages/Contact.jsx

import React from 'react'

export default function Contact(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600">Envoyez-moi un message ou utilisez les liens dans le footer.</p>

      <form action="https://formspree.io/f/yourformid" method="POST" className="mt-4 grid gap-3 md:grid-cols-2">
        <input name="name" placeholder="Votre nom" className="p-3 border rounded" />
        <input name="email" placeholder="Votre email" className="p-3 border rounded" />
        <input name="subject" placeholder="Sujet" className="p-3 border rounded md:col-span-2" />
        <textarea name="message" placeholder="Message" className="p-3 border rounded md:col-span-2" rows={6}></textarea>
        <button className="px-4 py-2 bg-primary text-white rounded md:col-span-2">Envoyer</button>
      </form>
    </section>
  )
}
