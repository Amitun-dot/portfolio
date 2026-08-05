'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full md:block"
      style={{ x, y }}
      animate={{
        scale: isPointer ? 2.2 : 1,
        opacity: isPointer ? 0.9 : 0.5,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-full w-full rounded-full bg-brand-500 blur-[6px]" />
    </motion.div>
  );
}
