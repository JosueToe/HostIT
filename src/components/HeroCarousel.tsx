
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with center slide (index 2)
  
  const slides = [
    {
      id: 'overlay1',
      title: "Bella's Italian Restaurant",
      url: "https://bellas-restaurant.com",
      description: "Modern Italian restaurant with online reservations and authentic wood-fired cuisine",
      image: "https://picsum.photos/400/400?random=1",
      alt: "Bella's Italian Restaurant"
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

  const getSlideClass = (index) => {
    const position = index - currentSlide;
    switch (position) {
      case -2: return 'slide slide-1';
      case -1: return 'slide slide-2';
      case 0: return 'slide slide-3 center-slide';
      case 1: return 'slide slide-4';
      case 2: return 'slide slide-5';
      default: return 'slide hidden';
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideClick = (index, e) => {
    const position = index - currentSlide;
    
    if (position === 1) {
      // Clicked on right adjacent card
      e.preventDefault();
      nextSlide();
    } else if (position === -1) {
      // Clicked on left adjacent card
      e.preventDefault();
      prevSlide();
    }
    // If position === 0 (center card), let the default overlay behavior happen
  };

  return (
    <section id="hero" className="hero-coverflow mt-16">
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

      <div className="coverflow-container">
        {/* Previous Arrow */}
        <button 
          onClick={prevSlide}
          className="carousel-arrow carousel-arrow-left"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="coverflow">
          {slides.map((slide, index) => (
            <a 
              key={slide.id}
              href={currentSlide === index ? `#${slide.id}` : '#'} 
              className={getSlideClass(index)}
              onClick={(e) => handleSlideClick(index, e)}
            >
              <img src={slide.image} alt={slide.alt} />
            </a>
          ))}
        </div>

        {/* Next Arrow */}
        <button 
          onClick={nextSlide}
          className="carousel-arrow carousel-arrow-right"
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
