
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";
import SiteModal from "./SiteModal";

const portfolioSites = [
  {
    id: 1,
    name: "Bella's Italian Restaurant",
    industry: "Restaurant",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    description: "Modern restaurant website with online reservations and menu showcase",
    price: 29,
    features: ["Premium Hosting Included", "SSL Certificate", "Daily Backups", "24/7 Support", "CDN Performance"]
  },
  {
    id: 2,
    name: "TG Telecomm",
    industry: "Telecommunications",
    thumbnail: "/lovable-uploads/c340eeba-5ce9-4d41-a0b5-520415d2c714.png",
    description: "Professional telecommunications website with business connectivity services and fast support",
    price: 42,
    features: ["99.9% Uptime Guarantee", "Advanced Security", "Email Hosting", "Domain Management", "Performance Monitoring"]
  },
  {
    id: 3,
    name: "SoloLaunch",
    industry: "Technology",
    thumbnail: "/lovable-uploads/963bc961-02a9-421f-824b-2d95a0546f0b.png",
    description: "AI-powered startup builder with complete business foundation tools and branding",
    price: 45,
    features: ["Cloud Hosting", "Auto-scaling", "Git Integration", "Staging Environment", "API Management"]
  },
  {
    id: 4,
    name: "Artisan Coffee Co.",
    industry: "Coffee Shop",
    thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    description: "Cozy coffee shop website with online ordering and location finder",
    price: 27,
    features: ["Lightning-fast Loading", "Mobile Optimized", "SEO Optimized", "Analytics Dashboard", "Regular Updates"]
  },
  {
    id: 5,
    name: "Green Thumb Gardens",
    industry: "Landscaping",
    thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    description: "Professional landscaping website showcasing beautiful garden designs",
    price: 32,
    features: ["Global CDN", "Image Optimization", "Database Hosting", "Form Processing", "Security Monitoring"]
  },
  {
    id: 6,
    name: "Urban Dental Care",
    industry: "Healthcare",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
    description: "Modern dental practice website with appointment booking system",
    price: 37,
    features: ["HIPAA Compliance", "Encrypted Hosting", "Automatic Backups", "Uptime Monitoring", "Technical Support"]
  }
];

const PortfolioGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSite, setSelectedSite] = useState(null);

  const filteredSites = portfolioSites.filter(site =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="portfolio" className="pt-8 pb-12 bg-[hsl(220,30%,8%)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Premium <span className="text-blue-400">Website</span> Collection
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-semibold">
            Choose from our professionally designed websites with premium hosting included. 
            All sites come with 24/7 support, lightning-fast performance, and regular updates.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-16">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-12 py-4 text-lg bg-[hsl(220,25%,12%)] text-white placeholder:text-white/60 rounded-full w-full transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            style={{ border: '2px solid white' }}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-all duration-200 hover:scale-110">
            <Search className="text-primary-foreground" size={20} />
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredSites.map((site, index) => (
            <div
              key={site.id}
              className="bg-[hsl(220,25%,12%)] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover-scale cursor-pointer border border-[hsl(220,20%,20%)] hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSite(site)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={site.thumbnail} 
                  alt={site.name}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{site.name}</h3>
                <p className="text-white/80 mb-4 line-clamp-2 font-medium">{site.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${site.price}<span className="text-sm text-white/60">/month</span></span>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSite(site);
                    }}
                  >
                    View Details
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-white/80 font-semibold">
              No websites found matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>

      {/* Site Modal */}
      {selectedSite && (
        <SiteModal 
          site={selectedSite} 
          onClose={() => setSelectedSite(null)} 
        />
      )}
    </section>
  );
};

export default PortfolioGrid;
