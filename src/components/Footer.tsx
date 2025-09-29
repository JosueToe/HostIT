
const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3">HostIT</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Premium web hosting with beautiful, ready-made websites. Choose your perfect design and get online instantly.
            </p>
            <p className="text-muted-foreground text-sm">
              © 2025 HostIT. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Premium Hosting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ready-Made Websites</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">24/7 Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Industries</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Fitness & Wellness</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground text-sm">
          <p>Built with ❤️ by HostIT Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
