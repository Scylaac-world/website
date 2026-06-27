// app/components/sections/DiagnosticScene.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const prompts = [
  "Is your website bringing in enough customers?",
  "How do you automate repetitive tasks?",
  "Can AI help you make better decisions?",
  "Are your systems secure against cyberattacks?",
  "How do you connect your ERP to apps?",
];

const diagnosticOutput = [
  "Scanning website performance... ",
  "Checking automation workflows... 4 active",
  "Analyzing customer engagement... Good",
  "Reviewing security posture... Passed",
  "Testing cloud backup... OK",
  "Generating report... Done",
];

// ---------- Typewriter Prompt ----------
function TypewriterPrompt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phrase = prompts[currentIndex];
    if (!isDeleting && charIndex < phrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText(phrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting && charIndex === phrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(phrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % prompts.length);
    }
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <p className="text-xl md:text-2xl font-bold text-[#0F172A] leading-relaxed min-h-[50px]">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
}

// ---------- Feature Cards ----------
const features = [
  {
    title: "Security Shield",
    desc: "Pen‑Tested & Monitored",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <path d="M40 10 L60 18 L60 38 C60 54 40 64 40 64 C40 64 20 54 20 38 L20 18 Z" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <motion.path
          d="M30 40 L38 48 L52 32"
          stroke="#1E90C8"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
        />
        <circle cx="40" cy="40" r="34" fill="none" stroke="#1E90C8" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="34;38;34" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Cloud Native",
    desc: "AWS & Azure Ready",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <ellipse cx="40" cy="45" rx="22" ry="12" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <circle cx="30" cy="35" r="10" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <circle cx="50" cy="33" r="12" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <motion.path
          d="M40 50 L40 25 M33 32 L40 25 L47 32"
          stroke="#1E90C8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    title: "24/7 Monitoring",
    desc: "Proactive Support",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <motion.path
          d="M10 50 L30 50 L38 30 L46 70 L54 40 L62 50 L70 50"
          stroke="#1E90C8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />
        <circle cx="70" cy="50" r="4" fill="#1E90C8">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Custom Development",
    desc: "Tailored Solutions",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <motion.path
          d="M28 25 L18 40 L28 55"
          stroke="#1E90C8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 0.5 }}
        />
        <motion.path
          d="M52 25 L62 40 L52 55"
          stroke="#1E90C8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 0.5 }}
        />
        <circle cx="40" cy="40" r="3" fill="#1E90C8">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    title: "AI Powered",
    desc: "Smart Automation",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <rect x="20" y="20" width="40" height="40" rx="8" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <motion.path
          d="M30 40 L50 40"
          stroke="#1E90C8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <circle cx="60" cy="60" r="8" fill="#1E90C8" opacity="0.15">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="60" r="4" fill="#1E90C8" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Agile Workflow",
    icon: (
      <svg viewBox="0 0 80 80" className="w-8 h-8">
        <motion.path
          d="M40 60 L40 25 M30 35 L40 20 L50 35"
          stroke="#1E90C8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
        <circle cx="40" cy="65" r="12" fill="#E2E8F0" stroke="#1E90C8" strokeWidth="2" />
        <path d="M30 65 L15 65 M50 65 L65 65" stroke="#1E90C8" strokeWidth="2" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
  },
];

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl border border-[#E2E8F0] p-3.5 shadow-sm hover:shadow-md hover:border-[#1E90C8]/40 transition-all duration-300 flex items-center gap-3.5">
      <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-[#1E90C8]" />
      <div className="flex-shrink-0 bg-[#1E90C8]/10 rounded-lg p-1.5 group-hover:bg-[#1E90C8]/20 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-semibold text-[#0F172A]">{title}</h4>
        <p className="text-[10px] text-[#475569]">{desc}</p>
      </div>
    </div>
  );
}

// ---------- System Monitor ----------
function SystemMonitor() {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-[#E2E8F0] p-4 shadow-lg w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#475569] font-semibold">System Status</span>
        <span className="flex items-center gap-1.5 text-[10px] text-green-600 font-medium">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
          Operational
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <div>
          <div className="flex justify-between text-[10px] text-[#475569] mb-0.5">
            <span>CPU</span>
            <span>23%</span>
          </div>
          <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div className="h-full bg-[#1E90C8] rounded-full animate-pulse" style={{ width: "23%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-[#475569] mb-0.5">
            <span>Memory</span>
            <span>67%</span>
          </div>
          <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div className="h-full bg-[#1E90C8] rounded-full animate-pulse" style={{ width: "67%" }} />
          </div>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-[#475569]">Uptime</span>
          <span className="text-xs font-bold text-[#0F172A]">99.99%</span>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-[#475569] font-mono bg-[#F8FAFC] rounded-lg p-2.5 h-12 overflow-hidden border border-[#E2E8F0]">
        <div className="animate-scroll-slow space-y-0.5">
          <p>[OK] CRM connector — 12ms</p>
          <p>[OK] Automation engine — 45 tasks/min</p>
          <p>[OK] Cloud backup — no errors</p>
          <p>[OK] Security patch CVE‑2025‑034 applied</p>
        </div>
      </div>
    </div>
  );
}

export default function DiagnosticScene() {
  return (
    <section data-theme="light" className="relative w-full min-h-screen section-light flex items-center justify-center py-8">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#F0F4FC]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Terminal Card */}
        <ScrollReveal>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-[#E2E8F0] shadow-xl p-5 md:p-6">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="text-gray-500 text-[10px] ml-2 tracking-widest">scylaac@diagnostics:~</span>
            </div>

            {/* Command */}
            <div className="font-mono text-sm">
              <span className="text-[#1E90C8]">$ scylaac diagnose --business</span>
              <span className="inline-block w-2 h-4 bg-[#1E90C8] ml-1 animate-pulse align-middle" />
            </div>

            {/* Typewriter Prompt */}
            <div className="mt-5">
              <TypewriterPrompt />
              <p className="mt-2 text-xs md:text-sm text-[#475569] border-l-2 border-[#1E90C8]/40 pl-3 leading-relaxed">
                We diagnose your digital infrastructure and prescribe the right solution — no templates, no guesswork.
              </p>
            </div>

            {/* Diagnostic Output */}
            <div className="mt-4 border-t border-[#E2E8F0] pt-4">
              <div className="font-mono text-[10px] md:text-xs space-y-1">
                {diagnosticOutput.map((line, i) => (
                  <p key={i} className="text-[#475569] flex items-center gap-2">
                    <span className="text-[#1E90C8]">❯</span> <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { value: "200+", label: "Projects" },
              { value: "99.99%", label: "Uptime" },
              { value: "<24h", label: "Response" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center border border-[#E2E8F0] hover:border-[#1E90C8]/40 transition-all"
              >
                <p className="text-xl md:text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                <p className="text-[10px] text-[#475569]">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Features Grid + Monitor in one row on desktop */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Features – 2 columns (takes 3/4 on desktop) */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-2.5">
                {features.map((feature, i) => (
                  <FeatureCard key={i} {...feature} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* System Monitor – 1/4 on desktop */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <SystemMonitor />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}