// ============================================================
// portfolioData.js — Centralized configuration for Rangappa Gari Devaraju's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Rangappa Gari Devaraju",
  firstName: "Devaraju",
  brandName: "RD",
  fullNameBrand: "Rangappa Gari Devaraju",
  title: "UI/UX Designer",
  badge: "Open for UI/UX Internship",
  location: "Lovely Professional University, Punjab, India",
  phone: "+91 6301553175",
  emails: {
    primary: "devarajkuruba18@gmail.com",
  },
  summary:
    "Crafting intuitive, user-centered digital experiences through design thinking, responsive interfaces, and a passion for visual storytelling.",
  typewriterWords: [
    "UI/UX Designer",
    "Design Thinker",
    "Frontend Craftsman",
    "Creative Problem Solver"
  ],
  resumeUrl: "/assets/docs/RangappaGariDevaraju_CV_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/Devaraju89",
  linkedin: "https://www.linkedin.com/in/devaraju18/",
  instagram: "https://github.com/Devaraju89",
  portfolioRepo: "https://github.com/Devaraju89/portfolio"
};

export const heroContent = {
  greeting: "Hi, I'm DEVARAJU",
  titleHighlight: "UI/UX Designer",
  subtitle:
    "Crafting intuitive, user-centered digital experiences through design thinking, responsive interfaces, and visual storytelling.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:devarajkuruba18@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Devaraju,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download CV", href: "/assets/docs/RangappaGariDevaraju_CV_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Rangappa Gari Devaraju</span>, a 4th-year B.Tech CSE student at Lovely Professional University and passionate UI/UX Designer dedicated to crafting clean, intuitive, and highly responsive user interfaces through modern design thinking.`,
  techStack: ["Figma", "React.js", "Tailwind CSS", "Design Thinking"],
};

export const skillsContent = {
  badge: "My Design & Dev Process",
  heading: "How I craft intuitive digital experiences",
  description:
    "I follow a structured, user-centered approach to turn complex ideas into beautiful, seamless user interfaces.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Empathizing with users, analyzing requirements, building user personas, and defining information architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting wireframes, interactive prototypes, and pixel-perfect UI systems in Figma with modern UX patterns.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building responsive layouts and interactive components using React.js, Tailwind CSS, HTML5, and JavaScript.",
    },
    {
      number: "04",
      title: "Ship & Iterate",
      text: "Usability testing, refining micro-animations, performance optimization, and continuous deployment.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "UX & Research",
      skills: [
        { name: "User Research & Analysis", level: 90 },
        { name: "Design Thinking", level: 92 },
        { name: "Information Architecture", level: 88 },
        { name: "User Flows & Wireframing", level: 95 },
        { name: "Usability Testing", level: 85 }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Wireframing & Prototyping", level: 92 },
        { name: "UI Mockups & Design Systems", level: 90 },
        { name: "Canva", level: 88 }
      ]
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Responsive Web Design", level: 92 },
        { name: "Blade Templates", level: 80 }
      ]
    },
    {
      title: "Development & Ops",
      skills: [
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "Node.js & Express", level: 78 },
        { name: "MongoDB & MySQL", level: 80 },
        { name: "Git & GitHub", level: 88 },
        { name: "Vercel & Render", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C & C++", level: 85 },
        { name: "Data Structures & Algorithms", level: 82 },
        { name: "PHP & Laravel", level: 78 }
      ]
    },
    {
      title: "Core CS Concepts",
      skills: [
        { name: "Object Oriented Programming", level: 88 },
        { name: "Competitive Programming", level: 80 },
        { name: "Database Management (DBMS)", level: 82 },
        { name: "Computer Communications", level: 85 }
      ]
    }
  ]
};

