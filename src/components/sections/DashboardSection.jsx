import React from "react";
import { motion } from "framer-motion";
import { PieChart, ListChecks, AlertTriangle, Target } from "lucide-react";

const DashboardSection = () => {
  const dashboardItems = [
    {
      icon: <PieChart className="h-10 w-10" />,
      title: "Ejecución Presupuestal",
      description: "Visualiza el % de presupuesto asignado y ejecutado para mantenimiento vial en tiempo real.",
      value: "75%",
      color: "text-green-500"
    },
    {
      icon: <ListChecks className="h-10 w-10" />,
      title: "Respuesta a Reportes",
      description: "Tiempo promedio de atención y resolución de los reportes ciudadanos.",
      value: "48h",
      color: "text-blue-500"
    },
    {
      icon: <AlertTriangle className="h-10 w-10" />,
      title: "Denuncias y Resolución",
      description: "Número de denuncias recibidas y su estado actual de investigación y resolución.",
      value: "15 activas",
      color: "text-yellow-500"
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Cumplimiento de Metas",
      description: "Nivel de avance y cumplimiento de los objetivos establecidos por los entes encargados.",
      value: "92%",
      color: "text-purple-500"
    },
  ];

  return (
    <section id="panel" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Panel de Control e Indicadores de Gestión
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Dashboards interactivos con el rendimiento de contratistas, avance de obras y KPIs clave para una gestión transparente y eficiente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dashboardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-shadow border card-hover flex flex-col justify-between"
            >
              <div>
                <div className={`rounded-full bg-primary/10 p-3 w-fit mb-4 text-primary`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              </div>
              <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;