import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maryan Ali",
  initials: "MA",
  url: "https://dillion.io",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Technical Product Manager • Platform & Systems • Customer-Facing Products",
  summary:
    "Technical Product Manager delivering customer-facing platforms in regulated environments. Specializes in product requirements definition, success metrics, and close collaboration with design and engineering to ship reliable, scalable features.",
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
    "JavaScript",
    "TypeScript",
    "SQL",
    "PostgreSQL",
    "Node.js",
    "Next.js",
    "React",
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
  technical: {
    languages: ["TypeScript", "JavaScript", "SQL", "PostgreSQL"],
    frameworks: ["React", "Next.js", "Node.js"],
    tools: ["Jira", "Confluence", "Git", "Tailwind CSS"],

  },

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
        "Owned product requirements for Simplii's customer-facing chatbot, defining PRDs and partnering with engineering to deliver reliable feature updates. Led QA, regression, and pilot testing to support stable releases. Analyzed KPIs, user flows, and feedback to inform prioritization and roadmap decisions across mobile banking features."
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
        "Supported digital product initiatives within a regulated banking environment. Partnered with Product Managers, UX, and engineering on requirements refinement, testing, and usability validation for mobile banking features. Synthesized user feedback and adoption insights to support roadmap decisions.",
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
        "Led cross-functional delivery of a regulated platform initiative, meeting compliance requirements with zero audit issues. Owned feature delivery for a Profile Settings redesign, improving CTA clarity and reducing onboarding drop-offs by ~12% in usability testing.",
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
        "Built a no/low-code proof of concept integrating AppSec tools into reporting dashboards, improving visibility into system health and operational risk. Supported incident response, Jira workflows, and documentation across UAT and production for cloud security services.",
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
      title: "Maalin Activewear",
      href: "https://maalinactive.com",
      dates: "2025 - Present",
      active: true,
      description:
        "Built a modest activewear brand as a live product environment to test demand, reduce friction, and improve customer decision confidence across content, product discovery, and conversion.",
      technologies: [
        "Product Strategy",
        "E-Commerce",
        "UX",
        "Fintech",
        "Metric Conversion",
        "Shopify",
        "Brand Systems",
      ],
      links: [
        {
          type: "Case Study",
          href: "/blog/maalin-active",
          icon: <NotebookIcon className="size-3" />,
        },
        {
          type: "Website",
          href: "https://maalinactive.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Amal Transfers - Real-Time Transaction Platform",
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
      title: "PharmAli - Scalable Web Platform MVP",
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
    // {
    //   title: "Quiz App",
    //   href: "https://github.com/mary-a1/Quiz-App",
    //   dates: "2022",
    //   active: false,
    //   description:
    //     "An interactive quiz application built to strengthen fundamentals in state management, user interaction, and component-based UI design.",
    //   technologies: [
    //     "JavaScript",
    //     "React",
    //     "UI Logic",
    //   ],
    //   links: [
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/mary-a1/Quiz-App",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "",
    // },
  ],

} as const;
