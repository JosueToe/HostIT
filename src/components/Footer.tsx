
const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-6 border-t-2 border-gray-600 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '700' }}>
              <strong>Host-IT Premium Hosting</strong>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3 text-sm">
              <strong>Premium web hosting</strong> with beautiful, ready-made websites. Choose your perfect design and get online instantly with <strong>professional website hosting services</strong>.
            </p>
            <p className="text-gray-400 text-xs">
              © 2025 Host-IT. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white text-sm" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '600' }}>
              <strong>Our Services</strong>
            </h3>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Premium Hosting</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Ready-Made Websites</strong></a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors"><strong>24/7 Support</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Custom Development</strong></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white text-sm" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '600' }}>
              <strong>Industries We Serve</strong>
            </h3>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Restaurants</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Healthcare</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Technology</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Automotive</strong></a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors"><strong>Telecommunications</strong></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-4 pt-4 text-center text-gray-400 text-xs">
          <p>Built with ❤️ by <strong>Host-IT Professional Web Development Team</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
