import { CircuitBackdrop } from "../components/global/circuit-backdrop";
import { Header } from "../components/global/header";
import { Footer } from "../components/global/footer";
import { ContactIsland } from "../components/global/contact-island";
import { HeroSection } from "../components/home/hero-section";
import { ServicesSection } from "../components/home/services-section";
import { AboutSection } from "../components/home/about-section";
import { TestimonialsSection } from "../components/home/testimonials-section";
import { ContactSection } from "../components/home/contact-section";
import { PartnersSection } from "../components/home/partners-section";

export default function HomePage() {
  return (
    <main id="home" className="relative isolate min-h-screen overflow-hidden bg-[#050608] text-white">
      <CircuitBackdrop />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <PartnersSection />
        <Footer />
        <ContactIsland />
      </div>
    </main>
  );
}
