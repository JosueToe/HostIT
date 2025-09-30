
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
    <section id="portfolio" className="pt-16 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900">
            Our <span className="animated-gradient">Portfolio</span> & Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Explore our portfolio of professionally designed websites we've created and hosted for real customers. 
            Existing customers can manage their subscriptions and payments here. See what we've built for others and get inspired for your own project.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-16">
          <Input
            placeholder="Search portfolio or find your site..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-6 pr-12 py-4 text-lg bg-white text-gray-900 placeholder:text-gray-400 rounded-full w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 focus:border-blue-500 shadow-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-all duration-200 hover:scale-110">
            <Search className="text-white" size={20} />
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site, index) => (
            <div
              key={site.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 hover:border-blue-200 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSite(site)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={site.thumbnail} 
                  alt={site.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {site.industry}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">{site.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 font-body leading-relaxed">{site.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">${site.price * 12}</span>
                    <span className="text-gray-500 font-body">/year</span>
                    <div className="text-sm text-gray-400 font-body">${site.price}/month</div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-4 py-1.5 text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSite(site);
                    }}
                  >
                    Manage
                    <ExternalLink size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 font-body">
              No portfolio websites found matching your search. Try different keywords or browse all our work.
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
