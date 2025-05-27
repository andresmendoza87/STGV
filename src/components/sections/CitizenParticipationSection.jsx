import React from "react";
import { motion } from "framer-motion";
import { Edit3, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";

const CitizenParticipationSection = () => {
  const participationFeatures = [
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Reporte en Tiempo Real",
      description: "Informa sobre el mal estado de vías, adjuntando ubicación GPS y fotos directamente desde la plataforma.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Seguimiento de Reportes",
      description: "Consulta el estado de tus reportes y los de otros ciudadanos, fomentando la transparencia.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Calificación de Obras",
      description: "Comenta y califica la calidad y gestión de las obras viales ejecutadas en tu comunidad.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Denuncias Seguras",
      description: "Reporta irregularidades de manera anónima, garantizando la protección de tu identidad.",
    },
  ];

  return (
    <section id="participacion" className="container py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl group"
          >
            <img  alt="Ciudadanos usando sus móviles para reportar incidencias viales" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1566924076377-e4dc56188d47" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
               <p className="text-white text-lg font-semibold">Tu voz es clave para una mejor gestión vial.</p>
             </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Módulo de Participación Ciudadana</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Empoderamos a los ciudadanos para que sean parte activa de la supervisión y mejora de la infraestructura vial. Tu participación es fundamental.
          </p>
          <div className="space-y-6 mb-8">
            {participationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button size="lg">Participa Ahora</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CitizenParticipationSection;