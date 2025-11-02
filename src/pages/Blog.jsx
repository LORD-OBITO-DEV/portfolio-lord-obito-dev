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

