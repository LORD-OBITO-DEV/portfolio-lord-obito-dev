import React from "react";

export default function Contact({ author }) {
  return (
    <section id="contact" className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Envie de collaborer ? Contactez-moi via ce formulaire, ou directement par mail.
      </p>

      <form
        action="https://formspree.io/f/xvgvlzrg"
        method="POST"
        className="grid md:grid-cols-2 gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
      >
        <input
          name="name"
          placeholder="Votre nom"
          className="p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          className="p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          required
        />
        <input
          name="subject"
          placeholder="Sujet"
          className="p-3 rounded border md:col-span-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-3 rounded border md:col-span-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          rows={5}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold md:col-span-2 hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>

      <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        Direct: <strong>{author.email}</strong> — {author.phone}
      </div>
    </section>
  );
}
