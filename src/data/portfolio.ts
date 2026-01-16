// src/data/portfolio.ts

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
}

export interface Project {
  name: string;
  institution: string;
  duration: string;
  description: string;
  image: string;
}

export interface FeaturedProject {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  role: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  summary: string;
  preamble: Record<string, string>[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  featuredProjects: FeaturedProject[];
  interests: string[];
  social: Record<string, string>;
}

export const portfolioData: PortfolioData = {
  name: "IGWECHIMA JOEL CHISOM",
  title: "Web Developer & Library & Information Scientist",
  location: "Nibo, Awka South, Anambra State",
  phone: "08131311159",
  email: "joelchisom@gmail.com",
  website: "AsRealTech.com.ng",
  
  summary: "I'm a passionate Web Developer and trained Library & Information Scientist with hands-on experience in creating responsive websites, managing digital resources, and helping users access relevant information. My core strengths lie in combining technology and information science to solve real-world problems. I've built websites for small businesses, supported research and reference services in academic libraries, and completed user-focused digital projects.",
  
 preamble: [
    {
      professional:
        "Software Engineer specializing in API development, system integration, database performance optimization, and scalable system architecture. Delivering secure, high-performance software solutions that drive measurable business value.",

      concise:
        "Software Engineer | APIs, integrations, database optimization & scalable system design | Secure, high-performance systems",

      impactFocused:
        "Results-driven Software Engineer with expertise in API development, system integrations, database performance optimization, and scalable architecture. Building secure, high-performance systems that enable business growth.",

      techForward:
        "Software Engineer building secure, high-performance APIs, optimized databases, and scalable system architectures for modern, data-driven businesses."
    }
  ],


  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["PHP", "Node.js", "Express.js", "Python", "C"]
    },
    {
      category: "Database",
      items: ["MySQL", "SQL"]
    },
    {
      category: "Specializations",
      items: ["Web Development & Maintenance", "Digital Resource Management", "Library Software Tools", "Information Literacy", "Networking (Cisco Certified)", "IT Support", "Technical Support"]
    }
  ],

  experience: [
    {
      position: "Web Developer",
      company: "AsRealTech",
      duration: "February 2021 - November 2023",
      responsibilities: [
        "Designed and developed responsive websites based on client requirements",
        "Utilized PHP, JavaScript, MySQL, and other technologies to build dynamic web applications",
        "Provided ongoing technical support and training for clients"
      ]
    },
    {
      position: "Library Assistant",
      company: "Abia State Polytechnic Library, Aba",
      duration: "February 2017 - June 2017",
      responsibilities: [
        "Assisted library users with reference inquiries and research support",
        "Conducted information literacy workshops and orientations",
        "Processed new acquisitions and maintained inventory records"
      ]
    }
  ],

  education: [
    {
      degree: "HND, Library and Information Science",
      institution: "Federal Polytechnic, Oko, Anambra State",
      duration: "2018 - 2020",
      cgpa: "3.37"
    },
    {
      degree: "OND, Library and Information Science",
      institution: "Akanu Ibiam Federal Polytechnic, Unwana",
      duration: "2015 - 2016",
      cgpa: "3.03"
    },
    {
      degree: "WAEC",
      institution: "St. Joseph Comprehensive Secondary School, Aba",
      duration: "2010 - 2013"
    },
    {
      degree: "Cisco Certified",
      institution: "Cisco Networking Academy (via Federal Polytechnic Oko)",
      duration: "2020"
    }
  ],

  projects: [
    {
      name: "User Education Project",
      institution: "Federal Polytechnic Oko",
      duration: "June 2020 - July 2020",
      description: "Studied the impact of user education on utilization of electronic resources by students.",
      image: "easelaw.png"
    },
    {
      name: "Library Extension Service",
      institution: "Ebonyi State Library Board, Abakaliki",
      duration: "October 2016 - November 2016",
      description: "Conducted assessment of extension services and proposed improvements.",
       image: "easelaw.png"
    },
    {
      name: "Library Extension Services",
      institution: "Ebonyi State Library Board, Abakaliki",
      duration: "October 2016 - November 2016",
      description: "Conducted assessment of extension services and proposed improvements.",
       image: "easelaw.png"
    }
  ],

  featuredProjects: [
    {
      id: 1,
      title: "Small Business Website - AsRealTech",
      category: "Web Development",
      description: "Responsive website for a tech solutions company. Features dynamic content management, SEO optimization, and mobile-first design.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      highlights: [
        "Responsive design across all devices",
        "Dynamic content management system",
        "Client dashboard for managing services",
        "Integration with email services"
      ],
      role: "Full-stack Developer",
      link: "https://AsRealTech.com.ng"
    },
    {
      id: 2,
      title: "Digital Library Management System",
      category: "Library Systems",
      description: "Comprehensive digital resource management platform for academic libraries. Streamlines cataloging, user access, and information retrieval.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      highlights: [
        "User authentication and access control",
        "Advanced search and filtering system",
        "Digital resource cataloging",
        "User education module"
      ],
      role: "Lead Developer",
      link: "#"
    },
    {
      id: 3,
      title: "Library Reference Portal",
      category: "Information Systems",
      description: "Online platform for library reference services and user guidance. Provides centralized access to resources and support.",
      technologies: ["JavaScript", "PHP", "MySQL", "CSS"],
      highlights: [
        "24/7 user support interface",
        "Resource recommendation system",
        "Research guide database",
        "FAQ and knowledge base"
      ],
      role: "Developer",
      link: "#"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution for online business. Includes product management, shopping cart, and secure payment integration.",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
      highlights: [
        "Product catalog with advanced filtering",
        "Shopping cart functionality",
        "User account management",
        "Order tracking system"
      ],
      role: "Full-stack Developer",
      link: "#"
    }
  ],

  interests: [
    "Founder & Web Designer at AsRealTech",
    "Football enthusiast",
    "Organizing social and community activities",
    "Continuous learning in tech and library sciences"
  ],

  social: {
    email: "joelchisom@gmail.com",
    phone: "08070447902",
    website: "https://wa.me/2349047439441",
    facebook: "https://facebook.com/2349047439441",
    linkedlin: "https://linkedlin.com",
    x: "https://x.com",
    github: "https://github.com"
  }
};
