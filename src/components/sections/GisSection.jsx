import React from "react";
import { motion } from "framer-motion";
import { Map, AlertCircle, Route, DollarSign, Layers } from "lucide-react";

const GisSection = () => {
  const gisFeatures = [
    { icon: <AlertCircle className="h-6 w-6" />, text: "Zonas críticas por frecuencia de reportes" },
    { icon: <Route className="h-6 w-6" />, text: "Rutas con intervenciones planificadas o en ejecución" },
    { icon: <Layers className="h-6 w-6" />, text: "Niveles de desgaste por tipo de tráfico" },
    { icon: <DollarSign className="h-6 w-6" />, text: "Distribución geográfica de recursos invertidos" },
  ];

  return (
    <section id="mapa" className="container py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center text-primary mb-2">
            <Map className="h-8 w-8 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">Análisis Espacial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Herramientas de Análisis Espacial (GIS)</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Visualiza datos georreferenciados en un mapa interactivo. Comprende la distribución de problemas, inversiones y planificaciones viales de manera intuitiva.
          </p>
          <ul className="space-y-4">
            {gisFeatures.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                  {feature.icon}
                </div>
                <span className="text-muted-foreground">{feature.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square rounded-lg overflow-hidden shadow-xl group"
        >
          <img  alt="Mapa GIS interactivo mostrando capas de información vial" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621273961349-0612be84b10a" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold text-center">Explora el Mapa Interactivo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GisSection;