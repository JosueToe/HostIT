
const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-6 border-t-2 border-gray-600 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-white">HostIT</h3>
            <p className="text-gray-300 leading-relaxed mb-3 text-sm">
              Premium web hosting with beautiful, ready-made websites. Choose your perfect design and get online instantly.
            </p>
            <p className="text-gray-400 text-xs">
              © 2025 HostIT. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Services</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Premium Hosting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ready-Made Websites</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">24/7 Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Industries</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fitness & Wellness</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-4 pt-4 text-center text-gray-400 text-xs">
          <p>Built with ❤️ by HostIT Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
