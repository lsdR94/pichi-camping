import { motion } from "framer-motion";
import { Shield, Leaf, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguridad como estándar",
    description:
      "Todos los campamentos pasan por un proceso de verificación y cumplen criterios mínimos de seguridad, operación y atención al visitante.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad operativa",
    description:
      "Promovemos prácticas responsables y de bajo impacto ambiental, alineadas con el entorno y la capacidad real de cada sitio.",
  },
  {
    icon: Heart,
    title: "Cultura y economía local",
    description:
      "Trabajamos con operadores locales impulsando economías regionales y experiencias auténticas.",
  },
  {
    icon: MapPin,
    title: "Accesibilidad real",
    description:
      "Campamentos ubicados estratégicamente cerca de corredores viales principales reduciendo fricción de acceso.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyPichi() {
  return (
    <section className="py-20 md:py-28 bg-sand-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestra Propuesta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            ¿Por qué elegir Píchi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Creamos la infraestructura digital y operativa para que el camping 
            en Venezuela sea accesible, confiable y fácil de escalar, 
            integrando tecnología, cultura local y naturaleza.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
