import Link from "next/link";

const services = [
  { title: "Customer Acquisition", desc: "Local SEO, GMB, SMS campaigns", href: "/services/customer-acquisition", icon: "fa-google" },
  { title: "Digital Platforms", desc: "Web, Mobile & Cloud apps", href: "/services/digital-platforms", icon: "fa-code" },
  { title: "Commerce & Automation", desc: "E‑commerce and workflow automation", href: "/services/commerce-automation", icon: "fa-store" },
  { title: "Enterprise Intelligence", desc: "AI, chatbots, predictive analytics", href: "/services/enterprise-intelligence", icon: "fa-brain" },
  { title: "SAP & ERP", desc: "ABAP, Fiori, BTP, custom ERP integration", href: "/services/sap-enterprise", icon: "fa-cogs" },
  { title: "Cybersecurity", desc: "Vulnerability assessments, phishing simulations", href: "/services/cybersecurity", icon: "fa-shield-haltered" },
];

export default function ServicesHub() {
  return (
    <main className="py-28 px-6 section-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">What do you need to achieve?</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="glass-card p-8 hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4 mx-auto">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
