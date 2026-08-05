'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';

export function Internships() {
  return (
    <section id="internships" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">
            10. Internships
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hands-on internships and job simulations that shaped my engineering journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl transition-colors hover:border-brand-500/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="mt-1 font-medium text-brand-500">{exp.company}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/40 bg-background/40 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
