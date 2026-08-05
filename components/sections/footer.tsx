'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL, SOCIALS } from '@/lib/data';
import Image from "next/image";

const socials = [
  { icon: FaGithub, href: SOCIALS.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: SOCIALS.leetcode, label: 'LeetCode' },
  { icon: FaWhatsapp, href: SOCIALS.whatsapp, label: 'WhatsApp' },
  { icon: FiMail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-xl">
      <div className="container-max py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center justify-center gap-2 text-lg font-bold md:justify-start"
            >
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-110">
                            <Image
                              src="/logo.png"
                              alt="Amit Logo"
                              width={44}
                              height={44}
                              className="h-full w-full object-contain"
                              priority
                            />
                          </span>
              {PERSONAL.firstName}
              <span className="text-brand-500">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Stack Java Developer building modern web applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TailwindCSS & Framer Motion
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
      >
        <FiArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
      </motion.button>
    </footer>
  );
}
