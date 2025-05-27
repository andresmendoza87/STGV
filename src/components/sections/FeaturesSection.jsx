import React from "react";
import { motion } from "framer-motion";
import { DatabaseZap, Users, GanttChartSquare, Landmark } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <DatabaseZap className="h-10 w-10" />,
      title: "Plataforma Digital Centralizada",
      description: "Acceso público y fácil a información sobre estado de vías, presupuestos, contratos y cronogramas de obras.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Integración de Bases de Datos",
      description: "Unificación de datos de SECOP II, SUIFP y entes territoriales para trazabilidad completa de recursos.",
    },
    {
      icon: <Landmark className="h-10 w-10" />,
      title: "Transparencia Financiera",
      description: "Sigue el rastro del dinero desde la asignación presupuestaria hasta la ejecución final de las obras viales."
    },
    {
      icon: <GanttChartSquare className="h-10 w-10" />,
      title: "Información Detallada de Contratos",
      description: "Consulta plazos, montos, responsables y avances de todos los contratos adjudicados para mantenimiento vial."
    },
  ];

  return (
    <section id="plataforma" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Componentes Clave de la Plataforma
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            El STGV integra herramientas tecnológicas y metodológicas para ofrecer una visión completa y transparente de la gestión vial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-8 shadow-lg hover:shadow-primary/20 transition-shadow border card-hover"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;