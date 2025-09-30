
import { Button } from "@/components/ui/button";
import { X, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createCheckoutSession } from "@/lib/stripe";
import { useRef, useEffect } from "react";

const SiteModal = ({ site, onClose }) => {
  const { toast } = useToast();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handlePurchase = async () => {
    try {
      toast({
        title: "Redirecting to Checkout",
        description: "Opening Stripe Checkout in a new tab to complete your subscription.",
      });
      
      // Create Stripe checkout session
      const result = await createCheckoutSession(
        site.id.toString(), 
        site.name, 
        site.price
      );
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      console.log(`Started monthly subscription for ${site.name} at $${site.price}/month`);
      
    } catch (error) {
      console.error('Purchase error:', error);
      toast({
        title: "Error",
        description: "There was an issue processing your subscription. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLivePreview = () => {
    // Create a mock URL for the live preview - in real implementation, this would be the actual site URL
    const mockSiteUrl = `https://${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.demo-site.com`;
    
    toast({
      title: "Opening Live Preview",
      description: "Opening live preview in new tab",
    });
    
    // Open the site in a new tab
    window.open(mockSiteUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div ref={modalRef} className="bg-white rounded-3xl max-w-2xl w-full border border-gray-200 shadow-2xl animate-scale-in">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110"
          >
            <X size={20} className="text-gray-700" />
          </button>
          
          <img 
            src={site.thumbnail} 
            alt={site.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">{site.name}</h2>
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {site.industry}
              </span>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">${site.price * 12}<span className="text-lg text-gray-500">/year</span></div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed font-body">
            {site.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-display font-semibold mb-4 text-gray-900">What's Included:</h3>
            <ul className="space-y-3">
              {site.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 animate-slide-in font-body" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Subscribe - ${site.price * 12}/year
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-semibold rounded-full transition-all duration-200 hover:scale-105"
                onClick={handleLivePreview}
              >
                <ExternalLink size={16} className="mr-2" />
                Live Preview
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center font-body">
              Premium hosting included. Secure payments by Stripe. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteModal;
