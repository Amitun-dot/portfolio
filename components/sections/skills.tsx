'use client';

import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPostman,
  SiApache,
} from 'react-icons/si';
import {
  TbReportAnalytics,
  TbFileExcel,
  TbDatabase,
  TbRobot,
  TbKey,
  TbApi,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { SKILLS, SKILL_ICONS } from '@/lib/data';

const iconMap: Record<string, IconType> = {
  SiOpenjdk: FaJava,
  SiSpringboot,
  SiSpringsecurity,
  MdKey: TbKey,
  SiHibernate,
  SiSpringboot2: SiSpringboot,
  MdApi: TbApi,
  SiReact: FaReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript: FaJs,
  SiTypescript,
  SiHtml5: FaHtml5,
  SiCss3: FaCss3Alt,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit: FaGitAlt,
  SiGithub: FaGithub,
  SiDocker: FaDocker,
  SiApache,
  SiPostman,
  TbBrandPowerbi: TbReportAnalytics,
  TbBrandExcel: TbFileExcel,
  TbDatabase,
  SiPython: FaPython,
  SiOpenai: TbRobot,
  TbRobot,
};

const categoryConfig: Record<
  string,
  { gradient: string; glow: string; border: string }
> = {
  Backend: {
    gradient: 'from-orange-500/20 to-red-500/10',
    glow: 'shadow-orange-500/20',
    border: 'hover:border-orange-500/40',
  },
  Frontend: {
    gradient: 'from-sky-500/20 to-blue-500/10',
    glow: 'shadow-sky-500/20',
    border: 'hover:border-sky-500/40',
  },
  Database: {
    gradient: 'from-emerald-500/20 to-green-500/10',
    glow: 'shadow-emerald-500/20',
    border: 'hover:border-emerald-500/40',
  },
  Tools: {
    gradient: 'from-violet-500/20 to-purple-500/10',
    glow: 'shadow-violet-500/20',
    border: 'hover:border-violet-500/40',
  },
  Other: {
    gradient: 'from-pink-500/20 to-rose-500/10',
    glow: 'shadow-pink-500/20',
    border: 'hover:border-pink-500/40',
  },
};

const marqueeSkills = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'TypeScript', 'MySQL',
  'PostgreSQL', 'MongoDB', 'Docker', 'Python', 'Hibernate', 'JWT',
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">02. Skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Arsenal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A comprehensive toolkit spanning backend, frontend, databases, and modern
            tooling.
          </p>
        </motion.div>
      </div>

      <div className="relative mb-16 flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-4 pr-4">
          {marqueeSkills.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-full border border-border/60 bg-card/60 px-5 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-4 pr-4" aria-hidden>
          {marqueeSkills.map((skill, i) => (
            <span
              key={`${skill}-dup-${i}`}
              className="whitespace-nowrap rounded-full border border-border/60 bg-card/60 px-5 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="container-max">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([category, skillList], catIndex) => {
            const config = categoryConfig[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl transition-colors ${config.border}`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${config.gradient} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-50`}
                />
                <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
                  <span className={`h-1.5 w-1.5 rounded-full bg-brand-500`} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => {
                    const iconName = SKILL_ICONS[skill];
                    const Icon = iconName ? iconMap[iconName] : null;
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="flex items-center gap-2 rounded-xl border border-border/40 bg-background/40 px-3 py-2 text-sm font-medium transition-colors hover:border-brand-500/40 hover:bg-brand-500/5"
                      >
                        {Icon && <Icon className="h-4 w-4 text-brand-500" />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
