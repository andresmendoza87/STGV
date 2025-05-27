import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquarePlus, Send } from "lucide-react";

const ContactSection = ({ onSubmit }) => {
  return (
    <section id="contacto" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 p-3 mb-4"
          >
            <MessageSquarePlus className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Reportar Incidencia o Contactar
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ¿Has detectado un problema en alguna vía? ¿Tienes alguna consulta? Usa el formulario para enviarnos tu reporte o mensaje.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-xl p-8 shadow-lg border"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo (Opcional)
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 rounded-md border bg-input"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico (Opcional)
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded-md border bg-input"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="report_type" className="text-sm font-medium">
                  Tipo de Reporte / Consulta
                </label>
                <select id="report_type" className="w-full p-3 rounded-md border bg-input" required>
                  <option value="">Selecciona una opción...</option>
                  <option value="bache">Bache o Huevo en la vía</option>
                  <option value="senalizacion">Problema de Señalización</option>
                  <option value="iluminacion">Falla de Iluminación</option>
                  <option value="alcantarillado">Problema de Alcantarillado</option>
                  <option value="obra_retrasada">Obra Retrasada o Abandonada</option>
                  <option value="irregularidad">Denuncia de Irregularidad</option>
                  <option value="consulta">Consulta General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Ubicación (Dirección o Coordenadas GPS)
                </label>
                <input
                  id="location"
                  type="text"
                  className="w-full p-3 rounded-md border bg-input"
                  placeholder="Ej: Calle 72 con Carrera 54"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Descripción del Reporte / Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded-md border bg-input min-h-[120px]"
                  placeholder="Describe detalladamente la situación..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="attachment" className="text-sm font-medium">
                  Adjuntar Foto o Evidencia (Opcional)
                </label>
                <input
                  id="attachment"
                  type="file"
                  className="w-full p-2 rounded-md border bg-input text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
              </div>

              <Button type="submit" className="w-full font-semibold" size="lg">
                <Send className="mr-2 h-5 w-5" /> Enviar Reporte / Mensaje
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Información de Contacto Institucional</h3>
            <p className="text-muted-foreground mb-8">
              Para asuntos institucionales o que requieran una comunicación directa, puedes utilizar los siguientes canales:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Correo Electrónico</p>
                  <p className="text-muted-foreground">contacto@stgvbarranquilla.gov.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Línea de Atención</p>
                  <p className="text-muted-foreground">+57 (XXX) XXX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Oficina Principal</p>
                  <p className="text-muted-foreground">Alcaldía de Barranquilla, Oficina de Infraestructura Vial (Por definir)</p>
                  <p className="text-muted-foreground">Barranquilla, Colombia</p>
                </div>
              </div>
            </div>
            <div className="mt-10 relative aspect-video rounded-lg overflow-hidden shadow-xl group">
                <img  alt="Oficinas de la Alcaldía de Barranquilla" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1663727839794-c10bc8894175" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;