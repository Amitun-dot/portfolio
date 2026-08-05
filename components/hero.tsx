"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaJava,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiSpringboot,
  SiMysql,
  SiRedis,
} from "react-icons/si";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { HeroParticles } from "@/components/hero-particles";
import { TypingText } from "@/components/typing-text";
import { PERSONAL, SOCIALS } from "@/lib/data";

const socialLinks = [
  { icon: FaGithub, href: SOCIALS.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: SiLeetcode, href: SOCIALS.leetcode, label: "LeetCode" },
  { icon: FaWhatsapp, href: SOCIALS.whatsapp, label: "WhatsApp" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-brand-600/15 blur-[100px] animate-glow-pulse [animation-delay:2s]" />
      </div>

      <HeroParticles />

      <div className="container-max grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          style={{ y: yText, opacity }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <br className="sm:hidden" />
            <span className="text-gradient">Amit Kumar Adhikari</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-mono text-xl font-medium text-foreground sm:text-2xl"
          >
            <TypingText
              words={[
                "Full Stack Java Developer",
                "Spring Boot Specialist",
                "React & Next.js Developer",
                "REST API Developer",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Java • Spring Boot • React • Next.js
            <br />
            {PERSONAL.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={PERSONAL.resumeUrl}
              download
              className="group flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-brand-500/50 hover:bg-brand-500/5"
            >
              <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground backdrop-blur-md transition-all hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-500"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImage, opacity }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-gradient-to-tr from-brand-500 via-brand-400 to-brand-600 opacity-30 blur-2xl" />
            <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-3xl animate-glow-pulse" />

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-square w-64 transition-transform duration-300 ease-out sm:w-80 lg:w-[420px]"
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 to-brand-600 p-[3px] glow-orange-strong">
                <div className="h-full w-full overflow-hidden rounded-full bg-card">
                  <img
                    src={PERSONAL.photo}
                    alt="Amit Kumar Adhikari"
                    className="h-full w-full object-cover"
                    width={420}
                    height={420}
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-8 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15 text-brand-500">
                  <FaJava className="h-4 w-4" />
                </span>
                <div className="text-xs">
                  <div className="font-semibold">Java</div>
                  <div className="text-muted-foreground">Backend</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-2 bottom-12 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                  <FaReact className="h-4 w-4" />
                </span>
                <div className="text-xs">
                  <div className="font-semibold">React</div>
                  <div className="text-muted-foreground">Frontend</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity }}
                className="absolute left-0 top-28 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/15 text-green-500">
                  <SiSpringboot className="h-4 w-4" />
                </span>

                <div className="text-xs">
                  <div className="font-semibold">Spring Boot</div>
                  <div className="text-muted-foreground">REST APIs</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-6 bottom-32 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-500">
                  <SiMysql className="h-4 w-4" />
                </span>

                <div className="text-xs">
                  <div className="font-semibold">MySQL</div>
                  <div className="text-muted-foreground">Database</div>
                </div>
              </motion.div>


              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity }}
                className="absolute left-16 top-6 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/15 text-red-500">
                  <SiRedis className="h-4 w-4" />
                </span>

                <div className="text-xs">
                  <div className="font-semibold">Redis</div>
                  <div className="text-muted-foreground">Cache</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-brand-500"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
          <FiArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
