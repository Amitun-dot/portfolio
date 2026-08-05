'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SOCIALS } from '@/lib/data';

const heatmapData = Array.from({ length: 7 * 26 }, (_, i) => {
  const seed = (i * 7 + 13) % 100;
  let level = 0;
  if (seed > 85) level = 4;
  else if (seed > 65) level = 3;
  else if (seed > 40) level = 2;
  else if (seed > 20) level = 1;
  return level;
});

const levelColors = [
  'bg-muted/40',
  'bg-brand-500/20',
  'bg-brand-500/40',
  'bg-brand-500/60',
  'bg-brand-500/90',
];

const stats = [
  { label: 'Solved Problems', value: '100+' },
  { label: 'Easy', value: '40+' },
  { label: 'Medium', value: '45+' },
  { label: 'Hard', value: '15+' },
];

const badges = [
  { label: '100 Days Badge', icon: '🔥' },
  { label: 'Problem Solver', icon: '⚡' },
  { label: 'Consistency', icon: '🎯' },
];

export function LeetCodeSection() {
  return (
    <section id="leetcode" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">07. LeetCode</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Problem Solving Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            DSA practice and competitive programming stats from LeetCode.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl"
        >
          <div className="border-b border-border/60 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-lg font-bold text-brand-500">
                  LC
                </div>
                <div>
                  <h3 className="font-semibold">{SOCIALS.leetcodeUser}</h3>
                  <p className="text-sm text-muted-foreground">LeetCode Profile</p>
                </div>
              </div>
              <a
                href={SOCIALS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                Visit Profile
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border/40 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/60 p-6 text-center">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-border/60 p-6">
            <h4 className="mb-4 text-sm font-semibold text-muted-foreground">
              Contribution Activity
            </h4>
            <div className="flex flex-wrap gap-[3px]">
              {heatmapData.map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: (i / 50) }}
                  className={`h-2.5 w-2.5 rounded-[2px] ${levelColors[level]}`}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              {levelColors.map((c, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="border-t border-border/60 p-6">
            <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Badges</h4>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-border/40 bg-background/40 px-4 py-2"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
