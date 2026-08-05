'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SOCIALS } from '@/lib/data';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
};

type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

export function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${SOCIALS.githubUser}`),
          fetch(
            `https://api.github.com/users/${SOCIALS.githubUser}/repos?sort=updated&per_page=6`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch');
        const userData = await userRes.json();
        const reposData: Repo[] = await reposRes.json();
        setUser(userData);
        setRepos(
          reposData
            .filter((r) => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6)
        );
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  return (
    <section id="github" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">06. GitHub</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Open Source Activity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Latest repositories and contributions from my GitHub profile.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-44 animate-pulse rounded-2xl border border-border/60 bg-card/40"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-xl">
            <p className="text-muted-foreground">
              Unable to load GitHub data right now. Please visit my profile directly.
            </p>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white"
            >
              <FaGithub className="h-4 w-4" />
              Visit GitHub
            </a>
          </div>
        ) : (
          <>
            {user && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl sm:flex-row"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="h-16 w-16 rounded-full border-2 border-brand-500/40"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{user.name ?? user.login}</h3>
                    <p className="text-sm text-muted-foreground">{user.bio}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-500">{user.public_repos}</div>
                    <div className="text-xs text-muted-foreground">Repos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-500">{user.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-500">{user.following}</div>
                    <div className="text-xs text-muted-foreground">Following</div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-xl transition-colors hover:border-brand-500/40"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <FaCode className="h-5 w-5 text-brand-500" />
                    <FiExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand-500" />
                  </div>
                  <h3 className="mb-1 font-semibold leading-tight transition-colors group-hover:text-brand-500">
                    {repo.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                    {repo.description ?? 'No description available.'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all hover:border-brand-500/50 hover:bg-brand-500/5"
              >
                <FaGithub className="h-4 w-4" />
                View All Repositories
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
