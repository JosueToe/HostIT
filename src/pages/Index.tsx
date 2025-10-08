
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import DecorativeSeparator from "@/components/DecorativeSeparator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background Elements */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="animated-grid">
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
      </div>

      <Header />
      <div>
        <div className="pt-1"> {/* Reduced spacing from header */}
          <HeroCarousel />
        </div>
        {/* Section heading between carousel and separator */}
        <div className="w-full pt-2 pb-4 bg-transparent">
          <div className="flex items-center justify-center w-full">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white tracking-tight relative" 
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              What We've <span className="animated-gradient">Created</span>
              {/* Multi-line underline effect */}
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/60"></div>
              <div className="absolute -bottom-4 left-0 w-4/5 h-0.5 bg-white/40"></div>
              <div className="absolute -bottom-6 left-0 w-3/5 h-0.5 bg-white/20"></div>
            </motion.h2>
          </div>
        </div>
        <DecorativeSeparator />
        <PortfolioGrid />
        <DecorativeSeparator />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
