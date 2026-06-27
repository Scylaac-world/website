"use client";
import { motion, Variants } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const pillars = [
  {
    title: "All‑in‑One Solution",
    desc: "Everything you need — from website to automation — in one integrated platform.",
    accent: "#1E90C8",
    svg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <rect x="20" y="40" width="25" height="25" rx="4" fill="#1E90C8" opacity="0.15" />
        <rect x="30" y="30" width="25" height="25" rx="4" fill="#1E90C8" opacity="0.4" />
        <rect x="40" y="20" width="25" height="25" rx="4" fill="#1E90C8" />
        <circle cx="55" cy="55" r="18" fill="none" stroke="#1E90C8" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Fast & Reliable Execution",
    desc: "Quick setup, smooth delivery. We move at the speed of your business.",
    accent: "#7C3AED",
    svg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <motion.path
          d="M50 15 L30 45 L45 45 L35 75 L65 40 L50 40 L60 15 Z"
          fill="#7C3AED"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#7C3AED" strokeWidth="2" opacity="0.3">
          <animate attributeName="r" values="30;36;30" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Results That Matter",
    desc: "We focus on growth metrics you can actually see — revenue, leads, efficiency.",
    accent: "#10B981",
    svg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <motion.path
          d="M20 70 L40 45 L60 55 L80 30"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
        />
        <circle cx="80" cy="30" r="5" fill="#10B981">
          <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Simple & Effective Systems",
    desc: "Easy to understand, easy to use. No jargon, just solutions that work.",
    accent: "#C0C4C8",
    svg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <motion.circle
          cx="40" cy="40" r="20"
          fill="none" stroke="#C0C4C8" strokeWidth="4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <circle cx="40" cy="40" r="8" fill="#C0C4C8" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions Available",
    desc: "Need something unique? We'll build it from scratch, tailored to your needs.",
    accent: "#6366F1",
    svg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <motion.path
          d="M30 60 L30 40 C30 25 40 20 50 20 C60 20 70 25 70 40 L70 60"
          stroke="#6366F1"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
        />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#6366F1" strokeWidth="2" opacity="0.2" />
      </svg>
    ),
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Expert Support" },
  { value: "5★", label: "Average Rating" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section
     id="why-choose" 
      data-theme="dark"
      className="relative w-full py-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #0F172A 0%, #020617 100%)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[0.3em] uppercase">Your Growth Partner</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
              Why the best choose <span className="text-[#1E90C8]">SCYLAAAC</span>
            </h2>
            <div className="w-20 h-1 bg-[#1E90C8] mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              We combine deep expertise with a relentless focus on delivering real business outcomes.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16"
        >
          {pillars.map((pillar, i) => (
            <motion.div key={i} variants={item}>
              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:border-white/20 h-full">
                {pillar.svg}
                <h3 className="font-bold text-white mb-2 mt-4">{pillar.title}</h3>
                <p className="text-sm text-slate-300">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item}>
              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300">
                <span className="text-4xl font-bold text-[#1E90C8]">{stat.value}</span>
                <p className="text-slate-300 text-sm mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}