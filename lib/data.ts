import type { LucideIcon } from 'lucide-react';

export const PERSONAL = {
  name: 'Amit Kumar Adhikari',
  firstName: 'Amit',
  lastName: 'Kumar Adhikari',
  role: 'Full Stack Java Developer',
  tagline:
      'I build scalable backend systems, beautiful user interfaces and modern full-stack applications.',
  email: 'amitiuse@gmail.com',
  location: 'Odisha, India',
  resumeUrl: '/Amit-Kumar-Adhikari-Resume.pdf',
  photo: '/Profile.jpeg',
} as const;

export const SOCIALS = {
  github: 'https://github.com/Amitun-dot',
  githubUser: 'Amitun-dot',
  linkedin: 'https://www.linkedin.com/in/amit-adhikari88/',
  leetcode: 'https://leetcode.com/u/AMITBOB/',
  leetcodeUser: 'AMITBOB',
  email: 'mailto:amitiuse@gmail.com',
  whatsapp: 'https://wa.me/918260090158',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internships', href: '#internships' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const;

export const ABOUT_CARDS = [
  {
    title: 'MCA Graduate — BPUT',
    description:
      'Master of Computer Applications from Biju Patnaik University of Technology with a strong foundation in software engineering and algorithms.',
    icon: 'GraduationCap',
  },
  {
  title: 'B.Sc. Chemistry — Utkal University',
  description:
    'Completed Bachelor of Science in Chemistry with specialization in Organic Chemistry, building strong analytical, research, and problem-solving skills.',
  icon: 'FlaskConical',
},
  {
    title: 'Full Stack Java Developer',
    description:
      'End-to-end product development from database design to polished frontends, delivering complete full-stack solutions.',
    icon: 'Code2',
  },

  {
    title: 'Spring Boot Developer',
    description:
      'Production-grade REST APIs with Spring Boot, Spring Security, Spring Data JPA, and Hibernate.',
    icon: 'Leaf',
  },
  {
    title: 'React & Next.js Developer',
    description:
      'Modern, accessible, and performant frontends with React, Next.js, and TailwindCSS.',
    icon: 'Layout',
  },
  {
  title: 'AI & Prompt Engineering',
  description:
    'Exploring AI-powered applications by integrating OpenAI APIs, prompt engineering, and modern automation techniques into real-world projects.',
  icon: 'Bot',
},
  {
  title: 'Open Source & GitHub',
  description:
    'Continuously improving through personal projects, version control best practices, and collaborative software development using Git and GitHub.',
  icon: 'Github',
},
  {
  title: 'Full Stack Project Builder',
  description:
    'Built multiple full-stack applications using Java,Python, Django, Spring Boot, React, Next.js, and modern databases with a focus on real-world problem solving.',
  icon: 'Layers3',
},
] as const;

export const SKILLS = {
  Backend: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'JWT',
    'Hibernate',
    'Spring Data JPA',
    'REST APIs',
  ],
  Frontend: ['React', 'Next.js', 'TailwindCSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  Tools: ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'Power BI', 'Excel', 'SQL'],
  Other: [
  'Python',
  'FastAPI',
  'Django',
  'OpenAI API',
  'Prompt Engineering',
  'REST Architecture',
],
} as const;

export const SKILL_ICONS: Record<string, string> = {
  Java: 'SiOpenjdk',
  'Spring Boot': 'SiSpringboot',
  'Spring Security': 'SiSpringsecurity',
  JWT: 'MdKey',
  Hibernate: 'SiHibernate',
  'Spring Data JPA': 'SiSpringboot',
  'REST APIs': 'MdApi',
  React: 'SiReact',
  'Next.js': 'SiNextdotjs',
  TailwindCSS: 'SiTailwindcss',
  JavaScript: 'SiJavascript',
  TypeScript: 'SiTypescript',
  HTML: 'SiHtml5',
  CSS: 'SiCss3',
  MySQL: 'SiMysql',
  PostgreSQL: 'SiPostgresql',
  MongoDB: 'SiMongodb',
  Redis: 'SiRedis',
  Git: 'SiGit',
  GitHub: 'SiGithub',
  Docker: 'SiDocker',
  Maven: 'SiApache',
  Postman: 'SiPostman',
  'Power BI': 'TbBrandPowerbi',
  Excel: 'TbBrandExcel',
  SQL: 'TbDatabase',
  Python: 'SiPython',
  'OpenAI API': 'SiOpenai',
  'Prompt Engineering': 'TbRobot',
};

export const EXPERIENCE = [
  {
    role: 'Software Developer Intern',
    company: 'Interland Technology',
    location: 'Kerala, India',
    period: 'June 2025 – Sept 2025',
    type: 'On-site Internship',
    points: [
      'Developed RESTful APIs using Java and Spring Boot for production microservices.',
      'Designed MySQL and PostgreSQL database schemas for multi-tenant applications.',
      'Optimized complex SQL queries, reducing response times by up to 40%.',
      'Implemented data access layers with Spring Data JPA and Hibernate.',
      'Built secure authentication flows with Spring Security and JWT tokens.',
      'Contributed within an Agile team of 6 developers using Git and GitHub.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'PostgreSQL', 'Git'],
  },
  {
    role: 'Software Engineering Job Simulation',
    company: 'Hewlett Packard Enterprise (HPE)',
    location: 'Remote',
    period: 'June 2025 – Sept 2025',
    type: 'Virtual Experience',
    points: [
      'Designed and implemented REST APIs for an Employee Management System with full CRUD operations.',
      'Built the backend with Spring Boot following layered architecture patterns.',
      'Wrote comprehensive unit tests using JUnit and Mockito for service-layer validation.',
      'Developed an employee file-upload system with validation and error handling.',
    ],
    tech: ['Spring Boot', 'REST APIs', 'JUnit', 'Mockito', 'CRUD'],
  },
] as const;

export const PROJECTS = [
  {
    name: 'Healthcare Appointment & Prescription System',
    description:
      'A full-stack healthcare platform for appointment scheduling, e-prescriptions, and patient records with role-based access for doctors, patients, and admins.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'Tailwind', 'MySQL'],
    featured: true,
    live: '#',
    github: '#',
    image: '/projects/healthcare.png',
    accent: 'from-rose-500/20 to-orange-500/20',
  },
  {
    name: 'Hive — Real-time Chat Application',
    description:
      'A real-time chat platform with WebSocket-ready architecture, JWT auth, typing indicators, and message persistence via MongoDB.',
    tech: ['React', 'Spring Boot', 'MongoDB', 'JWT', 'WebSocket'],
    featured: true,
    live: '#',
    github: '#',
    image: '/projects/chat.jpg',
    accent: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    name: 'Mini Learning Management System',
    description:
      'An LMS with course creation, student enrollment, and S3-backed media uploads, built with FastAPI and React.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'AWS S3'],
    featured: true,
    live: '#',
    github: '#',
    image: '/projects/lms.png',
    accent: 'from-sky-500/20 to-blue-500/20',
  },
  {
    name: 'Food Recipe Finder',
    description:
      'A recipe discovery app with search, filtering, and favoriting powered by a third-party food API.',
    tech: ['React', 'JavaScript', 'API'],
    featured: false,
    live: '#',
    github: '#',
    image: '/projects/recipe.png',
    accent: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Expense Tracker',
    description:
      'A personal finance tracker with an analytics dashboard, category breakdowns, and monthly insights.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'Analytics Dashboard'],
    featured: false,
    live: '#',
    github: '#',
    image: '/projects/expense.jpg',
    accent: 'from-violet-500/20 to-purple-500/20',
  },
  {
    name: 'Modern Weather App',
    description:
      'A sleek weather application with real-time data, 7-day forecasts, and location-based search.',
    tech: ['React', 'API'],
    featured: false,
    live: '#',
    github: '#',
    image: '/projects/weather.jpg',
    accent: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    name: 'Movies Finder',
    description:
      'A movie discovery app with search, ratings, trailers, and a clean, cinematic UI.',
    tech: ['React', 'Movie API'],
    featured: false,
    live: '#',
    github: '#',
    image: '/projects/Movies.png',
    accent: 'from-fuchsia-500/20 to-pink-500/20',
  },
  {
    name: 'Sales Performance Analytics Dashboard',
    description:
      'An interactive Power BI dashboard with SQL-backed data models for sales KPIs and Excel reporting.',
    tech: ['Power BI', 'SQL', 'Microsoft Excel', 'PostgreSQL'],
    featured: false,
    live: '#',
    github: '#',
    image: '/projects/sales.jpg',
    accent: 'from-indigo-500/20 to-blue-500/20',
  },
] as const;

export const ACHIEVEMENTS = [
  { label: 'Projects', value: 8, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'DSA Problems', value: 100, suffix: '+' },
  { label: 'Git Commits', value: 1000, suffix: '+' },
] as const;

export const RESUME_HIGHLIGHTS = [
  'Full Stack Java Development with Spring Boot & React',
  'REST API Design with Spring Security and JWT authentication',
  'Database design across MySQL, PostgreSQL, and MongoDB',
  '100+ DSA problems solved with strong fundamentals',
  'Agile team experience with Git & GitHub workflows',
] as const;

export type Project = (typeof PROJECTS)[number];
export type ExperienceItem = (typeof EXPERIENCE)[number];
export type AboutCard = (typeof ABOUT_CARDS)[number];
export type Achievement = (typeof ACHIEVEMENTS)[number];
