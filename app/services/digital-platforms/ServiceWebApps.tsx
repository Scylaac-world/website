// app/services/digital-platforms/ServiceWebApps.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GlowText from "@/app/components/ui/GlowText";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const websiteTypes = [
  {
    title: "Static Business Websites",
    desc: "Fast, secure, SEO‑friendly sites for small businesses and portfolios.",
    icon: "fa-file-code",
    image: "https://picsum.photos/id/20/400/300",
    tech: ["HTML5", "CSS3", "JavaScript", "Astro", "Hugo"],
  },
  {
    title: "Dynamic Websites",
    desc: "Content‑driven sites with CMS integration and user accounts.",
    icon: "fa-database",
    image: "https://picsum.photos/id/40/400/300",
    tech: ["React", "Next.js", "Node.js", "WordPress", "Contentful"],
  },
  {
    title: "Web Portals & Dashboards",
    desc: "Custom admin panels with role‑based access and data visualization.",
    icon: "fa-chart-pie",
    image: "https://picsum.photos/id/42/400/300",
    tech: ["React", "Vue", "D3.js", "Tailwind", "Supabase"],
  },
  {
    title: "E‑commerce Platforms",
    desc: "Scalable online stores with secure checkout.",
    icon: "fa-shopping-cart",
    image: "https://picsum.photos/id/84/400/300",
    tech: ["Shopify", "WooCommerce", "Medusa", "Stripe", "Snipcart"],
  },
];

const mobileAppTypes = [
  {
    title: "Native iOS (Swift/SwiftUI)",
    desc: "High‑performance iPhone/iPad apps with seamless Apple integration.",
    icon: "fa-apple",
    image: "https://picsum.photos/id/91/400/300",
    tech: ["Swift", "SwiftUI", "Xcode", "Core Data", "Combine"],
  },
  {
    title: "Native Android (Kotlin/Jetpack Compose)",
    desc: "Feature‑rich Android apps optimized for all devices.",
    icon: "fa-android",
    image: "https://picsum.photos/id/92/400/300",
    tech: ["Kotlin", "Jetpack Compose", "Android Studio", "Room", "Retrofit"],
  },
  {
    title: "Cross‑Platform (Flutter/React Native)",
    desc: "Single codebase for iOS & Android — faster, cost‑effective.",
    icon: "fa-code-branch",
    image: "https://picsum.photos/id/3/400/300",
    tech: ["Flutter", "Dart", "React Native", "Expo", "Firebase"],
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "Installable web apps that work offline and send push notifications.",
    icon: "fa-globe",
    image: "https://picsum.photos/id/53/400/300",
    tech: ["Service Workers", "Web Manifest", "IndexedDB", "Workbox"],
  },
];

const ecosystem = {
  title: "Full‑Stack Ecosystems",
  desc: "We build integrated platforms where mobile apps, admin dashboards, and vendor portals work together via secure APIs.",
  icon: "fa-network-wired",
  image: "https://picsum.photos/id/96/600/400",
  tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
};

const processSteps = [
  { step: "01", title: "Discovery", desc: "Requirements gathering and user personas." },
  { step: "02", title: "Design", desc: "Wireframes and high‑fidelity prototypes." },
  { step: "03", title: "Development", desc: "Agile sprints with regular demos." },
  { step: "04", title: "Launch", desc: "Deployment and post‑launch support." },
];

const faqItems = [
  { q: "How long does a website take?", a: "Static site: 1‑2 weeks. Dynamic portal: 4‑8 weeks." },
  { q: "Native vs cross‑platform?", a: "Native offers best performance; cross‑platform saves time/cost." },
  { q: "Do you provide hosting?", a: "Yes, managed hosting with SSL and backups." },
];

export default function ServiceWebMobile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="web-mobile" data-theme="dark" className="relative w-full section-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">DIGITAL PRESENCE</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-6 text-white">
              Websites & <GlowText>Mobile Apps</GlowText>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6">
              We don't just build websites — we craft complete digital experiences. Fast, secure, and scalable.
            </p>
          </div>
        </ScrollReveal>

        {/* Website Types */}
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-white text-center mb-10">Websites tailored to your needs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTypes.map((type, i) => (
              <div key={i} className="bg-[#1A232E] rounded-3xl p-6 border border-[#3E5062] shadow-lg">
                <div className="w-14 h-14 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4">
                  <i className={`fas ${type.icon}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{type.title}</h4>
                <p className="text-sm text-slate-300 mb-4">{type.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.tech.map((t) => <span key={t} className="px-3 py-1 bg-[#2A3643] text-slate-300 text-xs rounded-full">{t}</span>)}
                </div>
                <div className="rounded-xl h-40 overflow-hidden">
                  <Image src={type.image} alt={type.title} width={400} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile Apps */}
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-white text-center mt-20 mb-10">Mobile applications that engage</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileAppTypes.map((app, i) => (
              <div key={i} className="bg-[#1A232E] rounded-3xl p-6 border border-[#3E5062] shadow-lg">
                <div className="w-14 h-14 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4">
                  <i className={`fab ${app.icon}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{app.title}</h4>
                <p className="text-sm text-slate-300 mb-4">{app.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tech.map((t) => <span key={t} className="px-3 py-1 bg-[#2A3643] text-slate-300 text-xs rounded-full">{t}</span>)}
                </div>
                <div className="rounded-xl h-40 overflow-hidden">
                  <Image src={app.image} alt={app.title} width={400} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Ecosystem */}
        <ScrollReveal>
          <div className="mt-20 bg-gradient-to-r from-[#1E90C8]/10 to-transparent rounded-3xl p-8 md:p-16 border border-[#1E90C8]/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-[#1E90C8]/20 rounded-2xl flex items-center justify-center text-[#1E90C8] text-3xl mb-6">
                  <i className={`fas ${ecosystem.icon}`} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{ecosystem.title}</h3>
                <p className="text-lg text-slate-300 mb-6">{ecosystem.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ecosystem.tech.map((t) => <span key={t} className="px-3 py-1 bg-[#2A3643] text-slate-300 text-sm rounded-full">{t}</span>)}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src={ecosystem.image} alt="Ecosystem" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Process Steps (now displayed as a grid, no sequential animation) */}
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-white text-center mt-20 mb-10">Our development process</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#1A232E] rounded-2xl p-6 text-center border border-[#3E5062]">
                <span className="text-6xl font-bold text-[#1E90C8]/20">{step.step}</span>
                <h4 className="text-xl font-bold text-white mt-2">{step.title}</h4>
                <p className="text-slate-300 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Case Study */}
        <ScrollReveal>
          <div className="mt-20 bg-gradient-to-r from-[#1E90C8]/10 to-transparent rounded-3xl p-8 md:p-16 border border-[#1E90C8]/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#1E90C8] font-bold text-sm uppercase">Case Study</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">FlowDesk increased conversions by 45%</h3>
                <p className="text-lg text-slate-300 mt-6">We rebuilt their legacy platform into a modern PWA. Load times dropped by 60%.</p>
                <Link href="#" className="inline-flex items-center mt-8 text-[#1E90C8] font-semibold hover:underline text-lg">
                  Read full story <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="https://picsum.photos/id/48/600/400" alt="Case study" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-10">Frequently asked questions</h3>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#3E5062] rounded-xl overflow-hidden bg-[#1A232E]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#2A3643]">
                    <span className="font-medium text-lg text-white">{item.q}</span>
                    <i className={`fas fa-chevron-down text-[#1E90C8] text-xl transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-5 text-slate-300">{item.a}</div>
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