import { motion } from "framer-motion";
import { Smartphone, Map, Users, CalendarCheck, Bell, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bell,
    title: "Planifica tu Viaje",
    description: "Explora destinos, organiza tu viaje y reserva campamentos desde un solo lugar.",
  },
  {
    icon: Users,
    title: "Comunidad Píchi",
    description: "Conecta con otros aventureros y comparte experiencias en ruta.",
  },
  {
    icon: Map,
    title: "Navegación y orientación",
    description: "Acceso a rutas, ubicaciones y puntos clave para llegar a cada campamento con confianza.",
  },
  {
    icon: Bell,
    title: "Seguridad y asistencia",
    description: "Funciones de emergencia y auxilio vial diseñadas para proteger a nuestros usuarios durante el trayecto y la estadía.",
  },
];

export function App() {
  return (
    <section id="app" className="py-20 md:py-28 bg-sand-light overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-3 text-secondary font-semibold text-sm uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              Tecnología
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              App Píchi Camping
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Tu compañero de aventuras digital. Integra planificación, 
              reservas y funciones de seguridad para que cada experiencia en 
              la naturaleza sea simple, confiable y conectada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card p-5 rounded-xl border border-golden/30 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 bg-golden/20 text-secondary text-xs font-semibold rounded-full">
                  EN DESARROLLO
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Nuestra app web y móvil están actualmente en desarrollo. ¡Pronto
                podrás disfrutar de todas estas funcionalidades!
              </p>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 md:w-72 bg-primary rounded-[3rem] p-3 shadow-elevated">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-primary h-7 flex items-center justify-center">
                    <div className="w-20 h-5 bg-primary rounded-full" />
                  </div>
                  {/* Screen Content */}
                  <div className="p-4 h-[450px] bg-gradient-to-b from-sand-light to-background">
                    <div className="text-center mb-6 pt-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                        <Smartphone className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-primary text-lg">
                        Píchi App
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Tu aventura comienza aquí
                      </p>
                    </div>

                    <div className="space-y-3">
                      {["Explorar campings", "Mis reservas", "Comunidad", "Perfil"].map(
                        (item, i) => (
                          <div
                            key={item}
                            className="bg-card p-3 rounded-xl shadow-soft flex items-center gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10" />
                            <span className="text-sm font-medium text-primary">
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
