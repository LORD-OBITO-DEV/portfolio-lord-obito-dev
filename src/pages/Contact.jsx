

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
