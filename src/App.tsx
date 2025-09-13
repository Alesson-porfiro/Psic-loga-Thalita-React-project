import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServiceSection";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { ConsultorioSection } from "@/components/ConsultorioSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ConsultorioSection />
      
      <Footer />
    </main>
  );
}