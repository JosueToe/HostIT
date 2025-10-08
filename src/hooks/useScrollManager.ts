import { useEffect, useRef, useCallback } from 'react';

export const useScrollManager = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isScrollingHero = useRef(false);
  const rafId = useRef<number>();

  const handleWheel = useCallback((e: WheelEvent) => {
    const heroElement = heroRef.current;
    
    if (!heroElement) return;

    // Cancel previous RAF if still pending
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const heroRect = heroElement.getBoundingClientRect();
      
      // Check if hero carousel is in view with more precise bounds
      const heroInView = heroRect.top < window.innerHeight * 0.8 && heroRect.bottom > window.innerHeight * 0.2;
      
      // If hero is in view and user is scrolling, scroll horizontally in hero
      if (heroInView && Math.abs(e.deltaY) > 5) { // Only for significant scroll
        e.preventDefault();
        isScrollingHero.current = true;
        heroElement.scrollLeft += e.deltaY * 0.8; // Reduced scroll speed
        
        // If we've reached the end of hero scroll, allow vertical scroll
        if (heroElement.scrollLeft >= heroElement.scrollWidth - heroElement.clientWidth) {
          isScrollingHero.current = false;
          window.scrollBy(0, e.deltaY);
        }
        // If we've reached the beginning of hero scroll, allow vertical scroll
        else if (heroElement.scrollLeft <= 0) {
          isScrollingHero.current = false;
          window.scrollBy(0, e.deltaY);
        }
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleWheel]);

  return { heroRef };
};
