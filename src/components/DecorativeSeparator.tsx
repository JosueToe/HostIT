import { Diamond } from "lucide-react";

const DecorativeSeparator = () => {
  return (
    <div className="w-full py-16 bg-background">
      <div className="flex items-center justify-center w-full">
        {/* Left dots */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/50 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/70 rounded-full"></div>
        </div>
        
        {/* Left extending line */}
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-foreground/80 mx-4"></div>
        
        {/* Diamond icon */}
        <div className="mx-4">
          <Diamond className="w-6 h-6 text-foreground rotate-45" fill="currentColor" />
        </div>
        
        {/* Right extending line */}
        <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-foreground/20 to-foreground/80 mx-4"></div>
        
        {/* Right dots */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-foreground/70 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/50 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeSeparator;