import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo-pichi.png";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Píchi" className="h-24 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Red de campamentos sostenibles en Venezuela. Creando recuerdos
              inolvidables en la naturaleza.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center hover:bg-golden hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Experiencias", "Campings", "Aliados", "Nosotros", "App"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-golden transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4 text-golden" />
                pichicamping@gmail.com
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4 text-golden" />
                +58 412 602 8385
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-golden flex-shrink-0 mt-0.5" />
                Venezuela
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Recibe consejos de camping, destinos destacados y ofertas exclusivas.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-forest-light text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-golden"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-golden text-primary font-semibold rounded-lg hover:bg-golden/90 transition-colors text-sm"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-light">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Píchi. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors">
              Términos
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
