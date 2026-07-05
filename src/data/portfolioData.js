// ============================================================
// portfolioData.js — Centralized configuration for Huzaifa's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Huzaifa",
  firstName: "Mohamed Huzaifa S",
  brandName: "Md Huzaif",
  title: "Software Developer & AI Enthusiast",
  location: "Hosur, Tamil Nadu, India",
  phone: "+91 8807698945",
  emails: {
    primary: "shuzaifasamee@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated MCA student and Software Developer with hands-on experience in AI-based systems, backend development, web applications, and API integration. Skilled in Python, Java, Flask, OpenCV, YOLO, MySQL, and Oracle SQL, with practical experience building intelligent applications, real-time computer vision systems, security-focused AI solutions, and backend services.",
  resumeUrl: "/Huzaifa_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/shuzaifa23",
  linkedin: "https://www.linkedin.com/in/contact-mohamed-huzaifa-s-",
  instagram: "https://www.instagram.com/s.huzaifa2?igsh=cGEyb3JjZmVyNWV3",
  whatsapp: "https://wa.me/918807698945?text=Hello%20Huzaifa%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20a%20professional%20opportunity%2E",
  email: "shuzaifasamee@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Mohamed Huzaifa S",
  titleHighlight: "Software Developer & AI Enthusiast",
  subtitle:
    "Building intelligent computer vision systems, robust backend APIs, and scalable AI-powered software solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shuzaifasamee@gmail.com?subject=Inquiry – Portfolio&body=Hello Huzaifa,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Huzaifa_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Huzaifa</span>, a Software Developer, AI Enthusiast, and MCA student based in Hosur, Tamil Nadu, specializing in backend engineering, API integration, and real-time computer vision applications.`,
  techStack: ["Python", "Java", "Flask", "OpenCV", "MySQL"],
};

// Process Data (Software Dev & AI Integration Workflow)
export const skillsContent = {
  badge: "My Process",
  heading: "Crafting Intelligent Software & Backend Systems",
  description: "",
  cards: [
    {
      number: "01",
      title: "Understand & Define",
      text: "I follow a structured, engineering-first pipeline to analyze requirements, construct secure databases, and deploy AI-integrated web applications."
    },
    {
      number: "02",
      title: "Design System & Data Flow",
      text: "Structuring relational databases in MySQL/Oracle SQL, mapping API endpoints, and preparing data inputs for AI models."
    },
    {
      number: "03",
      title: "Build Backend & APIs",
      text: "Developing highly reliable server-side backend logic and API services utilizing Flask and Python framework components."
    },
    {
      number: "04",
      title: "Integrate AI / Computer Vision",
      text: "Integrating real-time object detection models (YOLO) and computer vision stream processors (OpenCV) into backend flows."
    },
    {
      number: "05",
      title: "Test, Optimize & Deploy",
      text: "Debugging APIs, writing validation tests to ensure code security, and compiling optimized builds for cloud hosting."
    }
  ],
  endText: "Ready to deploy!"
};

// Technical Skills (No percentage bars)
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "HTML5", "CSS3"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "LSTM", "Ensemble Learning", "Static Security Analysis"]
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV", "YOLO", "Object Detection", "Real-Time Video Analysis"]
    },
    {
      title: "Backend Development",
      skills: ["Flask", "Server-Side Logic", "REST APIs", "API Integration", "Software Testing & Debugging"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "Oracle SQL", "GitHub", "VS Code", "Git"]
    },
    {
      title: "DevOps & Deployment",
      skills: ["Basic DevOps Concepts", "Software Deployment", "Vercel Cloud Hosting"]
    }
  ]
};

