'use client';

import { useEffect, useState } from 'react';

type TypingProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
};

export function TypingText({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
  className,
}: TypingProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    if (!deleting && subIndex === words[index].length + 1) {
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      {words[index]?.substring(0, subIndex)}
      <span className="ml-0.5 inline-block w-0.5 animate-blink bg-brand-500 font-normal">
        |
      </span>
    </span>
  );
}
