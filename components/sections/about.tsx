'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  FlaskConical,
  Code2,
  Layout,
  Leaf,
  Bot,
  Github,
  Layers3,
  Sparkles,
  LucideIcon,
} from 'lucide-react';
import { ABOUT_CARDS } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  FlaskConical,
  Code2,
  Leaf,
  Layout,
  Bot,
  Github,
  Layers3,
};

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">01. About</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Who I Am
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A passionate developer with a strong foundation in backend engineering and a
            love for clean, scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Sparkles;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl transition-colors hover:border-brand-500/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold leading-tight">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
