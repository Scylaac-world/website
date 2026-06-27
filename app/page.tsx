// app/page.tsx
import Hero from "@/app/components/sections/Hero";
import DiagnosticScene from "./components/sections/DiagnosticScene";
import ProcessAndClientsScene from "./components/sections/ProcessAndClientsScene";
import ServiceMatrixScene from "./components/sections/ServiceMatrixScene";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <DiagnosticScene />
      <ProcessAndClientsScene />
      <ServiceMatrixScene />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  );
}