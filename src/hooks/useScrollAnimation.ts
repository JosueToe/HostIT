import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold, 
    once,
    margin: "0px 0px -100px 0px", // Trigger earlier on scroll
    amount: 0.1 // Trigger when just 10% visible (better for mobile)
  });

  return { ref, isInView };
};

