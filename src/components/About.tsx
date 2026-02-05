import { motion } from "framer-motion";
import { Target, Eye, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Facilitar experiencias de camping accesibles y seguras, conectando personas, naturaleza y cultura local.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Convertirnos en el referente Nacional respecto al camping-car y turismo ecológico en Venezuela.",
  },
  {
    icon: Users,
    title: "Nuestro Equipo",
    description:
      "Somos venezolanos con experiencia internacional y el ideal de desarrollar modelos de turismo sostenibles, escalables y alineados con la realidad local en Venezuela.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description:
      "Cada decisión que tomamos considera su impacto en el medio ambiente y las comunidades locales. El turismo responsable es nuestro compromiso.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Acerca de Píchi
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Nacimos con la visión de transformar el turismo de naturaleza en
            Venezuela, creando una red de campamentos seguros, sostenibles y
            accesibles que celebran la belleza de nuestro país.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
