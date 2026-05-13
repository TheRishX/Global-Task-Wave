import { 
  Code2, 
  Layers, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Cloud,
  Smartphone,
  Server,
  AppWindow,
  Monitor
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Technologies", href: "#tech" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
];

export const SERVICES = [
  {
    title: "SaaS Development",
    description: "End-to-end multi-tenant architectures built with Vercel-like performance and scalability.",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Enterprise Software",
    description: "Robust internal tools and complex management systems scaled for global accessibility.",
    icon: Server,
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Mobile Optimization",
    description: "Native-grade experiences delivered through cutting-edge Cross-platform technologies.",
    icon: Smartphone,
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "AI Integration",
    description: "Implementing LLMs and predictive models to transform static data into intelligent insights.",
    icon: Cpu,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Cloud Infrastructure",
    description: "DevOps and SRE services ensuring 99.99% uptime with automated scaling pipelines.",
    icon: Zap,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Security & Compliance",
    description: "Bank-grade encryption and SOC2 readiness built into every layer of your application.",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-600"
  }
];

export const PARTNERS = [
  { name: "Meetopia", logo: "Meetopia", featured: true, description: "Revolutionizing collaborative virtual environments together." },
  { name: "Vercel", logo: "Vercel", featured: false },
  { name: "Stripe", logo: "Stripe", featured: false },
  { name: "AWS", logo: "AWS", featured: false },
  { name: "Retool", logo: "Retool", featured: false },
  { name: "Supabase", logo: "Supabase", featured: false },
];

export const PRODUCTS = [
  {
    name: "WaveScale",
    category: "Infrastructure",
    description: "Autonomous scaling for Kubernetes clusters with zero configuration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    name: "TaskFlow Pro",
    category: "SaaS",
    description: "Visual logic builder for complex enterprise workflows and automation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Global Guard",
    category: "Security",
    description: "Real-time threat detection for distributed microservices architectures.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=2034&auto=format&fit=crop"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Global Taskwave transformed our legacy stack into a modern powerhouse. Their partnership with Meetopia brought a new dimension to our collaboration.",
    author: "Sarah Chen",
    role: "CTO, NextGen Dynamics",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "The speed of execution and attention to detail is something I've only seen in Silicon Valley's elite agencies.",
    author: "Marcus Thorne",
    role: "CEO, Stellar AI",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    quote: "Working with Global Taskwave felt like an extension of our own team. Professional, innovative, and results-driven.",
    author: "Elena Rodriguez",
    role: "Product Lead, Fintech Flow",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/globaltaskwave",
  linkedin: "https://linkedin.com/company/globaltaskwave",
  github: "https://github.com/globaltaskwave",
  mail: "mailto:hello@taskwave.global"
};

export const EXTERNAL_LINKS = {
  meetopia: "https://meetopia.co/",
  vercel: "https://vercel.com",
  stripe: "https://stripe.com",
  aws: "https://aws.amazon.com",
  retool: "https://retool.com",
  supa: "https://supabase.com"
};

export const TECH_STACK = [
  { name: "React", icon: Globe, href: "https://react.dev" },
  { name: "Next.js", icon: Rocket, href: "https://nextjs.org" },
  { name: "TypeScript", icon: Code2, href: "https://www.typescriptlang.org" },
  { name: "Tailwind", icon: Layers, href: "https://tailwindcss.com" },
  { name: "Node.js", icon: Server, href: "https://nodejs.org" },
  { name: "PostgreSQL", icon: ShieldCheck, href: "https://www.postgresql.org" },
];
