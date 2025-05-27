import React from "react";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import AboutSection from "./components/sections/AboutSection";
import CitizenParticipationSection from "./components/sections/CitizenParticipationSection";
import DashboardSection from "./components/sections/DashboardSection";
import GisSection from "./components/sections/GisSection";
import AlertsSection from "./components/sections/AlertsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

const App = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu reporte. Lo revisaremos pronto.",
      duration: 3000,
    });
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#plataforma", label: "Plataforma" },
    { href: "#participacion", label: "Participación" },
    { href: "#panel", label: "Panel de Control" },
    { href: "#mapa", label: "Mapa Interactivo" },
    { href: "#alertas", label: "Alertas" },
    { href: "#contacto", label: "Reportar" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-900">
      <Navbar appName="STGV" navLinks={navLinks} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CitizenParticipationSection />
        <DashboardSection />
        <GisSection />
        <AlertsSection />
        <AboutSection />
        <ContactSection onSubmit={handleContactSubmit} />
      </main>
      <Footer appName="STGV" />
      <Toaster />
    </div>
  );
};

export default App;