// Projects Data (Omit misleading View Code buttons, show View GitHub Profile instead)
export const projects = [
  {
    id: "aetherscan-vulnerability-detection",
    number: "01",
    badge: "🛡️ AI & Deep Learning Flagship",
    title: "AI-Based Code Vulnerability Detection (AetherScan)",
    description:
      "Developed an AI-powered system to detect software vulnerabilities through static code analysis. Applied machine learning (SGD Classifier) and deep learning (LSTM) models using TF-IDF feature representations, and designed an ensemble-based architecture to reduce false positives and present severity risk scores.",
    techTags: ["Python", "Machine Learning", "Deep Learning", "LSTM", "Static Analysis", "Ensemble Learning"],
    links: {
      github: null,
      githubProfile: "https://github.com/shuzaifa23",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "accident-detection-alert",
    number: "02",
    badge: "🚗 Computer Vision & Web API",
    title: "AI-Based Accident Detection and Alert System",
    description:
      "Developed a real-time accident detection system using YOLO and OpenCV. Built a Flask web application that analyzes live or recorded video streams and automatically sends instant alert notifications to stakeholders via Telegram API integration.",
    techTags: ["Computer Vision", "YOLO", "OpenCV", "Flask", "API Integration", "Real-Time Detection"],
    links: {
      github: null,
      githubProfile: "https://github.com/shuzaifa23",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "women-safety-sos",
    number: "03",
    badge: "🐍 Python Development",
    title: "Terminal-Based SOS Women Safety System",
    description:
      "Built a terminal-based SOS alert system using Python that runs offline without any internet connection. The system automates logging of critical time and location coordinates for emergency response safety workflows.",
    techTags: ["Python", "Safety Technology", "SOS Systems", "Offline Applications", "Automated Logging"],
    links: {
      github: null,
      githubProfile: "https://github.com/shuzaifa23",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data (Resume-only fallback integration)
export const certificates = {
  featured: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      link: null, // Indicates no physical file exists (listed on resume fallback)
      verifyLink: null,
      desc: "Certification validating core understanding of foundational machine learning, computer vision, natural language processing, and artificial intelligence workloads on Microsoft Azure cloud services."
    },
    {
      name: "Code to Cloud: DevOps and Deployment Bootcamp",
      issuer: "MeVi Technologies",
      icon: "🚢",
      link: null,
      verifyLink: null,
      desc: "Comprehensive technical bootcamp covering concepts of DevOps pipelines, continuous integration, containerization, and modern application deployment workflows."
    },
    {
      name: "Build Your Portfolio Website with AngularJS",
      issuer: "Coursera Project Network",
      icon: "⚛️",
      link: null,
      verifyLink: null,
      desc: "Guided project credential validating hands-on application of AngularJS directives, controller configurations, and interactive developer portfolio structure."
    },
  ]
};

// Education Data
export const educationList = [
  {
    institution: "Reva University",
    degree: "Master of Computer Applications (MCA)",
    duration: "2024 – 2026",
    location: "Bangalore, Karnataka",
    gpa: "Affiliation: REVA NEST Incubated Developer"
  },
  {
    institution: "Vidya Mandir College",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2021 – 2024",
    location: "Hosur, Tamil Nadu",
    gpa: "Degree Completed"
  }
];

// Experience Data
export const experienceList = [
  {
    organization: "MIMO",
    role: "Backend Developer & API Integration Intern",
    duration: "6 Months",
    location: "Remote / Office",
    responsibilities: [
      "Designed and implemented backend application logic and APIs to support application features.",
      "Performed REST API integration for seamless, reliable communication between microservices.",
      "Assisted in database operations, relational table queries, and server-side deployment tasks.",
      "Debugged and tested backend system components to resolve runtime issues and improve application stability.",
      "Gained hands-on experience in production backend workflows, service integration, and backend testing."
    ],
    tech: ["Flask", "Python", "API Integration", "MySQL", "Backend Testing", "Debugging"]
  }
];

export const footerContent = {
  taglines: [
    "Backend Developer & API Integration",
    "Computer Vision & AI Enthusiast",
    "Python, Java & Flask Backend Engineering",
  ],
  credential: "MCA Candidate · Reva University",
  copyright: `Software Designed & Developed by Huzaifa © ${new Date().getFullYear()} Built with React .`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
