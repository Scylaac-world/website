"use client";
import { motion, Variants } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const processSteps = [
  {
    title: "Discovery",
    desc: "We listen, analyze your needs, and map out a strategy.",
    color: "#1E90C8",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <circle cx="40" cy="40" r="22" fill="#1E90C8" opacity="0.15" stroke="#1E90C8" strokeWidth="2.5" />
        <circle cx="50" cy="30" r="4" fill="#1E90C8" />
        <line x1="56" y1="56" x2="72" y2="72" stroke="#1E90C8" strokeWidth="3" strokeLinecap="round" />
        <motion.path
          d="M28 40 L38 40 L38 30"
          stroke="#1E90C8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <circle cx="75" cy="80" r="8" fill="#1E90C8" opacity="0.2">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Design & Build",
    desc: "We craft beautiful, scalable solutions tailored to you.",
    color: "#7C3AED",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <rect x="20" y="20" width="60" height="50" rx="6" fill="#7C3AED" opacity="0.15" stroke="#7C3AED" strokeWidth="2.5" />
        <circle cx="35" cy="35" r="3" fill="#7C3AED" />
        <line x1="25" y1="45" x2="55" y2="45" stroke="#7C3AED" strokeWidth="2" />
        <line x1="25" y1="55" x2="45" y2="55" stroke="#7C3AED" strokeWidth="2" />
        <motion.path
          d="M70 30 L82 18 L88 24 L76 36 Z"
          stroke="#7C3AED"
          strokeWidth="2"
          fill="#7C3AED"
          opacity="0.2"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    title: "Test & Launch",
    desc: "Rigorous testing, then smooth deployment to the world.",
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <motion.path
          d="M50 65 L50 25 M35 38 L50 18 L65 38"
          stroke="#10B981"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <circle cx="50" cy="72" r="14" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="2.5" />
        <path d="M38 72 L15 72 M62 72 L85 72" stroke="#10B981" strokeWidth="2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
  },
  {
    title: "Grow & Optimize",
    desc: "Continuous monitoring and improvements to keep you ahead.",
    color: "#F59E0B",
    svg: (
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <motion.path
          d="M25 70 L40 45 L55 60 L75 30"
          stroke="#F59E0B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
        />
        <circle cx="75" cy="30" r="4" fill="#F59E0B">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <line x1="20" y1="75" x2="80" y2="75" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const clients = [
  { name: "Shisha", logo: "https://image.winudf.com/v2/image1/Y29tLmFsbmFhZi5zaGlzaGFfc2NyZWVuXzBfMTYyMzgyMDA2NV8wMDU/screen-0.jpg?fakeurl=1&type=.jpg" },
  { name: "Lenskart", logo: "https://www.estraightway.com/_next/image?url=%2Fassets%2Flogo%2Ffooter-logo.png&w=640&q=75" },
  { name: "Flipkart", logo: "https://www.rivershineadventures.in/_next/image?url=%2Fassets%2Flogo%2Flogo1.png&w=640&q=75" },
  { name: "Zomato", logo: "https://picsum.photos/id/104/120/60" },
  { name: "Ola", logo: "https://picsum.photos/id/105/120/60" },
  { name: "Swiggy", logo: "https://picsum.photos/id/106/120/60" },
];


const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function ProcessAndClientsScene() {
  return (
    <section
      id="process"  
      data-theme="dark"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #0f172a 0%, #020617 100%)" }}
    >
      {/* background glows – unchanged */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[400px] bg-[#1E90C8]/15 rounded-full blur-[120px] top-1/3 -left-20 animate-float-slow" />
        <div className="absolute w-[400px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[100px] bottom-1/4 -right-20 animate-float-medium" />
        <div className="absolute w-[300px] h-[300px] bg-[#10B981]/10 rounded-full blur-[80px] top-2/3 left-1/2 animate-float-fast" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 pt-20 pb-20 flex flex-col items-center">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-4xl">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[0.3em] uppercase">How We Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
              Bringing your <span className="text-[#1E90C8]">ideas</span> to life
            </h2>
            <div className="w-20 h-1 bg-[#1E90C8] mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              A proven process that combines creativity with technology — delivered with a smile.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full mb-16"
        >
          {processSteps.map((step, i) => (
            <motion.div key={i} variants={item} className="h-full">
              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="mb-4 relative flex items-center justify-center">{step.svg}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6">
              Trusted by growing brands
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
            >
              
              {/* {clients.map((client, i) => (
                <motion.div key={i} variants={item} className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-2xl shadow-md border border-white/10 flex items-center justify-center p-2 hover:shadow-lg hover:border-[#1E90C8]/30 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full w-auto object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  <span className="mt-2 text-xs font-medium text-slate-300">{client.name}</span>
                </motion.div>
              ))} */}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}