"use client";

import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { PERSONAL, RESUME_HIGHLIGHTS } from "@/lib/data";

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">
            08. Resume
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            My Resume
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Download or preview my full resume with detailed experience and
            skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold">Career Highlights</h3>
              <ul className="space-y-3">
                {RESUME_HIGHLIGHTS.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PERSONAL.resumeUrl}
                  download
                  className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40"
                >
                  <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download
                </a>
                <a
                  href={PERSONAL.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-brand-500/50 hover:bg-brand-500/5"
                >
                  <FiExternalLink className="h-4 w-4" />
                  Open
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">
                  Amit-Kumar-Adhikari-Resume.pdf
                </span>
              </div>
              <div className="h-[850px] w-full overflow-hidden bg-muted/20">
                <iframe
                  src={`${PERSONAL.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Resume Preview"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
