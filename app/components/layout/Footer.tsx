import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-choose" },
];

const contactLinks = [
  {
    icon: "fa-whatsapp",
    type: "fab",
    label: "WhatsApp",
    href: "https://wa.me/919535774366",
  },
  {
    icon: "fa-envelope",
    type: "fas",
    label: "Email",
    href: "mailto:hello@scylaac.com",
  },
  {
    icon: "fa-phone",
    type: "fas",
    label: "Call",
    href: "tel:+919591619204",
  },
];

const socialLinks = [
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fa-twitter", label: "Twitter", href: "#" },
  { icon: "fa-youtube", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(30,144,200,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo.png"
                alt="SCYLAAAC"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Smart solutions, real growth. We build digital systems that scale — from websites and mobile apps to enterprise automation and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#1E90C8] transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    target={link.icon === "fa-whatsapp" ? "_blank" : "_self"}
                    rel={link.icon === "fa-whatsapp" ? "noopener noreferrer" : ""}
                    className="text-slate-400 hover:text-[#1E90C8] transition text-sm flex items-center gap-2"
                  >
                    <i className={`${link.type} ${link.icon} w-4 text-center`} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-slate-400">
              <p>Mangalore, India</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#1E90C8] hover:border-[#1E90C8]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`fab ${social.icon}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SCYLAAAC. Alchemy of Dreams. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-[#1E90C8] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-[#1E90C8] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}