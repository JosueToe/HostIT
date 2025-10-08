import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

const HeroCarousel = () => {
  const { ref: scrollRef, isInView } = useScrollAnimation(0.2);
  
  const slides = [
    {
      id: 'overlay1',
      title: "RSG Mechanics",
      url: "https://rsgmechanics.com",
      description: "Professional mobile auto repair service in South Florida - we come to you for honest diagnostics and quality parts",
      image: "/lovable-uploads/rsg-mechanics-screenshot.png",
      alt: "RSG Mechanics"
    },
    {
      id: 'overlay2',
      title: "TG Telecomm",
      url: "https://tgtelecomm.net/",
      description: "Professional telecommunications company providing fast phone support and business connectivity services",
      image: "/lovable-uploads/c340eeba-5ce9-4d41-a0b5-520415d2c714.png",
      alt: "TG Telecomm"
    },
    {
      id: 'overlay3',
      title: "SoloLaunch.app",
      url: "https://sololaunch.app",
      description: "AI-powered startup builder transforming your startup idea into a complete business foundation with generated names, branding, marketing strategies, and professional assets",
      image: "/lovable-uploads/963bc961-02a9-421f-824b-2d95a0546f0b.png",
      alt: "SoloLaunch.app"
    },
    {
      id: 'overlay4',
      title: "Artisan Coffee Co.",
      url: "https://artisan-coffee.com",
      description: "Specialty coffee roaster with locally sourced beans and handcrafted brewing methods",
      image: "https://picsum.photos/400/400?random=4",
      alt: "Artisan Coffee Co."
    },
    {
      id: 'overlay5',
      title: "Green Garden Landscapes",
      url: "https://green-garden.com",
      description: "Sustainable landscaping company creating beautiful outdoor spaces with eco-friendly practices",
      image: "https://picsum.photos/400/400?random=5",
      alt: "Green Garden Landscapes"
    }
  ];

  return (
    <motion.section 
      id="hero" 
      className="hero-floating-carousel relative overflow-hidden"
      ref={scrollRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <AnimatedBackground variant="hero" />
      {slides.map((slide, index) => (
        <div key={slide.id} id={slide.id} className="overlay-target">
          <div className="overlay-content">
            <h3>{slide.title}</h3>
            <a href={slide.url} target="_blank" rel="noopener noreferrer">
              {slide.url.replace('https://', '')}
            </a>
            <p>{slide.description}</p>
            <a href="#close" className="close-btn">✕</a>
          </div>
        </div>
      ))}


      <motion.div 
        className="auto-scroll-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="auto-scroll-track">
          {/* First set of slides */}
          {slides.map((slide, index) => (
            <motion.div 
              key={`first-${slide.id}`}
              className="floating-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Redirect to the actual website
                window.open(slide.url, '_blank', 'noopener,noreferrer');
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glow"></div>
              <img 
                src={slide.image} 
                alt={slide.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="card-overlay">
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless infinite loop */}
          {slides.map((slide, index) => (
            <motion.div 
              key={`second-${slide.id}`}
              className="floating-card"
              style={{ animationDelay: `${(index + slides.length) * 0.2}s` }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Redirect to the actual website
                window.open(slide.url, '_blank', 'noopener,noreferrer');
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glow"></div>
              <img 
                src={slide.image} 
                alt={slide.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="card-overlay">
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Third set to ensure continuous coverage */}
          {slides.map((slide, index) => (
            <motion.div 
              key={`third-${slide.id}`}
              className="floating-card"
              style={{ animationDelay: `${(index + slides.length * 2) * 0.2}s` }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Redirect to the actual website
                window.open(slide.url, '_blank', 'noopener,noreferrer');
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glow"></div>
              <img 
                src={slide.image} 
                alt={slide.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="card-overlay">
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroCarousel;
