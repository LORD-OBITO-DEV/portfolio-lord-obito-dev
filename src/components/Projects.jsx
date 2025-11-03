// src/components/Projects.jsx
import React from "react";

export default function Projects({ projects, author }) {
  return (
    <section
      id="projects"
      className="mt-12 max-w-6xl mx-auto px-6 transition-colors duration-500"
    >
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-6 text-center">
        Mes Projets
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="p-6 border rounded-2xl bg-white dark:bg-slate-900 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {p.title}
              </a>
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded border text-slate-500 dark:text-slate-400 dark:border-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Voir le projet
              </a>

              <a
                href={`mailto:${author.email}?subject=À propos de: ${encodeURIComponent(
                  p.title
                )}`}
                className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition"
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
