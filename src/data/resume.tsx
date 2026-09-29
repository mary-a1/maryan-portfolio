import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maryan Ali",
  initials: "MA",
  url: "https://maryan-portfolio.vercel.app",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Aspiring Product Manager • Customer Facing Platforms • Systems & Product Operations",
  summary:
    "I'm a product manager who learns by building. I have a CS degree from York, two years of product experience across three Canadian banks, and two real products I work on outside of my day job.\n\nMost recently, I worked on Simplii Financial's customer facing chatbot at CIBC, where I acted as product owner for an eBanking API initiative spanning mobile, web, and chatbot authentication. I owned the PRDs, backlog, and release readiness. My manager wanted to convert me to full time, but the open headcount was at a senior level, so I'm now looking for my next full time product role.\n\nBefore CIBC, I worked on digital onboarding at Tangerine and Scotiabank, and started my career as an Application Security intern building a no code security console. I write SQL well enough to run my own funnel analyses.\n\nOutside of work, I build for people like me. I'm a first generation Somali Canadian, and my family sends money back home regularly. I built **[Amal Transfers](/blog/amal-transfers)** end to end (Next.js, Node.js) for my community remittance business, because I know firsthand what a confusing flow costs the people using it. I also co-launched **[MAALIN Activewear](/blog/maalin-active)**, a modest activewear brand, with my partner Hana. She owns the brand and inventory, and I run digital operations on Shopify, including product, UX, navigation, pricing, and conversion. It's where I learned that merchant product decisions are a constant tradeoff between discovery, trust, and conversion. Both have taught me more about user behaviour than any course has.",
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
    "Product Requirements (PRDs)",
    "Roadmapping & Prioritization",
    "SQL & Funnel Analysis",
    "A/B Testing & Experimentation",
    "User Research",
    "Conversion Optimization",
    "Stakeholder Management",
    "API Integrations",
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
    { href: "/blog", icon: NotebookIcon, label: "Case Studies" },
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
        url: "https://www.linkedin.com/in/maryanali-pm",
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
        "Acting Product Owner for Simplii's customer-facing chatbot team — owned PRDs, backlog priorities, and release readiness for an eBanking API initiative spanning mobile, web, and chatbot authentication. Cut authentication latency by ~2 seconds and reduced sprint-over-sprint service deviations by 10%. Wrote requirements engineering didn't have to chase me about, ran SQL on funnel data to find drop-offs, and partnered with eng on QA, regression testing, and release support."
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
        "Mapped end-to-end customer onboarding workflows across systems to identify the gaps causing duplicate account creation. Defined backend validation rules that improved data integrity by ~10%. Synthesized IVR data, customer feedback, and user research into requirements that PMs and engineering used to plan the next quarter of onboarding work.",
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
        "Translated Bill 64 (Quebec's modernized privacy law) into system requirements and documentation engineering could ship against — owned compliance updates through review with zero audit issues. Used customer behaviour data to identify friction in onboarding and proposed changes that lifted task completion ~12% in usability testing. Communicated weekly project risks to senior stakeholders, translating engineering blockers into business decisions.",
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
        "Built a no-code security console aggregating platform health data across teams — used internally for reporting, monitoring, and incident triage. Standardized the incident escalation workflow across UAT and production environments. This is also where I learned how to talk to engineering teams without making them want to throw their laptops, which turned out to be the most valuable PM skill I picked up.",
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
        "A modest activewear brand I co-launched with my partner Hana — she owns the brand and stocks the inventory; I run the digital operations on Shopify (product, UX, navigation, pricing, conversion). Live merchant context for everything I write about commerce and UX.",
      technologies: [
        "Shopify",
        "E-Commerce",
        "Conversion Optimization",
        "Product Strategy",
        "UX Research",
        "Funnel Analysis",
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
        "A cross-border remittance platform I designed and shipped end-to-end. Real-time exchange rate logic, transparent fee breakdowns, and a bidirectional calculator built specifically for users who send money to family.",
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
