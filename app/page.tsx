import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { CursorGlow } from '@/components/cursor-glow';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Achievements } from '@/components/sections/achievements';
import { GitHubSection } from '@/components/sections/github';
import { LeetCodeSection } from '@/components/sections/leetcode';
import { Internships } from '@/components/sections/internships';
import { Resume } from '@/components/sections/resume';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <GitHubSection />
        <LeetCodeSection />
        <Internships />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
