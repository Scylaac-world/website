"use client";
import GlowText from "@/app/components/ui/GlowText";
import ScrollReveal from "@/app/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Custom Store Design",
    desc: "Beautiful, conversion‑optimized storefronts that reflect your brand identity.",
    icon: "fa-paint-brush",
    image: "https://picsum.photos/id/84/400/300",
  },
  {
    title: "Secure Payments",
    desc: "PCI‑compliant gateways: UPI, cards, net banking, wallets, and BNPL.",
    icon: "fa-shield",
    image: "https://picsum.photos/id/30/400/300",
  },
  {
    title: "Inventory Sync",
    desc: "Real‑time stock updates across all channels — website, marketplaces, POS.",
    icon: "fa-box",
    image: "https://picsum.photos/id/31/400/300",
  },
  {
    title: "Shipping Automation",
    desc: "Integrated with major carriers for label printing, tracking, and returns.",
    icon: "fa-truck",
    image: "https://picsum.photos/id/33/400/300",
  },
  {
    title: "Marketing Tools",
    desc: "Abandoned cart recovery, email campaigns, and discount code engine.",
    icon: "fa-bullhorn",
    image: "https://picsum.photos/id/43/400/300",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track sales, customer behavior, and conversion rates in real time.",
    icon: "fa-chart-line",
    image: "https://picsum.photos/id/48/400/300",
  },
];

const metrics = [
  { value: "2.1x", label: "Average revenue increase" },
  { value: "45%", label: "Higher conversion rate" },
  { value: "24/7", label: "Automated fulfillment" },
];

export default function ServiceEcommerceFull() {
  return (
    <section id="ecommerce" data-theme="light" className="py-28 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">E‑COMMERCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0F172A]">
              Sell Online & <GlowText>Accept Payments</GlowText>
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto mt-4">
              Everything you need to launch, manage, and scale your online store — from product catalog to checkout.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#1E90C8]/10 rounded-xl flex items-center justify-center text-[#1E90C8] text-2xl mb-4 group-hover:bg-[#1E90C8] group-hover:text-white transition">
                  <i className={`fas ${f.icon}`} />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{f.title}</h4>
                <p className="text-[#475569] mb-4">{f.desc}</p>
                <div className="img-zoom rounded-xl h-40">
                  <Image src={f.image} alt={f.title} width={400} height={300} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Metrics Bar */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#1E90C8]/10 to-transparent rounded-3xl p-10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {metrics.map((m, i) => (
                <div key={i}>
                  <span className="text-4xl font-bold text-[#1E90C8]">{m.value}</span>
                  <p className="text-[#475569] mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Case Study Highlight */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
            <div>
              <span className="text-[#1E90C8] font-bold text-sm uppercase">Case Study</span>
              <h3 className="text-2xl font-bold text-[#0F172A] mt-2">Urban Store grew online sales by 210%</h3>
              <p className="text-[#475569] mt-4">
                After migrating to a custom Shopify store with integrated payments and inventory sync, their conversion rate doubled in 60 days.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-[#1E90C8]" /> <span className="text-[#475569]">Shopify Plus migration</span></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-[#1E90C8]" /> <span className="text-[#475569]">Multi‑currency payments</span></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-[#1E90C8]" /> <span className="text-[#475569]">Automated inventory sync</span></li>
              </ul>
              <Link href="#" className="inline-flex items-center mt-6 text-[#1E90C8] font-semibold hover:underline">
                Read full story <i className="fas fa-arrow-right ml-2" />
              </Link>
            </div>
            <div className="img-zoom rounded-2xl">
              <Image src="https://picsum.photos/id/30/600/400" alt="Case study" width={600} height={400} className="rounded-2xl object-cover w-full" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}