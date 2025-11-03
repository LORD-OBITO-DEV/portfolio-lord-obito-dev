import React from "react";

export default function Projects({ projects, author }) {
  return (
    <section id="projects" className="mt-12 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-slate-900 mb-6">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.id} className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-blue-600">
                {p.title}
              </a>
            </h3>
            <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>

            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded border text-slate-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a href={p.link} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded border hover:bg-slate-50 transition">
                Voir le projet
              </a>
              <a
                href={`mailto:${author.email}?subject=À propos de: ${encodeURIComponent(p.title)}`}
                className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Me contacter
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
