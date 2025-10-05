import projectImg4 from "../../public/assets/Screenshot 2024-11-06 224717.png";
import projectImg5 from "../../public/assets/Screenshot 2024-11-17 213647.png";
import projectImg6 from "../../public/assets/Screenshot 2025-01-31 142839.png";
import projectImg7 from "../../public/assets/Screenshot 2025-02-10 131643.png";
import projectImg8 from "../../public/assets/Screenshot 2025-02-23 172032.png";
import projectImg9 from "../../public/assets/Screenshot 2025-06-07 200918.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: any;
  href?: string;
  repo?: string;
  category: "real-life" | "practice" | "shopify";
};

export const projects: Project[] = [
  // Real Life Projects
  {
    title: "Dakesh - A Bartering platform",
    description:
      "A comprehensive bartering platform built with modern web technologies",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    href: "https://senior-frontend-eta.vercel.app",
    image: "/assets/Screenshot 2025-06-07 200918.png",
    category: "real-life",
  },
  {
    title: "KAYZONE Agency",
    description:
      "Modern agency website with sleek design and smooth animations",
    tags: ["Next.js", "Tailwind"],
    href: "https://kayzone.agency/",
    image: "/assets/Screenshot 2024-11-17 213647.png",
    category: "real-life",
  },
  {
    title: "LEED Builders",
    description: "Professional construction company website with modern design",
    tags: ["Next.js", "Tailwind"],
    href: "https://leedbuilders-lb.com/",
    image: "/assets/Screenshot 2025-02-10 131643.png",
    category: "real-life",
  },

  {
    title: "D.one Perfumes",
    description: "Elegant e-commerce site for luxury perfumes",
    tags: ["Next.js", "Tailwind"],
    href: "https://doneperfumes.vercel.app/",
    image: "/assets/Screenshot 2024-11-06 224717.png",
    category: "real-life",
  },

  // Shopify Projects
  {
    title: "ProLed",
    description: "Professional LED lighting solutions e-commerce store",
    tags: ["Shopify"],
    href: "https://proled.life/",
    image: "/assets/Screenshot 2025-02-23 172032.png",
    category: "shopify",
  },
  {
    title: "Cahva Creamer",
    description: "Premium coffee creamer brand e-commerce store",
    tags: ["Shopify"],
    href: "https://mycahva.com/",
    image: "/assets/Screenshot 2025-01-31 142839.png",
    category: "shopify",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export const categories = [
  { id: "real-life", label: "Real Life Projects" },
  { id: "shopify", label: "Shopify Projects" },
] as const;
