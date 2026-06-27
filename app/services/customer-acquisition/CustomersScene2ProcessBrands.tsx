// app/services/customer-acquisition/CustomersScene2ProcessBrands.tsx
"use client";
import Image from "next/image";
import GlowText from "@/app/components/ui/GlowText";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const processSteps = [
  {
    step: "01",
    title: "Audit",
    desc: "We analyze your current online presence and competitors.",
    icon: "fa-search",
    image: "https://picsum.photos/id/42/200/100",
  },
  {
    step: "02",
    title: "Setup",
    desc: "Optimize GMB, build citations, and configure automation.",
    icon: "fa-cog",
    image: "https://picsum.photos/id/60/200/100",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Go live with real‑time tracking and start receiving inquiries.",
    icon: "fa-rocket",
    image: "https://picsum.photos/id/104/200/100",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Continuous improvement based on performance data.",
    icon: "fa-chart-line",
    image: "https://picsum.photos/id/120/200/100",
  },
];

const brandLogos = [
  { name: "Lenskart", logo: "https://picsum.photos/id/101/120/60" },
  { name: "Airtel", logo: "https://picsum.photos/id/102/120/60" },
  { name: "Flipkart", logo: "https://picsum.photos/id/103/120/60" },
  { name: "Zomato", logo: "https://picsum.photos/id/104/120/60" },
  { name: "Ola", logo: "https://picsum.photos/id/105/120/60" },
  { name: "Swiggy", logo: "https://picsum.photos/id/106/120/60" },
];

export default function CustomersScene2ProcessBrands() {
  return (
    <section data-theme="light" className="section-dark relative w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            How we drive <GlowText>results</GlowText>
          </h3>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#1E90C8]/30 rounded-lg flex items-center justify-center text-[#1E90C8] text-base">
                    <i className={`fas ${step.icon}`} />
                  </div>
                  <span className="text-2xl font-bold text-[#1E90C8]/50">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                <div className="rounded-lg overflow-hidden h-16 w-full">
                  <Image src={step.image} alt={step.title} width={200} height={100} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-300 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16">
            <p className="text-center text-gray-300 text-lg uppercase tracking-widest mb-6">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {brandLogos.map((brand, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-md border border-white/20 flex items-center justify-center p-4">
                    <img src={brand.logo} alt={brand.name} className="max-h-full w-auto object-contain brightness-90" />
                  </div>
                  <span className="mt-2 text-sm md:text-base font-medium text-gray-200">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}