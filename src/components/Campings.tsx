import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Wifi, Car, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReservationModal } from "./ReservationModal";
import chaguaramas from "@/assets/p-chaguaramas.jpg";

const campings = [
  {
    id: 1,
    name: "Camping-car en Playa C",
    location: "Sucre",
    description:
      "Experiencia de lujo en medio de la naturaleza con vistas panorámicas a la costa del estado Sucre.",
    image: chaguaramas,
    price: "Desde $45/noche",
    rating: 4.9,
    amenities: ["WiFi", "Parking", "Fogata", "Desayuno"],
    capacity: "100 personas",
    source: {
      label: "@gps4wd",
      url: "https://www.instagram.com/p/CSUAuM0HylI/?img_index=2"
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Campings() {
  const [selectedCamping, setSelectedCamping] = useState<typeof campings[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserve = (camping: typeof campings[0]) => {
    setSelectedCamping(camping);
    setIsModalOpen(true);
  };

  return (
    <section id="campings" className="py-20 md:py-28 bg-sand-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-secondary font-semibold text-sm uppercase tracking-wider">
            Destinos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nuestra red de campamentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora nuestra red de campamentos verificados en los paisajes más
            impresionantes de Venezuela.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {campings.map((camping) => (
            <motion.div
              key={camping.id}
              variants={item}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={camping.image}
                  alt={camping.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-golden fill-golden" />
                  <span className="text-sm font-semibold text-primary">
                    {camping.rating}
                  </span>
                </div>

                {camping.source && (
                  <a
                    href={camping.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 left-2 text-xs text-black hover:text-black underline-offset-2 hover:underline bg-card/70 px-2 py-1 rounded"
                  >
                    Foto: {camping.source.label}
                  </a>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{camping.location}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">
                  {camping.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {camping.description}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Users className="w-4 h-4" />
                  <span>{camping.capacity}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {camping.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary">
                    {camping.price}
                  </span>
                  <Button size="sm" onClick={() => handleReserve(camping)}>
                    Reservar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        camping={selectedCamping}
      />
    </section>
  );
}
