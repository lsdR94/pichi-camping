import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-pichi.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Experiencias", id: "experiencias" },
    { label: "Campings", id: "campings" },
    { label: "Aliados", id: "aliados" },
    { label: "Nosotros", id: "nosotros" },
    { label: "App", id: "app" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${isScrolled ? "md:bg-background/95 md:backdrop-blur-md md:shadow-soft" : "md:bg-transparent"}
        bg-white
      `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("inicio")} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Volver al inicio"
          >
            <img src={logo} alt="Píchi Logo" className="h-24 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                  className={`font-lato text-sm font-bold transition-colors ${
                    isScrolled ? "text-primary" : "text-white"
                  } hover:text-secondary`}
                  
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/+584126028385"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 font-lato text-sm font-bold text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            {/* <span className={`font-lato text-sm font-bold italic transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              RIF-J507254615
            </span> */}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary mr-8"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-lato text-sm font-bold transition-colors ${
                    isScrolled ? "text-primary" : "text-primary"
                  } hover:text-secondary`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/+584126028385"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 font-lato text-sm font-bold text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              {/* <span className="font-lato text-sm font-bold italic text-primary ml-4">RIF-J507254615</span> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};




// const navItems = [
//   { label: "Inicio", href: "#inicio" },
//   { label: "Experiencias", href: "#experiencias" },
//   { label: "Campings", href: "#campings" },
//   { label: "Aliados", href: "#aliados" },
//   { label: "Nosotros", href: "#nosotros" },
//   { label: "App", href: "#app" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="container flex items-center justify-between h-16 md:h-20">
//         <a href="#inicio" className="flex items-center gap-2">
//           <img src={logo} alt="Píchi" className="h-10 md:h-12 w-auto" />
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-8">
//           {navItems.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden lg:flex items-center gap-3">
//           <Button variant="ghost" size="sm">
//             Iniciar Sesión
//           </Button>
//           <Button size="sm">Reservar</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden p-2 text-foreground"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-background border-b border-border"
//           >
//             <nav className="container py-4 flex flex-col gap-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <div className="flex flex-col gap-2 pt-4 border-t border-border">
//                 <Button variant="outline" className="w-full">
//                   Iniciar Sesión
//                 </Button>
//                 <Button className="w-full">Reservar</Button>
//               </div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
