// app/services/digital-platforms/ServiceDesktopCloud.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GlowText from "@/app/components/ui/GlowText";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const desktopFeatures = [
  {
    title: "Desktop Applications",
    desc: "Cross‑platform desktop software for Windows, macOS, and Linux. Built with Electron, Tauri, or .NET MAUI.",
    icon: "fa-desktop",
    image: "https://picsum.photos/id/104/600/400",
    tech: ["Electron", "Tauri", ".NET MAUI", "WPF", "Qt"],
  },
  {
    title: "Browser Extensions & Plugins",
    desc: "Extend Chrome, Firefox, Edge. Custom plugins for WordPress, Shopify, Figma, and more.",
    icon: "fa-puzzle-piece",
    image: "https://picsum.photos/id/120/600/400",
    tech: ["Manifest V3", "React", "TypeScript", "PHP", "Liquid"],
  },
];

const cloudServices = [
  {
    title: "Cloud Infrastructure",
    desc: "Scalable hosting on AWS, Google Cloud, DigitalOcean. Load balancing, auto‑scaling, and monitoring.",
    icon: "fa-cloud",
    tech: ["AWS", "Google Cloud", "DigitalOcean", "Docker", "Kubernetes"],
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automated deployment pipelines, infrastructure as code, and zero‑downtime releases.",
    icon: "fa-infinity",
    tech: ["GitHub Actions", "Terraform", "Docker", "Vercel", "Netlify"],
  },
  {
    title: "Serverless & Edge",
    desc: "Functions that scale to zero. Globally fast, cost‑effective, and maintenance‑free.",
    icon: "fa-bolt",
    tech: ["Vercel", "Netlify", "AWS Lambda", "Cloudflare Workers"],
  },
];

const faqItems = [
  { q: "Can you build desktop apps for both Windows and Mac?", a: "Yes, using Electron or Tauri we deliver cross‑platform apps from a single codebase." },
  { q: "Do you manage cloud servers?", a: "We offer fully managed cloud hosting with 24/7 monitoring and support." },
  { q: "What about security?", a: "All cloud deployments follow best practices: VPC, IAM, encryption at rest and in transit." },
];

export default function ServiceDesktopCloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="desktop-cloud" data-theme="light" className="relative w-full section-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">BEYOND THE BROWSER</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-6 text-[#0F172A]">
              Desktop, Plugins & <GlowText>Cloud</GlowText>
            </h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto mt-6">
              Powerful desktop applications, browser extensions, and cloud infrastructure for modern businesses.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Features */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {desktopFeatures.map((feature, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-lg">
                <div className="h-56 overflow-hidden">
                  <Image src={feature.image} alt={feature.title} width={600} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#1E90C8]/10 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4">
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                  <p className="text-[#475569] mb-6">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((t) => <span key={t} className="px-3 py-1 bg-[#F1F5F9] text-[#475569] text-xs rounded-full">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Cloud Services – now a normal grid (no horizontal scroll) */}
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-[#0F172A] text-center mt-20 mb-10">Cloud & DevOps Integration</h3>
          <p className="text-[#475569] text-center mb-10">Scalable, secure, and automated infrastructure</p>
          <div className="grid md:grid-cols-3 gap-6">
            {cloudServices.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-md">
                <div className="w-16 h-16 bg-[#1E90C8]/10 rounded-2xl flex items-center justify-center text-[#1E90C8] text-3xl mb-6">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">{service.title}</h4>
                <p className="text-[#475569] mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => <span key={t} className="px-3 py-1 bg-[#F1F5F9] text-[#475569] text-xs rounded-full">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Case Study */}
        <ScrollReveal>
          <div className="mt-20 bg-gradient-to-r from-[#1E90C8]/5 to-transparent rounded-3xl p-8 md:p-16 border border-[#1E90C8]/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#1E90C8] font-bold text-sm uppercase">Case Study</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">Global retailer scales to 1M+ users</h3>
                <p className="text-lg text-[#475569] mt-6">We migrated their legacy infrastructure to AWS, reducing costs by 35%.</p>
                <Link href="#" className="inline-flex items-center mt-8 text-[#1E90C8] font-semibold hover:underline text-lg">
                  Read full story <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://picsum.photos/id/180/600/400" alt="Cloud case study" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0F172A] text-center mb-10">Frequently asked questions</h3>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#F8FAFC]">
                    <span className="font-medium text-lg text-[#0F172A]">{item.q}</span>
                    <i className={`fas fa-chevron-down text-[#1E90C8] text-xl transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-5 text-[#475569]">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}