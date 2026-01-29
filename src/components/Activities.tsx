import { motion } from "framer-motion";
import hikingImg from "@/assets/activity-hiking.jpg";
import puypuy from "@/assets/p-puypuy.jpg";
import senderismo from "@/assets/senderismo-sculata.jpg";
import gentilicio from "@/assets/valentina-gentilicio.jpg";

const activities = [
  {
    title: "Playas, Ríos y Pozas",
    description:
      "Acceso a espacios naturales de descanso y desconexión.",
    image: puypuy,
    source: {
      label: "@gorozco1987",
      url: "https://www.facebook.com/venezuelatextra/posts/playa-pui-pui-conoce-las-playas-de-paria-en-el-estado-sucre-pui-pui-es-un-litora/725170676321649/"
    },
  },
  {
    title: "Senderismo",
    description:
      "Rutas seleccionadas en montañas, selvas y paisajes naturales.",
    image: senderismo,
    source: {
      label: "@sashy",
      url: "https://steemit.com/adventure/@sashy/cumbre-pico-el-buitre-y-mucumamo-paramo-de-la-culata-merida-venezuela"
    },
  },
  {
    title: "Conexión social",
    description:
      "Conecta con otros aventureros y descubre el verdadero gentilicio venezolano.",
    image: gentilicio,
    source: {
      label: "@valendeviaje",
      url: "https://www.instagram.com/p/DFacPwviIO9/"
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export function Activities() {
  return (
    <section id="experiencias" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-secondary font-semibold text-sm uppercase tracking-wider">
            Aventuras
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Qué puedes vivir en Píchi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada campamento ofrece actividades alineadas con su entorno 
            natural, priorizando experiencias simples, memorables y 
            replicables.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={item}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-sand-light mb-2">
                  {activity.title}
                </h3>

                <p className="text-sand/90 leading-relaxed mb-2">
                  {activity.description}
                </p>

                {activity.source && (
                  <a
                    href={activity.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sand/70 hover:text-sand-light underline-offset-2 hover:underline"
                  >
                    Foto: {activity.source.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
