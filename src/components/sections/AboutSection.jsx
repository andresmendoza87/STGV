import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="nosotros" className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-lg overflow-hidden shadow-xl group"
        >
          <img  alt="Equipo multidisciplinario trabajando en el proyecto STGV" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1566924076377-e4dc56188d47" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Relevancia y Aporte de la Solución</h2>
          <p className="text-lg text-muted-foreground mb-6">
            El Sistema Transparente de Gestión Vial (STGV) busca transformar la manera en que se administran y supervisan los recursos destinados al mantenimiento de las vías en Barranquilla y su área metropolitana.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Al centralizar la información, facilitar la participación ciudadana y promover la transparencia activa, el STGV contribuye a una gestión más eficiente, responsable y alineada con las necesidades de la comunidad.
          </p>
          <Button size="lg" variant="outline">Conocer más sobre el proyecto</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;