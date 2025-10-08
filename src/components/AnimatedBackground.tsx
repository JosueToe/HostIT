import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'portfolio' | 'contact' | 'hero';
}

const AnimatedBackground = ({ variant = 'portfolio' }: AnimatedBackgroundProps) => {
  // Adjust opacity and intensity based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          shapeOpacity: 0.18, // Increased opacity for better visibility
          lineOpacity: 0.25,
          particleOpacity: 0.35,
          flipped: true // Add flipped flag for hero
        };
      case 'contact':
        return {
          shapeOpacity: 0.12,
          lineOpacity: 0.2,
          particleOpacity: 0.3,
          flipped: false
        };
      default: // portfolio
        return {
          shapeOpacity: 0.15,
          lineOpacity: 0.25,
          particleOpacity: 0.4,
          flipped: false
        };
    }
  };

  const variantStyles = getVariantStyles();
  const shapes = [
    {
      id: 1,
      type: 'blob',
      color: `rgba(59, 130, 246, ${variantStyles.shapeOpacity})`, // Soft blue
      size: { width: variantStyles.flipped ? '280px' : '200px', height: variantStyles.flipped ? '200px' : '150px' },
      position: variantStyles.flipped ? { top: '8%', right: '2%' } : { top: '12%', left: '5%' },
      animation: {
        x: variantStyles.flipped ? [0, -40, 30, 0] : [0, 30, -20, 0],
        y: [0, -20, 30, 0],
        rotate: variantStyles.flipped ? [0, -8, 5, 0] : [0, 5, -3, 0],
        scale: [1, 1.2, 0.8, 1],
        duration: 20,
        ease: 'easeInOut'
      }
    },
    {
      id: 2,
      type: 'blob',
      color: `rgba(255, 255, 255, ${variantStyles.shapeOpacity * 0.8})`, // Soft white
      size: { width: variantStyles.flipped ? '250px' : '180px', height: variantStyles.flipped ? '160px' : '120px' },
      position: variantStyles.flipped ? { top: '15%', left: '3%' } : { top: '18%', right: '8%' },
      animation: {
        x: variantStyles.flipped ? [0, 35, -25, 0] : [0, -25, 20, 0],
        y: [0, 25, -15, 0],
        rotate: variantStyles.flipped ? [0, 6, -8, 0] : [0, -4, 6, 0],
        scale: [1, 0.7, 1.3, 1],
        duration: 25,
        ease: 'easeInOut'
      }
    },
    {
      id: 3,
      type: 'blob',
      color: `rgba(147, 197, 253, ${variantStyles.shapeOpacity * 1.3})`, // Light blue
      size: { width: variantStyles.flipped ? '220px' : '160px', height: variantStyles.flipped ? '180px' : '140px' },
      position: variantStyles.flipped ? { top: '35%', right: '1%' } : { top: '40%', left: '3%' },
      animation: {
        x: variantStyles.flipped ? [0, -20, 40, 0] : [0, 15, -30, 0],
        y: [0, -25, 20, 0],
        rotate: variantStyles.flipped ? [0, -5, 7, 0] : [0, 3, -5, 0],
        scale: [1, 1.25, 0.75, 1],
        duration: 18,
        ease: 'easeInOut'
      }
    },
    {
      id: 4,
      type: 'blob',
      color: `rgba(29, 78, 216, ${variantStyles.shapeOpacity * 0.9})`, // Darker blue
      size: { width: variantStyles.flipped ? '200px' : '140px', height: variantStyles.flipped ? '140px' : '100px' },
      position: variantStyles.flipped ? { top: '50%', left: '8%' } : { top: '55%', right: '12%' },
      animation: {
        x: variantStyles.flipped ? [0, 30, -35, 0] : [0, -20, 25, 0],
        y: [0, 20, -30, 0],
        rotate: variantStyles.flipped ? [0, 8, -6, 0] : [0, -6, 4, 0],
        scale: [1, 0.8, 1.2, 1],
        duration: 22,
        ease: 'easeInOut'
      }
    },
    {
      id: 5,
      type: 'blob',
      color: `rgba(191, 219, 254, ${variantStyles.shapeOpacity})`, // Very light blue
      size: { width: variantStyles.flipped ? '300px' : '220px', height: variantStyles.flipped ? '220px' : '160px' },
      position: variantStyles.flipped ? { bottom: '25%', right: '3%' } : { bottom: '30%', left: '8%' },
      animation: {
        x: variantStyles.flipped ? [0, -45, 20, 0] : [0, 35, -15, 0],
        y: [0, -15, 25, 0],
        rotate: variantStyles.flipped ? [0, -6, 4, 0] : [0, 4, -2, 0],
        scale: [1, 1.1, 0.9, 1],
        duration: 28,
        ease: 'easeInOut'
      }
    },
    {
      id: 6,
      type: 'blob',
      color: `rgba(30, 64, 175, ${variantStyles.shapeOpacity * 0.7})`, // Deep blue
      size: { width: variantStyles.flipped ? '260px' : '190px', height: variantStyles.flipped ? '180px' : '130px' },
      position: variantStyles.flipped ? { bottom: '35%', left: '2%' } : { bottom: '40%', right: '5%' },
      animation: {
        x: variantStyles.flipped ? [0, 40, -25, 0] : [0, -30, 20, 0],
        y: [0, 30, -20, 0],
        rotate: variantStyles.flipped ? [0, 5, -7, 0] : [0, -3, 5, 0],
        scale: [1, 0.75, 1.25, 1],
        duration: 24,
        ease: 'easeInOut'
      }
    },
    // Additional shapes for hero section
    ...(variantStyles.flipped ? [
      {
        id: 7,
        type: 'blob',
        color: `rgba(59, 130, 246, ${variantStyles.shapeOpacity * 0.6})`, // Soft blue
        size: { width: '180px', height: '140px' },
        position: { top: '25%', right: '15%' },
        animation: {
          x: [0, -25, 20, 0],
          y: [0, -15, 20, 0],
          rotate: [0, -4, 3, 0],
          scale: [1, 1.1, 0.9, 1],
          duration: 26,
          ease: 'easeInOut'
        }
      },
      {
        id: 8,
        type: 'blob',
        color: `rgba(147, 197, 253, ${variantStyles.shapeOpacity * 0.8})`, // Light blue
        size: { width: '160px', height: '120px' },
        position: { top: '60%', left: '15%' },
        animation: {
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          rotate: [0, 5, -4, 0],
          scale: [1, 0.9, 1.1, 1],
          duration: 30,
          ease: 'easeInOut'
        }
      },
      {
        id: 9,
        type: 'blob',
        color: `rgba(255, 255, 255, ${variantStyles.shapeOpacity * 0.5})`, // Soft white
        size: { width: '140px', height: '100px' },
        position: { bottom: '45%', right: '20%' },
        animation: {
          x: [0, -20, 25, 0],
          y: [0, 15, -20, 0],
          rotate: [0, -3, 4, 0],
          scale: [1, 1.2, 0.8, 1],
          duration: 32,
          ease: 'easeInOut'
        }
      },
      {
        id: 10,
        type: 'blob',
        color: `rgba(29, 78, 216, ${variantStyles.shapeOpacity * 0.7})`, // Darker blue
        size: { width: '200px', height: '150px' },
        position: { bottom: '50%', left: '25%' },
        animation: {
          x: [0, 25, -30, 0],
          y: [0, -25, 20, 0],
          rotate: [0, 6, -5, 0],
          scale: [1, 0.8, 1.2, 1],
          duration: 28,
          ease: 'easeInOut'
        }
      }
    ] : [])
  ];

  const lines = [
    {
      id: 1,
      color: `rgba(59, 130, 246, ${variantStyles.lineOpacity})`, // Soft blue
      path: variantStyles.flipped ? 'M 1200,20 Q 1000,5 800,25 T 400,15' : 'M 0,20 Q 200,5 400,25 T 800,15',
      animation: {
        pathLength: [0, 1, 0],
        opacity: variantStyles.flipped ? [0, 0.8, 0] : [0, 0.6, 0],
        duration: 15,
        ease: 'easeInOut'
      }
    },
    {
      id: 2,
      color: `rgba(255, 255, 255, ${variantStyles.lineOpacity * 0.9})`, // Soft white
      path: variantStyles.flipped ? 'M 1200,80 Q 900,60 600,85 T 0,75' : 'M 0,80 Q 300,60 600,85 T 1200,75',
      animation: {
        pathLength: [0, 1, 0],
        opacity: variantStyles.flipped ? [0, 0.7, 0] : [0, 0.5, 0],
        duration: 18,
        ease: 'easeInOut'
      }
    },
    // Additional line for hero section
    ...(variantStyles.flipped ? [
      {
        id: 3,
        color: `rgba(147, 197, 253, ${variantStyles.lineOpacity * 0.7})`, // Light blue
        path: 'M 1200,50 Q 800,35 400,55 T 0,45',
        animation: {
          pathLength: [0, 1, 0],
          opacity: [0, 0.6, 0],
          duration: 22,
          ease: 'easeInOut'
        }
      }
    ] : [])
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Blob Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-sm animated-bg-shape"
          style={{
            width: shape.size.width,
            height: shape.size.height,
            backgroundColor: shape.color,
            top: shape.position.top,
            left: shape.position.left,
            right: shape.position.right,
            bottom: shape.position.bottom,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          }}
          animate={{
            x: shape.animation.x,
            y: shape.animation.y,
            rotate: shape.animation.rotate,
            scale: shape.animation.scale
          }}
          transition={{
            duration: shape.animation.duration,
            ease: shape.animation.ease as any,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}

      {/* Animated Flowing Lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none"
      >
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={line.path}
            stroke={line.color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="animated-bg-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: line.animation.pathLength,
              opacity: line.animation.opacity
            }}
            transition={{
              duration: line.animation.duration,
              ease: line.animation.ease as any,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </svg>

      {/* Additional floating particles */}
      {[...Array(variantStyles.flipped ? 12 : 8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-30"
          style={{
            backgroundColor: i % 3 === 0 ? `rgba(59, 130, 246, ${variantStyles.particleOpacity})` : i % 3 === 1 ? `rgba(255, 255, 255, ${variantStyles.particleOpacity * 0.8})` : `rgba(147, 197, 253, ${variantStyles.particleOpacity})`,
            top: `${Math.random() * 100}%`,
            left: variantStyles.flipped ? `${100 - Math.random() * 100}%` : `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -25, 0],
            x: variantStyles.flipped ? [0, -15, 0] : [0, 15, 0],
            opacity: variantStyles.flipped ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 12 + i * 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
