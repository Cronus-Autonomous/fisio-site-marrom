import React from "react";
import Navbar from "@/components/clinica-evo/Navbar";
import Hero from "@/components/clinica-evo/Hero";
import NeedSelector from "@/components/clinica-evo/NeedSelector";
import AboutSection from "@/components/clinica-evo/AboutSection";
import ValueProposition from "@/components/clinica-evo/ValueProposition";
import ServicesSection from "@/components/clinica-evo/ServicesSection";
import PainPointsSection from "@/components/clinica-evo/PainPointsSection";
import DifferentialsSection from "@/components/clinica-evo/DifferentialsSection";
import MidPageCTA from "@/components/clinica-evo/MidPageCTA";
import ProcessSection from "@/components/clinica-evo/ProcessSection";
import TestimonialsSection from "@/components/clinica-evo/TestimonialsSection";
import FAQSection from "@/components/clinica-evo/FAQSection";
import LocationSection from "@/components/clinica-evo/LocationSection";
import FinalCTA from "@/components/clinica-evo/FinalCTA";
import Footer from "@/components/clinica-evo/Footer";
import FloatingWhatsApp from "@/components/clinica-evo/FloatingWhatsApp";
import MobileWhatsAppBar from "@/components/clinica-evo/MobileWhatsAppBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <NeedSelector />
        <AboutSection />
        <ValueProposition />
        <ServicesSection />
        <PainPointsSection />
        <DifferentialsSection />
        <MidPageCTA />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileWhatsAppBar />
    </div>
  );
}