// Brand New Design & Content Creation Data
export const contentCreation = {
  badge: "Visual & UX Craft",
  heading: "UI/UX Design Systems & Creative Concepts",
  description: "Blending user empathy with modern aesthetics, interactive prototypes, and visual storytelling.",
  categories: [
    {
      title: "E-Commerce & Marketplaces",
      description: "User journeys, checkout flows, and product discovery interfaces for platforms like OneKart.",
      stats: "Interactive Mockups",
      icon: "🛒"
    },
    {
      title: "Conversational UI & Healthcare",
      description: "Calming interfaces, mood-tracking visualizations, and accessible UX for AI assistants.",
      stats: "Accessible UX",
      icon: "🧠"
    },
    {
      title: "Travel & Booking Platforms",
      description: "Seamless itinerary planners and automated booking flows designed for cross-device responsiveness.",
      stats: "Cross-Device Flow",
      icon: "✈️"
    },
    {
      title: "EdTech & Interactive Apps",
      description: "Quiz interfaces, custom theme systems, and engaging micro-animations for smart learning.",
      stats: "Micro-UX & Animations",
      icon: "🎓"
    }
  ]
};

// Leadership & Achievements Data
export const leadershipList = [
  {
    title: "CODE OFF DUTY — Web Hackathon",
    description: "Round 2 Qualifier — Spearheaded development of a functional web prototype, integrating 5 unique features under strict competition constraints and tight deadlines.",
    role: "Round 2 Qualifier · March 2025",
    badge: "Hackathon"
  },
  {
    title: "Competitive Programming",
    description: "Solved 100+ Data Structures and Algorithms problems on various platforms focusing on arrays, linked lists, stacks, queues, and dynamic programming.",
    role: "100+ Problems Solved · March 2026",
    badge: "Achievement"
  }
];

