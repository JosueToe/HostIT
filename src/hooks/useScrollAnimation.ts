import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold, 
    once,
    margin: "-50px 0px -50px 0px", // Reduced margin for better performance
    amount: 0.3 // Only trigger when 30% visible
  });

  return { ref, isInView };
};

