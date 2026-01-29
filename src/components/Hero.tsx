import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Paisaje venezolano con carpa de camping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-sand-light/20 backdrop-blur-sm text-sand-light text-sm font-medium"
          >
            🏕️ Primera red de camping-car en Venezuela!
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-sand-light mb-6 leading-tight"
          >
            Camping simple, seguro y escalable en la{" "}
            <span className="text-golden">naturaleza venezolana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-sand/90 mb-10 max-w-2xl mx-auto"
          >
            Píchi es una plataforma que conecta a viajeros con campamentos 
            verificados en entornos naturales únicos, facilitando experiencias 
            auténticas, seguras y sostenibles en toda Venezuela.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#campings">Encuentra tu camping</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#nosotros">Conoce nuestro modelo</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#experiencias"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand-light animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
