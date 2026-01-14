
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";
import SiteModal from "./SiteModal";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";

const portfolioSites = [
  {
    id: 1,
    name: "RSG Mechanics",
    industry: "Automotive",
    thumbnail: "/lovable-uploads/rsg-mechanics-screenshot.png",
    description: "Professional mobile auto repair service website with service scheduling and location-based services",
    yearlyPrice: 120,
    monthlyPrice: 10,
    features: ["Premium Hosting Included", "SSL Certificate", "Daily Backups", "24/7 Support", "CDN Performance"]
  },
  {
    id: 2,
    name: "TG Telecomm",
    industry: "Telecommunications",
    thumbnail: "/lovable-uploads/c340eeba-5ce9-4d41-a0b5-520415d2c714.png",
    description: "Professional telecommunications website with business connectivity services and fast support",
    yearlyPrice: 120,
    monthlyPrice: 10,
    features: ["99.9% Uptime Guarantee", "Advanced Security", "Email Hosting", "Domain Management", "Performance Monitoring"]
  },
  {
    id: 3,
    name: "SoloLaunch",
    industry: "Technology",
    thumbnail: "/lovable-uploads/963bc961-02a9-421f-824b-2d95a0546f0b.png",
    description: "AI-powered startup builder with complete business foundation tools and branding",
    yearlyPrice: 240,
    monthlyPrice: 20,
    features: ["Cloud Hosting", "Auto-scaling", "Git Integration", "Staging Environment", "API Management"]
  },
  {
    id: 4,
    name: "Paladin MMA",
    industry: "MMA Academy",
    thumbnail: "/lovable-uploads/paladin-mma-screenshot.png",
    description: "MMA Academy in Miami/Hialeah offering specialized programs for all ages and fitness levels, from early morning MMA/Crosstraining to comprehensive adult and kids programs",
    yearlyPrice: 120,
    monthlyPrice: 10,
    features: ["Lightning-fast Loading", "Mobile Optimized", "SEO Optimized", "Analytics Dashboard", "Regular Updates"]
  },
  {
    id: 5,
    name: "Black Car Service Miami",
    industry: "Transportation",
    thumbnail: "/lovable-uploads/black-car-service-miami-screenshot.png",
    description: "Your Ultimate Luxury Drive Awaits in Miami - Premium black car service for airport transfers, executive transport, and special occasions",
    yearlyPrice: 145,
    monthlyPrice: 12.08,
    features: ["Premium Hosting Included", "SSL Certificate", "Daily Backups", "24/7 Support", "CDN Performance"]
  },
  {
    id: 6,
    name: "Nu Al Andalusia",
    industry: "Government Services",
    thumbnail: "/lovable-uploads/nu-al-andalusia-screenshot.png",
    description: "Innovative government services provider transforming the way clients do business with comprehensive solutions and consulting",
    yearlyPrice: 275,
    monthlyPrice: 22.92,
    features: ["Domain Management", "Web Creation & Design", "Premium Hosting", "SSL Certificate", "Daily Backups", "24/7 Support", "CDN Performance"]
  }
];

const PortfolioGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSite, setSelectedSite] = useState(null);
  const { ref, isInView } = useScrollAnimation(0.1);

  const filteredSites = portfolioSites.filter(site =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <motion.section 
        id="portfolio" 
        className="pt-16 pb-20 bg-transparent relative overflow-hidden"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background */}
        <AnimatedBackground variant="portfolio" />
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Main Glassmorphism Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' }}>
               Our <span className="animated-gradient">Portfolio</span> & Payments
             </h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
              Explore our portfolio of professionally designed websites we've created and hosted for real customers. 
              Existing customers can manage their subscriptions and payments here. See what we've built for others and get inspired for your own project.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="relative max-w-lg mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Input
              placeholder="Search portfolio or find your site..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
               className="pl-6 pr-12 py-4 text-lg bg-white/10 backdrop-blur-md text-white placeholder:text-gray-400 rounded-full w-full transition-all duration-200 focus:ring-2 focus:ring-blue-400/50 border-2 border-white/20 focus:border-blue-400 shadow-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-all duration-200 hover:scale-110">
              <Search className="text-white" size={20} />
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer border border-white/20 hover:border-white/30 group max-w-md mx-auto w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              onClick={() => setSelectedSite(site)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={site.thumbnail} 
                  alt={`${site.name} - ${site.industry} website design and hosting portfolio example by Host-IT`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {site.industry}
                </div>
              </div>
              
              <div className="p-6">
                 <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '600', letterSpacing: '-0.01em' }}>{site.name}</h3>
                <p className="text-gray-200 mb-6 line-clamp-2 font-body leading-relaxed">{site.description}</p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '700', letterSpacing: '-0.01em' }}>${site.yearlyPrice}</span>
                    <span className="text-gray-300 font-body">/year</span>
                    <span className="text-sm text-gray-400 font-body ml-auto">${site.monthlyPrice}/mo</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-2.5 text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSite(site);
                    }}
                  >
                    Manage Subscription
                    <ExternalLink size={16} />
                  </Button>
                  <p className="text-[9px] text-gray-400 text-center font-body leading-tight mt-2">
                    By paying, you agree to our{" "}
                    <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" onClick={(e) => e.stopPropagation()}>Terms and Conditions</a>,{" "}
                    <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" onClick={(e) => e.stopPropagation()}>Terms of Service</a>, and{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" onClick={(e) => e.stopPropagation()}>Privacy Policy</a>. 
                    All services described are covered.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>

          {filteredSites.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-xl text-gray-300 font-body">
                No portfolio websites found matching your search. Try different keywords or browse all our work.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Site Modal */}
      {selectedSite && (
        <SiteModal 
          site={selectedSite} 
          onClose={() => setSelectedSite(null)} 
        />
      )}
    </motion.section>
  );
};

export default PortfolioGrid;
