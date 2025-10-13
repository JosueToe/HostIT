
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
        {/* SEO Hero Section with H1 */}
        <section className="pt-32 pb-8 px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '800', letterSpacing: '-0.02em' }}>
              Premium <span className="animated-gradient">Website Hosting</span><br />& Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed font-semibold">
              Get your business online with professional website hosting and custom web design. 
              Affordable yearly plans starting at <strong>$120/year</strong>. Premium hosting, 24/7 support, 
              SSL certificates, and lightning-fast performance included.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base mb-4">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <strong>99.9% Uptime</strong>
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <strong>24/7 Support</strong>
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <strong>Free SSL</strong>
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <strong>Daily Backups</strong>
              </span>
            </div>
          </motion.div>
        </section>
        
        <div className="pt-8"> {/* Proper spacing to prevent header overlap */}
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
              Featured <span className="animated-gradient">Client Websites</span>
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
