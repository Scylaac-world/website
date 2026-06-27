import ServiceEcommerce from "./ServiceEcommerce";
import ServiceAutomation from "./ServiceAutomation";
import ContactForm from "@/app/components/ui/ContactForm";

export default function CommerceAutomationPage() {
  return (
    <main>
      <ServiceEcommerce />
      <ServiceAutomation />
      {/* <ContactForm service="Commerce & Automation" /> */}
    </main>
  );
}
