"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const contactMethods = [
  {
    icon: "fa-whatsapp",
    prefix: "fab",
    title: "WhatsApp",
    description: "Chat with us instantly",
    link: "https://wa.me/919535774366",
    color: "#25D366",
    bgColor: "bg-[#25D366]/10",
    hoverBg: "hover:bg-[#25D366]",
  },
  {
    icon: "fa-envelope",
    prefix: "fas",
    title: "Email",
    description: "We'll respond within 24 hours",
    link: "mailto:hello@scylaac.com",
    color: "#1E90C8",
    bgColor: "bg-[#1E90C8]/10",
    hoverBg: "hover:bg-[#1E90C8]",
  },
  {
    icon: "fa-phone-alt",
    prefix: "fas",
    title: "Call",
    description: "Speak to our team directly",
    link: "tel:+919591619204",
    color: "#10B981",
    bgColor: "bg-[#10B981]/10",
    hoverBg: "hover:bg-[#10B981]",
  },
];

const socialLinks = [
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-facebook-f", label: "Facebook", href: "#" },
    { icon: "fa-twitter", label: "Twitter", href: "#" }, 
  { icon: "fa-youtube", label: "YouTube", href: "#" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ContactCTA() {
  return (
    <section
      id="contact"
      data-theme="light"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #EBF4FA 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-[#1E90C8]/10 rounded-full blur-3xl -top-10 -left-20 animate-float-slow" />
        <div className="absolute w-80 h-80 bg-[#7C3AED]/8 rounded-full blur-3xl bottom-0 -right-20 animate-float-medium" />
        <div className="absolute w-48 h-48 bg-[#10B981]/10 rounded-full blur-2xl top-2/3 left-1/2 animate-float-fast" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 pt-20 pb-12 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#1E90C8] text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-[#0F172A]">
                Let's build your <span className="text-[#1E90C8]">success</span> story.
              </h2>
              <div className="w-20 h-1 bg-[#1E90C8] mx-auto mt-4 rounded-full" />
              <p className="text-[#475569] text-lg max-w-2xl mx-auto mt-4">
                Have a project in mind? We'd love to hear about it. Reach out to us directly.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Methods Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, i) => (
              <motion.div key={i} variants={item}>
                <Link
                  href={method.link}
                  target={method.icon === "fa-whatsapp" ? "_blank" : "_self"}
                  rel={method.icon === "fa-whatsapp" ? "noopener noreferrer" : ""}
                  className="group relative block bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 text-center hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 mx-auto ${method.bgColor} rounded-2xl flex items-center justify-center text-2xl group-hover:text-white transition-all duration-300 ${method.hoverBg}`}
                    style={{ color: method.color }}
                  >
                    <i className={`${method.prefix} ${method.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mt-4 mb-2">{method.title}</h3>
                  <p className="text-sm text-[#475569]">{method.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[#1E90C8] text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Contact now</span>
                    <i className="fas fa-arrow-right text-xs" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#475569] text-sm mb-6">Or connect with us on social media</p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/90 border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-white hover:bg-[#1E90C8] hover:border-[#1E90C8] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={`fab ${social.icon}`} />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Additional contact info */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-sm text-[#475569]">
                <span className="font-semibold">Email:</span> hello@scylaac.com
                <span className="mx-3">|</span>
                <span className="font-semibold">Phone:</span> +91 9591619204
                <span className="mx-3">|</span>
                <span className="font-semibold">Location:</span> Mangalore, India
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}