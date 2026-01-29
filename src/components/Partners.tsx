import { motion } from "framer-motion";
import { Handshake, TrendingUp, Headphones, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Globe,
    title: "Visibilidad de Marca",
    description: "Tu campamento aparecerá en nuestra plataforma y campañas de marketing.",
  },
  {
    icon: TrendingUp,
    title: "Sistema de Reservas",
    description: "Acceso a nuestra plataforma tecnológica para gestionar reservas fácilmente.",
  },
  {
    icon: Headphones,
    title: "Soporte Operativo",
    description: "Acompañamiento continuo y capacitación para tu equipo.",
  },
  {
    icon: Handshake,
    title: "Red de Aliados",
    description: "Forma parte de una comunidad de emprendedores del turismo sostenible.",
  },
];

export function Partners() {
  return (
    <section id="aliados" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-golden font-semibold text-sm uppercase tracking-wider">
              Únete a la red
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conviértete en{" "}
              <span className="text-golden">Aliado Píchi</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              ¿Tienes un terreno, finca, restaurante o espacio ideal para camping?
              Únete a nuestra red y transforma tu propiedad en un destino de
              aventura. Nosotros aportamos la marca, estándares, reservas y
              marketing; tú aportas el terreno y la operación diaria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">Quiero ser Aliado</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#nosotros">Conoce más</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-forest-light/50 backdrop-blur-sm p-5 rounded-xl"
              >
                <benefit.icon className="w-8 h-8 text-golden mb-3" />
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
