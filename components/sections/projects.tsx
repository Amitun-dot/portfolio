'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">04. Projects</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects showcasing full-stack development, from healthcare
            platforms to analytics dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl transition-colors hover:border-brand-500/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-60',
                    project.accent
                  )}
                />
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {project.featured && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg shadow-brand-500/30">
                    <FiStar className="h-3 w-3" />
                    Featured
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs font-semibold backdrop-blur-md transition-colors hover:border-brand-500/50 hover:bg-brand-500/5"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    Code
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-tight">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/40 bg-background/40 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
