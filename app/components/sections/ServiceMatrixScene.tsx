"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const services = [
  {
    title: "Strategy & Consulting",
    desc: "Align technology with your business goals. Fractional CTO, architecture reviews, and digital roadmaps.",
    icon: "fa-compass",
    href: "/services/strategy-consulting",
    gradient: "from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]",
    accent: "#1E90C8",
  },
  {
    title: "Digital Platforms",
    desc: "Web, mobile, and cloud applications engineered for performance and scale.",
    icon: "fa-code",
    href: "/services/digital-platforms",
    gradient: "from-[#FAFAFA] via-[#F5F5F5] to-[#E5E5E5]",
    accent: "#7C3AED",
  },
  {
    title: "Commerce & Automation",
    desc: "E‑commerce stores, payment integration, and smart business automation.",
    icon: "fa-store",
    href: "/services/commerce-automation",
    gradient: "from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]",
    accent: "#10B981",
  },
  {
    title: "Enterprise Intelligence",
    desc: "AI chatbots, predictive analytics, and personalisation engines that deliver ROI.",
    icon: "fa-brain",
    href: "/services/enterprise-intelligence",
    gradient: "from-[#FAFAFA] via-[#F5F5F5] to-[#E5E5E5]",
    accent: "#F97316",
  },
  {
    title: "ERP Integration",
    desc: "Custom ERP solutions including SAP (ABAP, Fiori, BTP) and seamless third‑party connectors.",
    icon: "fa-cogs",
    href: "/services/sap-enterprise",
    gradient: "from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]",
    accent: "#EF4444",
  },
  {
    title: "Cybersecurity",
    desc: "Vulnerability assessments, phishing simulations, and continuous security monitoring.",
    icon: "fa-shield-alt",
    href: "/services/cybersecurity",
    gradient: "from-[#FAFAFA] via-[#F5F5F5] to-[#E5E5E5]",
    accent: "#1E90C8",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ServiceMatrixScene() {
  return (
    
    <section  id="services"  data-theme="light" className="relative w-full section-light py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FC] via-[#FFFFFF] to-[#EDF2F9]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 50%, rgba(30,144,200,0.12) 0%, transparent 55%),
              radial-gradient(circle at 70% 80%, rgba(124,58,237,0.08) 0%, transparent 55%),
              radial-gradient(circle at 40% 20%, rgba(16,185,129,0.08) 0%, transparent 55%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[0.3em] uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-[#0F172A]">
              Solutions for every stage of your journey
            </h2>
            <div className="w-20 h-1 bg-[#1E90C8] mx-auto mt-4 rounded-full" />
            <p className="text-[#475569] text-base max-w-2xl mx-auto mt-4">
              From startup MVP to enterprise ERP integration — we build the systems that scale with you.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className={`group relative bg-gradient-to-br ${service.gradient} rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden h-full`}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                </div>

                <div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: `${service.accent}15`,
                    color: service.accent,
                    boxShadow: `0 0 18px ${service.accent}30`,
                  }}
                >
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-[#0A0F1A] mb-2">{service.title}</h3>
                <p className="text-xs text-[#334155] leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[#1E90C8] text-xs font-semibold group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}