
import { Button } from "@/components/ui/button";
import { X, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRef, useEffect } from "react";

const SiteModal = ({ site, onClose }) => {
  const { toast } = useToast();
  const modalRef = useRef(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePurchase = async () => {
    // Map site names to their Stripe payment links
    const stripePaymentLinks = {
      "RSG Mechanics": "https://buy.stripe.com/cNi00jc1Cc913Ws6QCdIA03",
      "SoloLaunch": "https://buy.stripe.com/5kQeVd6Hia0T3Ws7UGdIA04",
      "TG Telecomm": "https://buy.stripe.com/7sY28r5De4Gzdx27UGdIA05",
      "Paladin MMA": "https://buy.stripe.com/4gMaEX8Pqfld78E7UGdIA06"
    };
    
    const paymentUrl = stripePaymentLinks[site.name];
    
    if (paymentUrl) {
      toast({
        title: "Redirecting to Checkout",
        description: "Opening Stripe Checkout in a new tab to complete your subscription.",
      });
      
      // Open the Stripe payment link in a new tab
      window.open(paymentUrl, '_blank', 'noopener,noreferrer');
    } else {
      // For sites without a specific payment link, show a message
      toast({
        title: "Coming Soon",
        description: "Payment option for this site is being set up. Please contact us for more information.",
        variant: "default",
      });
    }
  };

  const handleLivePreview = () => {
    // Map site names to their actual URLs
    const siteUrlMap = {
      "RSG Mechanics": "https://rsgmechanics.com",
      "TG Telecomm": "https://tgtelecomm.com/",
      "SoloLaunch": "https://sololaunch.app",
      "Paladin MMA": "https://paladinmma.com",
      "Green Thumb Gardens": "https://green-garden.com"
    };
    
    const siteUrl = siteUrlMap[site.name] || `https://${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.demo-site.com`;
    
    toast({
      title: "Opening Live Preview",
      description: "Opening live preview in new tab",
    });
    
    // Open the actual site in a new tab
    window.open(siteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-3xl max-w-2xl w-full border border-gray-200 shadow-2xl animate-scale-in my-8 max-h-[90vh] overflow-y-auto">
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
              <div className="text-3xl font-bold text-blue-600">${site.yearlyPrice}<span className="text-lg text-gray-500">/year</span></div>
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
                Subscribe - ${site.yearlyPrice}/year
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
