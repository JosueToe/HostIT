
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      // Scroll to the very top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-600 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl text-white cursor-pointer tracking-wide" onClick={() => scrollToSection('hero')}>
            Host<span className="animated-gradient">IT</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 ease-out relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 ease-out relative group"
            >
              Our Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 ease-out relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Side - Contact Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block animated-gradient text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-all duration-300 ease-out"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-600 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 ease-out font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 ease-out font-medium py-2"
              >
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 ease-out font-medium py-2"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
