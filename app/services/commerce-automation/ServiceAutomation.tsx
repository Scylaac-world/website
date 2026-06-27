"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import GlowText from "@/app/components/ui/GlowText";

const TechBadge = ({ name }: { name: string }) => {
  const slug = name.toLowerCase().replace(/\s+/g, "");
  return (
    <span className="px-3 py-1.5 bg-[#2A3643] text-slate-300 text-xs rounded-full border border-[#3E5062]">
      {name}
    </span>
  );
};

const automationFeatures = [
    {
      title: "Missed Call Auto‑Reply",
      desc: "Instantly engage leads via SMS or WhatsApp when a call is missed. Capture details 24/7 and never lose a prospect.",
      icon: "fa-phone-volume",
      image: "https://picsum.photos/id/119/600/400",
      tech: ["Twilio", "WhatsApp API", "Webhooks"],
    },
    {
      title: "Appointment Booking System",
      desc: "Self‑service scheduling that syncs with Google/Outlook. Automated reminders reduce no‑shows by up to 67%.",
      icon: "fa-calendar-check",
      image: "https://picsum.photos/id/160/600/400",
      tech: ["Calendly API", "Google Calendar", "Zoom"],
    },
    {
      title: "CRM & Lead Nurturing",
      desc: "Automated follow‑up sequences based on customer behavior. Segment leads and send personalized emails/SMS.",
      icon: "fa-user-group",
      image: "https://picsum.photos/id/42/600/400",
      tech: ["HubSpot", "Salesforce", "Zapier"],
    },
    {
      title: "Custom Workflow Automation",
      desc: "Connect your entire stack — from spreadsheets to databases. Eliminate manual data entry and human error.",
      icon: "fa-sitemap",
      image: "https://picsum.photos/id/26/600/400",
      tech: ["Make", "n8n", "Python"],
    },
  ];
const stats = [
  { value: "18+", label: "hours saved weekly" },
  { value: "3x", label: "faster lead response" },
  { value: "67%", label: "fewer no‑shows" },
  { value: "24/7", label: "automated engagement" },
];

export default function ServiceAutomationFull() {
  return (
    <section id="automation" data-theme="dark" className="py-28 px-6 section-dark">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">WORK SMARTER</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Smart <GlowText>Business Automation</GlowText>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-4">
              Eliminate repetitive tasks, reduce errors, and scale your operations with intelligent automation tailored to your workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating Rows */}
        <div className="space-y-24">
          {automationFeatures.map((feature, index) => (
            <ScrollReveal key={index}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[#1E90C8]/20 rounded-2xl flex items-center justify-center text-[#1E90C8] text-3xl mb-6">
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>
                  <Link href="#" className="inline-flex items-center text-[#1E90C8] font-semibold hover:underline">
                    Learn more <i className="fas fa-arrow-right ml-2" />
                  </Link>
                </div>
                <div className="img-zoom rounded-3xl border border-[#3E5062] shadow-2xl">
                  <Image src={feature.image} alt={feature.title} width={600} height={400} className="rounded-3xl object-cover w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Bar */}
        <ScrollReveal>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#1A232E] rounded-2xl p-6 text-center border border-[#3E5062]">
                <span className="text-4xl font-bold text-white">{stat.value}</span>
                <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}