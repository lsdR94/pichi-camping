import { Navbar }  from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyPichi } from "@/components/WhyPichi";
import { Activities } from "@/components/Activities";
import { Campings } from "@/components/Campings";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { App } from "@/components/App";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyPichi />
        <Activities />
        <Campings />
        <Partners />
        <About />
        <App />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
