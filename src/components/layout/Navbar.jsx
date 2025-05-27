import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Aperture } from "lucide-react";

const Navbar = ({ appName, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-primary p-2"
          >
            <Aperture className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold"
          >
            {appName}
          </motion.h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * navLinks.length }}
          >
            <Button>Acceder</Button>
          </motion.div>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-2">Acceder</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;