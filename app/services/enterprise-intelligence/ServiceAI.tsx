"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../../components/ui/ScrollReveal";
import GlowText from "../../components/ui/GlowText";

const bentoItems = [
  {
    title: "AI Chatbots",
    desc: "24/7 customer support with natural language understanding. Qualify leads and book meetings automatically.",
    icon: "fa-robot",
    image: "https://picsum.photos/id/145/400/300",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast sales, churn, and demand with machine learning models trained on your data.",
    icon: "fa-chart-scatter",
    size: "md:col-span-1",
  },
  {
    title: "Personalization Engine",
    desc: "Tailored product recommendations and dynamic content that boost conversion by up to 35%.",
    icon: "fa-user-tag",
    size: "md:col-span-1",
  },
  {
    title: "Computer Vision",
    desc: "Automate quality inspection, inventory counting, and document processing.",
    icon: "fa-eye",
    image: "https://picsum.photos/id/180/400/300",
    size: "md:col-span-1",
  },
  {
    title: "AI Consulting",
    desc: "Strategic guidance on AI adoption, tool selection, and team upskilling.",
    icon: "fa-brain",
    size: "md:col-span-2",
  },
  {
    title: "Custom LLM Integration",
    desc: "Fine‑tune and deploy private large language models for your specific domain.",
    icon: "fa-language",
    size: "md:col-span-1",
  },
];

export default function ServiceAIFull() {
  return (
    <section id="ai" data-theme="dark" className="py-28 px-6 section-dark">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1E90C8] text-xs font-bold tracking-[.3em] uppercase">INTELLIGENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              AI & <GlowText>Expert Guidance</GlowText>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-4">
              Harness the power of artificial intelligence to make smarter decisions, automate complex tasks, and stay ahead of the competition.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
            {bentoItems.map((item, i) => (
              <div
                key={i}
                className={`bg-[#1A232E] rounded-3xl p-6 border border-[#3E5062] hover:border-[#1E90C8]/50 transition-all ${item.size}`}
              >
                <div className="w-12 h-12 bg-[#1E90C8]/20 rounded-xl flex items-center justify-center text-[#1E90C8] text-xl mb-4">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
                {item.image && (
                  <div className="img-zoom rounded-xl h-32 mt-4">
                    <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-full object-cover rounded-xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <div className="mt-20 bg-gradient-to-r from-[#1E90C8]/20 to-transparent rounded-3xl p-10 border border-[#1E90C8]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to explore AI for your business?</h3>
            <p className="text-slate-300 mb-6">Book a free consultation with our AI strategists.</p>
            <Link href="#contact" className="inline-flex items-center px-6 py-3 bg-[#1E90C8] text-white rounded-xl font-semibold hover:bg-[#1873A3] transition">
              Schedule Call <i className="fas fa-arrow-right ml-2" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}