// Internships / Training Data
export const internshipsList = [
  {
    organization: "Cognifyz Technologies",
    role: "Full Stack Developer Intern",
    duration: "1 Month",
    skills: [
      "Full Stack Web Development & UI/UX Architecture",
      "Collaborative Project Planning & Implementation",
      "Frontend & Backend Integration with REST APIs",
      "Responsive UI Design & Modern Web Workflows"
    ],
    tech: ["React.js", "Node.js", "Express", "HTML5/CSS3", "JavaScript", "REST APIs"]
  },
  {
    organization: "Board Infinity",
    role: "Data Structures & Algorithms Trainee",
    duration: "July 2025",
    skills: [
      "Core Data Structures & Algorithms in C++",
      "Arrays, Linked-Lists, Stacks, Queues, Trees",
      "Sorting Techniques & Clean Modular Code"
    ],
    tech: ["C++", "DSA", "Problem Solving", "Clean Code"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex user and technical problems into clean, modular solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly in multi-disciplinary teams under hackathon deadlines." },
  { name: "Design Thinking", icon: "💡", desc: "Empathizing with users to build intuitive, accessible visual interfaces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, design tools, and frontend stacks." },
  { name: "Resilience", icon: "⚡", desc: "Overcoming technical obstacles with persistence and attention to detail." },
  { name: "Effective Communication", icon: "💬", desc: "Translating user requirements into clear design decisions and code." },
  { name: "Visual Storytelling", icon: "🎨", desc: "Utilizing colors, typography, and visual hierarchy to guide user actions." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies with design projects and hackathon builds." }
];

export const projects = [
  {
    id: "onekart",
    number: "01",
    badge: "⭐ FEATURED · Oct 2025",
    title: "OneKart – Organic Marketplace",
    description:
      "Designed and built an end-to-end Organic marketplace connecting consumers directly with source farmers. Implemented seamlessly responsive, interactive frontend layouts prioritizing modern UI/UX design patterns to maximize visual fidelity and overall client retention.",
    techTags: ["MongoDB", "Express", "React", "Node.js", "REST APIs", "Tailwind CSS"],
    image: "/assets/img/onekart.png",
    links: {
      github: "https://github.com/Devaraju89",
      demo: "https://onekart-devaraju.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "pet-adoption",
    number: "02",
    badge: "2024",
    title: "Pet Adoption Platform",
    description:
      "Designed a user-friendly adoption platform with intuitive workflows for pet discovery, adoption tracking, and donation management. Created empathetic UI with clear visual hierarchy and structured user journeys.",
    techTags: ["MongoDB", "Express", "React", "Node.js", "User Journey", "Visual Hierarchy"],
    image: "/assets/img/image copy 3.png",
    links: {
      github: "https://github.com/Devaraju89",
      demo: "https://pet-adoption-platform-zeta.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "ai-travel",
    number: "03",
    badge: "May 2025",
    title: "TravelMate – AI Travel Management Platform",
    description:
      "Architected a comprehensive travel platform connecting tourists with verified local guides. Designed clean, highly responsive user interfaces using Blade templates and CSS — ensuring smooth navigation and an intuitive browsing experience across all devices with a seamless automated booking experience.",
    techTags: [
      "Laravel (PHP)",
      "MongoDB",
      "JavaScript (ES6+)",
      "Blade Templating",
      "REST APIs",
      "Responsive UI"
    ],
    image: "/assets/img/travelmate.png",
    links: {
      github: "https://github.com/Devaraju89/travelmate-ai",
      demo: "https://travelmate-ai-production-a071.up.railway.app/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025 AI Foundations",
      issuer: "ORACLE · Mar 2026",
      icon: "☁️",
      pdf: "/assets/docs/cert_nptel.pdf",
    },
    {
      name: "Responsive Web Design Certification",
      issuer: "FreeCodeCamp · Oct 2023",
      icon: "💻",
      pdf: "/assets/docs/cert_freecodecamp.pdf",
    },
    {
      name: "Computational Theory: Principle & Automata",
      issuer: "INFOSYS · Aug 2025",
      icon: "🧠",
      pdf: "/assets/docs/cert_infosys.pdf",
    },
    {
      name: "Object Oriented Programming (LPU-NEOCOLAB)",
      issuer: "Certified · Dec 2024",
      icon: "☕",
      pdf: "https://drive.google.com/file/d/1sOBIoOX0r2MAvt0iQSeQNEEQgyhB5KU_/view?usp=sharing",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL · Apr 2025",
      icon: "🌐",
      pdf: "/assets/docs/cert_nptel.pdf",
    },
    {
      name: "Computer Communications (4-Course Spec.)",
      issuer: "Coursera",
      icon: "📡",
      pdf: "/assets/docs/cert_coursera_comm.pdf",
    },
    {
      name: "Java Development",
      issuer: "Oracle · 2024",
      icon: "⚙️",
      pdf: "/assets/docs/cert_java.pdf",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Algo-Uni · 2024",
      icon: "⚡",
      pdf: "/assets/docs/cert_algovuni.pdf",
    },
    {
      name: "ChatGPT-4 Prompt Engineering",
      issuer: "AI Training",
      icon: "🤖",
      pdf: "/assets/docs/cert_chatgpt.pdf",
    },
    {
      name: "Network Comm. Fundamentals",
      issuer: "Coursera",
      icon: "🔌",
      pdf: "/assets/docs/cert_network.pdf",
    },
    {
      name: "Summer Training Completion",
      issuer: "Industry Training · 2024",
      icon: "📜",
      pdf: "/assets/docs/cert_summer.pdf",
    },
  ],
  viewAllUrl: "https://drive.google.com/file/d/16wp79DF-IcH5GykyokuTa3zTCu2UiPNZ/view?usp=drive_link",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Lovely Professional University (Punjab, India)",
  cgpa: "7.31",
  graduation: "Present (2023 – 2027)",
  twelfth: "Intermediate (Swami Vivekananda Junior College) – 94.7%",
  tenth: "Matriculation (Z.P.H.S Yerragunta) – 96.6%",
};

export const footerContent = {
  taglines: [
    "UI/UX Designer & Frontend Craftsman",
    "User-Centered Interfaces · React · Figma",
    "Crafting Intuitive Digital Experiences",
  ],
  credential: "B.Tech CSE · CGPA 7.31",
  copyright: `© ${new Date().getFullYear()} Rangappa Gari Devaraju | Built with React`,
};

// FormSubmit Configuration
export const contactFormEndpoint = "https://formsubmit.co/devarajkuruba18@gmail.com";

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
