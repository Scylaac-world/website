"use client";
import GlowText from "@/app/components/ui/GlowText";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
const sapCoreServices = [
  {
    title: "ABAP Development",
    desc: "Custom reports, enhancements, BAPIs, BADIs, and performance tuning for your SAP ECC or S/4HANA system.",
    icon: "fa-code",
    image: "https://picsum.photos/id/26/400/300",
    tech: ["ABAP OO", "CDS Views", "AMDP", "ALV", "SmartForms"],
  },
  {
    title: "SAP Fiori & UI5",
    desc: "Modern, role‑based user experiences for SAP. We design and develop Fiori apps that work on any device.",
    icon: "fa-mobile-screen",
    image: "https://picsum.photos/id/3/400/300",
    tech: ["SAPUI5", "Fiori Elements", "OData", "Web IDE"],
  },
  {
    title: "SAP BTP Integration",
    desc: "Extend your SAP landscape with cloud‑native services on Business Technology Platform.",
    icon: "fa-cloud",
    image: "https://picsum.photos/id/180/400/300",
    tech: ["SAP Integration Suite", "SAP Build", "CAP", "RAP"],
  },
];

export default function ServiceSAPEnterprise() {
  return (
    <section id="sap-enterprise" data-theme="light" className="py-28 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">ENTERPRISE EXCELLENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0F172A]">
              SAP & <GlowText>Custom ERP</GlowText>
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto mt-4">
              Deep SAP expertise combined with the ability to build and integrate custom ERP solutions tailored to your unique business processes.
            </p>
          </div>
        </ScrollReveal>

        {/* SAP Core Services Grid */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-8">SAP Development & Integration</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {sapCoreServices.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#1E90C8]/10 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4 group-hover:bg-[#1E90C8] group-hover:text-white transition">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{service.title}</h3>
                <p className="text-[#475569] text-sm mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-[#F1F5F9] text-[#475569] text-xs rounded-md border border-[#E2E8F0]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="img-zoom rounded-xl h-40">
                  <Image src={service.image} alt={service.title} width={400} height={300} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Custom ERP Integration – Expanded Section */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#1E90C8]/5 to-transparent rounded-3xl p-8 md:p-12 border border-[#1E90C8]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-[#1E90C8]/10 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4">
                  <i className="fas fa-plug" />
                </div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Custom ERP Integration</h3>
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  Seamlessly connect SAP with any third‑party system — whether it's a legacy CRM, modern e‑commerce platform, or custom in‑house application. We build robust, secure, and scalable integrations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <i className="fas fa-check-circle text-[#1E90C8] text-xl mt-0.5" />
                    <span className="text-[#0F172A]"><strong>RFC & BAPI Integration</strong> – Real‑time connectivity with SAP function modules.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fas fa-check-circle text-[#1E90C8] text-xl mt-0.5" />
                    <span className="text-[#0F172A]"><strong>IDoc & EDI Processing</strong> – Automate document exchange with trading partners.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fas fa-check-circle text-[#1E90C8] text-xl mt-0.5" />
                    <span className="text-[#0F172A]"><strong>OData / REST APIs</strong> – Modern, lightweight interfaces for web and mobile apps.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fas fa-check-circle text-[#1E90C8] text-xl mt-0.5" />
                    <span className="text-[#0F172A]"><strong>SAP PI/PO & CPI</strong> – Enterprise‑grade middleware for complex landscapes.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  {["RFC", "IDoc", "OData", "SOAP", "REST", "PI/PO", "CPI"].map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-white text-[#1E90C8] text-sm font-medium rounded-full border border-[#1E90C8]/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="img-zoom rounded-2xl">
                <Image src="https://picsum.photos/id/104/600/400" alt="Custom ERP Integration" width={600} height={400} className="rounded-2xl object-cover w-full" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trusted by */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <p className="text-[#475569] text-sm uppercase tracking-wider mb-6">Trusted by leading enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {["SAP", "S/4HANA", "BTP", "Fiori", "ABAP"].map((t) => (
                <span key={t} className="text-2xl font-light text-[#64748B]">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}