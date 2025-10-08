import { Diamond } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DecorativeSeparator = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  return (
    <div className="w-full py-8 bg-transparent">
      <motion.div 
        className="flex items-center justify-center w-full"
        ref={ref}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Left dots */}
        <div className="flex items-center space-x-2">
          <motion.div 
            className="w-2 h-2 bg-blue-400/40 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(29, 78, 216, 0.4)", "rgba(30, 64, 175, 0.4)", "rgba(59, 130, 246, 0.4)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/50 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.5)", "rgba(29, 78, 216, 0.5)", "rgba(30, 64, 175, 0.5)", "rgba(59, 130, 246, 0.5)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/60 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.6)", "rgba(29, 78, 216, 0.6)", "rgba(30, 64, 175, 0.6)", "rgba(59, 130, 246, 0.6)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/70 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.7)", "rgba(29, 78, 216, 0.7)", "rgba(30, 64, 175, 0.7)", "rgba(59, 130, 246, 0.7)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          ></motion.div>
        </div>
        
        {/* Left extending line */}
        <motion.div 
          className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-blue-400/80 mx-4"
          animate={{ 
            background: [
              "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.8))",
              "linear-gradient(to right, transparent, rgba(29, 78, 216, 0.2), rgba(29, 78, 216, 0.8))",
              "linear-gradient(to right, transparent, rgba(30, 64, 175, 0.2), rgba(30, 64, 175, 0.8))",
              "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.8))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Diamond icon */}
        <div className="mx-4">
          <motion.div
            animate={{ 
              color: ["#3b82f6", "#1d4ed8", "#1e40af", "#3b82f6"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Diamond className="w-6 h-6 rotate-45" fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Right extending line */}
        <motion.div 
          className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-blue-400/20 to-blue-400/80 mx-4"
          animate={{ 
            background: [
              "linear-gradient(to left, transparent, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.8))",
              "linear-gradient(to left, transparent, rgba(29, 78, 216, 0.2), rgba(29, 78, 216, 0.8))",
              "linear-gradient(to left, transparent, rgba(30, 64, 175, 0.2), rgba(30, 64, 175, 0.8))",
              "linear-gradient(to left, transparent, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.8))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Right dots */}
        <div className="flex items-center space-x-2">
          <motion.div 
            className="w-2 h-2 bg-blue-400/70 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.7)", "rgba(29, 78, 216, 0.7)", "rgba(30, 64, 175, 0.7)", "rgba(59, 130, 246, 0.7)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/60 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.6)", "rgba(29, 78, 216, 0.6)", "rgba(30, 64, 175, 0.6)", "rgba(59, 130, 246, 0.6)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/50 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.5)", "rgba(29, 78, 216, 0.5)", "rgba(30, 64, 175, 0.5)", "rgba(59, 130, 246, 0.5)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-blue-400/40 rounded-full"
            animate={{ 
              backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(29, 78, 216, 0.4)", "rgba(30, 64, 175, 0.4)", "rgba(59, 130, 246, 0.4)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DecorativeSeparator;