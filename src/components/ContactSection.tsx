
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get Your <span className="animated-gradient">Premium</span> Hosting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
            Ready to get online? Request a custom estimate for your website. We provide yearly pricing 
            for hosting and maintenance tailored to your specific needs. All plans include premium hosting, 24/7 support, and lightning-fast performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Company/Business Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Business Name"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={5}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
               <Button 
                 type="submit" 
                 size="lg" 
                 className="w-full animated-gradient text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
               >
                 Send Message
               </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-medium">
                Ready to get a custom estimate for your website? Contact us directly for 
                personalized yearly pricing for hosting and maintenance. We provide everything you need: 
                beautiful designs, lightning-fast hosting, 24/7 support, and all the tools to succeed online.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary p-3 rounded-2xl border border-border">
                  <Mail className="text-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">Contact@hostIT.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-secondary p-3 rounded-2xl border border-border">
                  <Phone className="text-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">786-333-5331</p>
                </div>
              </div>
            </div>

             <div className="animated-gradient p-6 rounded-2xl text-white border border-border">
               <h4 className="font-bold text-lg mb-2">Custom Estimates</h4>
               <p className="text-white/90">
                 Get a personalized yearly quote for hosting and maintenance. 
                 Ready-made websites go live instantly, custom projects completed within 7-14 days with premium hosting included.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
