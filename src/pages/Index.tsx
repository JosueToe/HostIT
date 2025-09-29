
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import DecorativeSeparator from "@/components/DecorativeSeparator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <DecorativeSeparator />
      <PortfolioGrid />
      <DecorativeSeparator />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
