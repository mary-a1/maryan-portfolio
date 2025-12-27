import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maryan Ali",
  initials: "MA",
  url: "https://dillion.io",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Digital Strategist • Product Analyst • UX Enthusiast • IT Technical Product Manager • Business System Analyst • Growth PM • UX Enthusiast",
  summary:
    "I'm a Product Analyst with experience supporting digital banking products across Simplii Financial, Tangerine, and Scotiabank. My work focuses on translating business and user needs into clear product requirements, validating solutions through usability testing and data, and partnering closely with design and engineering teams to ship reliable customer-facing features in regulated environments.",
  avatarUrl: "/me.png",
  skills: [
    // Product / Business (used temporarily by page.tsx)
    "Product Strategy",
    "Requirements Definition (PRDs)",
    "Roadmapping & Prioritization",
    "UX Research",
    "Usability Testing",
    "Product Analytics & KPIs",
    "Comparative Analysis & Trade-offs",
    "Experimentation & A/B Testing",
    "Stakeholder Collaboration",
    "Agile / Scrum",
    "QA, UAT & Release Validation",
    "Risk & Compliance Awareness",

    // Technical
    "TypeScript",
    "Jira",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "PostgreSQL",
    "Git",
    "Tailwind CSS",
    "Confluence",
  ],
  productSkills: [
    "Product Strategy",
    "Requirements Definition (PRDs)",
    "Roadmapping & Prioritization",
    "UX Research",
    "Usability Testing",
    "Product Analytics & KPIs",
    "Comparative Analysis & Trade-offs",
    "Experimentation & A/B Testing",
    "Stakeholder Collaboration",
    "Agile / Scrum",
    "QA, UAT & Release Validation",
    "Risk & Compliance Awareness",
  ],
  technicalSkills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "PostgreSQL",
    "Git",
    "Tailwind CSS",
  ],
  technicalSkillLogos: [
    { name: "TypeScript", icon: "/logos/typescript.svg" },
    { name: "Jira", icon: "/logos/jira.svg" },
    { name: "JavaScript", icon: "/logos/javascript.svg" },
    { name: "React", icon: "/logos/react.svg" },
    { name: "Next.js", icon: "/logos/nextjs.svg" },
    { name: "Node.js", icon: "/logos/nodejs.svg" },
    { name: "SQL", icon: "/logos/sql.svg" },
    { name: "PostgreSQL", icon: "/logos/postgres.svg" },
    { name: "Git", icon: "/logos/git.svg" },
    { name: "Tailwind CSS", icon: "/logos/tailwind.svg" },
    { name: "Confluence", icon: "/logos/confluence.svg" },
  ],


  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "maryanay2000@gmail.com",
    tel: "+1 647-760-8381",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mary-a1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maryan-ali-web-dev",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:maryanay2000@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      ADS: {
        name: "Amina Designs Co",
        url: "https://aminadesignstudio.ca",
        icon: Icons.globe,
        navbar: true,
      },

    },
  },

  work: [
    {
      company: "Simplii Financial",
      href: "https://www.simplii.com",
      location: "Toronto, ON",
      title: "Product Analyst Intern",
      logoUrl: "/simplii.png",
      start: "May 2025",
      end: "Dec 2025",
      description:
        "Acted as product owner for Simplii's chatbot, writing PRDs and translating business needs into product specifications. Led end-to-end QA, regression, and pilot testing to support smooth releases with minimal defects. Analyzed chatbot KPIs, customer feedback, and user flows to inform roadmap prioritization and feature decisions. Partnered closely with PMs, UX, and engineering to scope and test new mobile banking features.",
    },
    {
      company: "Tangerine",
      href: "https://www.tangerine.ca",
      location: "Toronto, ON",
      title: "Digital Product Experience Intern",
      logoUrl: "/tangerine.jpeg",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Supported digital product initiatives within a regulated banking environment. Collaborated with product, design, and engineering teams on testing, documentation, and customer experience validation for mobile banking features.",
    },
    {
      company: "Scotiabank",
      href: "https://www.scotiabank.com",
      location: "Toronto, ON",
      title: "Digital Product Manager Intern",
      logoUrl: "/scotiabank.png",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Delivered a Bill 64 compliance initiative end-to-end, meeting regulatory deadlines with zero audit issues. Led a Profile Settings redesign, improving CTA clarity and reducing onboarding drop-offs by approximately 12% in usability testing.",
    },
    {
      company: "Scotiabank",
      href: "https://www.scotiabank.com",
      location: "Toronto, ON",
      title: "Application Security Engineer Intern",
      logoUrl: "/scotiabank.png",
      start: "Sept 2023",
      end: "Dec 2023",
      description:
        "Built a no/low-code proof of concept integrating AppSec tools into reporting dashboards. Supported incident response, Jira ticketing, and documentation across UAT and production environments within Cloud Security operations.",
    },
  ],
  education: [
    {
      school: "York University",
      href: "https://www.yorku.ca",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/york.png",
      start: "2020",
      end: "June 2025",
    },
    {
      school: "Lighthouse Labs",
      href: "https://www.lighthouselabs.ca",
      degree: "Diploma in Full Stack Web Development",
      logoUrl: "/lighthouse.png",
      start: "2022",
      end: "March 2023",
    },
  ],
  projects: [
    {
      title: "Amal Transfers",
      href: "https://amaltransfers.ca",
      dates: "2024 - Present",
      active: true,
      description:
        "A fintech money transfer platform designed and deployed with a focus on usability, trust, and regulatory constraints. Led product decisions through comparative analysis of user flows, pricing logic, and technical trade-offs.",
      technologies: [
        "Product Strategy",
        "UX",
        "Fintech",
        "Comparative Analysis",
        "Next.js",
        "Node.js",
      ],
      links: [
        {
          type: "Case Study",
          href: "/blog/amal-transfers",
          icon: <NotebookIcon className="size-3" />,
        },
        {
          type: "Website",
          href: "https://amaltransfers.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PharmAli",
      href: "https://github.com/IrhaAli/PharmAli",
      dates: "2023",
      active: false,
      description:
        "A healthcare-focused product concept exploring medication management and accessibility. Led problem framing, UX decisions, and feature prioritization, supported by a full-stack implementation.",
      technologies: [
        "Product Thinking",
        "UX Research",
        "Healthcare",
        "React",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/IrhaAli/PharmAli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Scheduler",
      href: "https://github.com/mary-a1/scheduler",
      dates: "2023",
      active: false,
      description:
        "A scheduling application built to handle real-world constraints such as availability, conflicts, and state management. Focused on clean data modeling and predictable system behavior.",
      technologies: [
        "System Design",
        "Data Modeling",
        "APIs",
        "JavaScript",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mary-a1/scheduler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Quiz App",
      href: "https://github.com/mary-a1/Quiz-App",
      dates: "2022",
      active: false,
      description:
        "An interactive quiz application built to strengthen fundamentals in state management, user interaction, and component-based UI design.",
      technologies: [
        "JavaScript",
        "React",
        "UI Logic",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mary-a1/Quiz-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  
} as const;
