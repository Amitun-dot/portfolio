'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { ACHIEVEMENTS } from '@/lib/data';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">05. Achievements</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-xl transition-colors hover:border-brand-500/40"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/0 to-brand-500/0 transition-all duration-500 group-hover:from-brand-500/5 group-hover:to-brand-600/5" />
              <div className="text-4xl font-bold text-gradient sm:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
