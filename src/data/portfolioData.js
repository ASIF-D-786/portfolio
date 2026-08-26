// ============================================================
// Central content file — edit everything about the portfolio here.
// Components read from this file, so you rarely need to touch JSX
// just to update text, links, or numbers.
// ============================================================

export const profile = {
  name: 'DUDEKULA ASIF BABA',
  degree: 'Computer Science Engineering (Artificial Intelligence)',
  roles: ['AI Engineer', 'Software Developer', 'Full Stack Developer'],
  tagline:
    'I build intelligent systems and full-stack products — from computer vision pipelines to production-ready web apps.',
  location: 'Hyderabad, India',
  email: 'asifbabadudekula@gmail.com',
  mobile: '+91 8143145985',
  resumeUrl: 'https://drive.google.com/file/d/1kCvODkQOmvznbE7dm4N7MBaA3LT84o1i/view?usp=drive_link',
  social: {
    github: 'https://github.com/ASIF-D-786',
    linkedin: 'https://www.linkedin.com/in/asif-baba-d/',
    leetcode: 'https://leetcode.com/ASIF-D-786',
  },
}

export const aboutStats = [
  { label: 'Projects Completed', value: 4, suffix: '' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Certifications', value: 1, suffix: '' },
  { label: 'LeetCode Problems', value: 120, suffix: '' },
]

export const aboutParagraphs = [
  "I'm an Artificial Intelligence engineering student who builds at the intersection of machine learning and full-stack software — training models that see and reason, then shipping them inside real, usable products.",
  'My day-to-day spans computer vision pipelines, deep learning experiments, and production web applications built with Spring Boot and React. I care about the full path from research notebook to deployed system, not just the model in isolation.',
  "I'm an active open-source contributor and a regular on LeetCode, where I sharpen the algorithmic thinking that underlies both clean software architecture and efficient ML systems. I'm currently looking for opportunities where I can apply AI to problems that matter at scale.",
]

export const skillCategories = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Spring Boot', 'Node.js', 'Express'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'AI / ML',
    icon: 'cpu',
    skills: ['OpenCV', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    title: 'Tools',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
  },
]

export const projects = [
  {
    id: 'logicortex-ai',
    title: 'LOGICORTEX AI — Global Logistics & Supply Chain Platform',
    description:
      'An AI-powered logistics resilience and execution platform that transforms traditional supply-chain operations into predictive, adaptive, and continuously learning networks. Features the LOGICORTEX ACO engine for critical-path scheduling, real-time disruption recovery, what-if analysis, and performance benchmarking across Admin, Supplier, and Driver interfaces.',
    tech: ['AI', 'Supply Chain', 'Scheduling Optimization', 'React', 'Spring Boot', 'Python'],
    github: 'https://github.com/ASIF-D-786/LOGICORTEX-AI-GLOBAL-LOGISTICS-SUPPLY-CHAIN-ENVIRONMENT',
    demo: '',
    image: null,
    featured: true,
  },
  {
    id: 'skillforge-ai',
    title: 'SkillForge AI',
    description:
      'AI-powered learning platform delivering personalized course recommendations and an in-app AI assistant, built on a full-stack architecture with secure authentication.',
    tech: ['React', 'Spring Boot', 'MongoDB', 'OpenAI API', 'JWT'],
    github: 'https://github.com/ASIF-D-786/Skill-Forge',
    demo: '',
    image: null,
    featured: true,
  },
  {
    id: 'smart-travel-assistance',
    title: 'Smart Travel Assistance',
    description:
      'Smart travel planning platform for itinerary management, trip budgeting, and destination recommendations, wrapped in a fully responsive interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/ASIF-D-786/Smart-Travel-Assistance',
    demo: '',
    image: null,
    featured: true,
  },
  {
    id: 'criminal-face-detection',
    title: 'Criminal Face Detection and Missing Person Identification System',
    description:
      'An AI-powered web application that detects criminals and identifies missing persons using facial recognition. The system allows authorized officers to upload images or videos, detect faces, compare them against stored criminal and missing person records, and securely manage investigations through role-based authentication.',
    tech: ['Spring Boot', 'React', 'Python', 'OpenCV', 'JWT', 'MySQL'],
    github: 'https://github.com/ASIF-D-786/Criminal-Face-Detection',
    demo: '',
    image: null,
    featured: true,
  },
]

export const experience = [
  {
    company: 'Deccan AI Experts',
    role: 'AI Contributor',
    period: '2026 — Present',
    points: [
      'Worked on AI and machine learning projects.',
      'Assisted in data processing and AI model-related tasks.',
      'Collaborated on software development and AI solutions.',
      'Participated in research, testing, and implementation of AI-based applications.',
    ],
    tech: ['Python', 'Machine Learning', 'Artificial Intelligence', 'Git', 'GitHub']
  }
]

export const education = [
  {
    degree: 'B.Tech, Computer Science Engineering (Artificial Intelligence)',
    institution: 'Parul University',
    period: 'Expected Graduation: 2027',
    details: 'Coursework focused on machine learning, deep learning, data structures & algorithms, and full-stack software engineering.',
  },
  {
    degree: 'Class XII (Intermediate, MPC)',
    institution: 'Vijayawada Nalanda Junior College',
    period: 'Year of Passing: 2023',
    details: 'Board: Intermediate (MPC) | Percentage: 92.7%',
  },
  {
    degree: 'Class X (SSC)',
    institution: 'S P S M High School',
    period: 'Year of Passing: 2021',
    details: 'Board: SSC | Percentage: 89%',
  },
]

export const certifications = [
  {
    title: 'NPTEL — Computer Networking',
    issuer: 'NPTEL (IIT)',
    year: '2025',
  },
]

export const achievements = [
  { label: 'LeetCode Problems Solved', value: 120, suffix: '' },
  { label: 'Projects Completed', value: 4, suffix: '' },
  { label: 'Hackathons Participated', value: 4, suffix: '' },
  { label: 'GitHub Repositories', value: 5, suffix: '' },
]

export const githubUsername = 'ASIF-D-786'
export const leetcodeUsername = 'ASIF-D-786'
