import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="container py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sistema Transparente de la Gestión Vial (STGV)
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Mejorando la gestión, supervisión y transparencia del mantenimiento vial en el área metropolitana de Barranquilla. Acceso público a información clave sobre nuestras vías.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-semibold">
              Explorar Plataforma
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Reportar Incidencia
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-lg overflow-hidden shadow-xl group"
        >
          <img  alt="Mapa interactivo de Barranquilla mostrando el estado de las vías" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1697420985826-2fd79574be5e" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <div className="absolute bottom-4 left-4 text-white">
             <p className="text-sm font-semibold">Visualiza el estado de las vías en tiempo real</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;