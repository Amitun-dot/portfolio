'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">03. Experience</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Career Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional experience building real-world applications with modern
            technologies.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 flex flex-col gap-4 md:flex-row md:items-center ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-500 bg-background md:left-1/2">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
              </div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl transition-colors hover:border-brand-500/40">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
                        <Briefcase className="h-3 w-3" />
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                        <Building2 className="h-3.5 w-3.5 text-brand-500" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
