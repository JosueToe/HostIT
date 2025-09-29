
import { Button } from "@/components/ui/button";
import { X, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createCheckoutSession } from "@/lib/stripe";

const SiteModal = ({ site, onClose }) => {
  const { toast } = useToast();

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[hsl(220,25%,12%)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[hsl(220,20%,20%)] shadow-2xl animate-scale-in transform transition-all duration-300">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-[hsl(220,20%,20%)]/90 rounded-full hover:bg-[hsl(220,20%,25%)] transition-all duration-200 hover:scale-110"
          >
            <X size={20} className="text-white" />
          </button>
          
          <img 
            src={site.thumbnail} 
            alt={site.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{site.name}</h2>
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30">
                {site.industry}
              </span>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">${site.price}<span className="text-lg text-white/60">/month</span></div>
              <div className="text-sm text-white/60">Monthly subscription</div>
            </div>
          </div>
          
          <p className="text-white/80 mb-6 text-lg leading-relaxed">
            {site.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">What's Included:</h3>
            <ul className="space-y-2">
              {site.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Check size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-[hsl(220,20%,20%)] pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Subscribe & Host - ${site.price}/month
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[hsl(220,20%,20%)] bg-[hsl(220,20%,20%)] text-white hover:bg-[hsl(220,20%,25%)] font-bold rounded-xl transition-all duration-200 hover:scale-105"
                onClick={handleLivePreview}
              >
                <ExternalLink size={16} className="mr-2" />
                Live Preview
              </Button>
            </div>
            
            <p className="text-sm text-white/60 mt-3 text-center">
              Premium hosting included. Secure payments by Stripe. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteModal;
