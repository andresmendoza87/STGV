import React from "react";
import { motion } from "framer-motion";
import { BellRing, CalendarClock, AlertOctagon, FileWarning, MessageCircle as MessageCircleWarning } from 'lucide-react';
import { Button } from "../ui/button";

const AlertsSection = () => {
  const alertTypes = [
    { icon: <CalendarClock className="h-8 w-8" />, title: "Retrasos en Obras", description: "Notificaciones sobre incumplimientos en cronogramas." },
    { icon: <FileWarning className="h-8 w-8" />, title: "Cambios Presupuestales", description: "Alertas por modificaciones injustificadas en presupuestos." },
    { icon: <AlertOctagon className="h-8 w-8" />, title: "Vencimiento de Plazos", description: "Avisos sobre la finalización de plazos contractuales." },
    { icon: <MessageCircleWarning className="h-8 w-8" />, title: "Denuncias sin Respuesta", description: "Notificaciones si las denuncias ciudadanas no son atendidas." },
  ];

  return (
    <section id="alertas" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 p-3 mb-4"
          >
            <BellRing className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Módulo de Alertas y Transparencia Activa
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Recibe notificaciones automáticas por correo o app sobre eventos críticos en la gestión vial, promoviendo la acción oportuna y la rendición de cuentas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {alertTypes.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-shadow border card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {alert.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="text-center"
        >
          <Button size="lg">Configurar Mis Alertas</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AlertsSection;