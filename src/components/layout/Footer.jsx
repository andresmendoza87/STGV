import React from "react";
import { Aperture } from "lucide-react";

const Footer = ({ appName }) => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full bg-primary p-2">
                <Aperture className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">{appName}</span>
            </div>
            <p className="text-slate-400 mb-4">
              Mejorando la gestión, supervisión y transparencia del mantenimiento vial.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="bg-slate-800 hover:bg-primary transition-colors p-2 rounded-full"
                  aria-label={`Visita nuestra página de ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Componentes</span>
            <ul className="space-y-3">
              {[
                "Plataforma Digital",
                "Participación Ciudadana",
                "Panel de Control",
                "Análisis Espacial (GIS)",
                "Alertas y Transparencia",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Enlaces Útiles</span>
            <ul className="space-y-3">
              {["Reportar Incidencia", "Ver Contratos", "Estado de Vías", "Preguntas Frecuentes"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Legal</span>
            <ul className="space-y-3">
              {["Términos y Condiciones", "Política de Privacidad", "Política de Cookies", "Contacto Institucional"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} {appName}. Todos los derechos reservados.</p>
          <p>Una iniciativa para el área metropolitana de Barranquilla.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;