
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-tea-darkBrown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Hyderabad Tea House
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bringing you the finest selection of premium teas from across India, crafted with tradition and served with love.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/HyderabadTeaHouse/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-tea-brown">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/hyderabadteahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-tea-brown">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-tea-brown">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tea Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assam Tea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Darjeeling Tea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Green Tea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Herbal Blends</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chai Masala</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-tea-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  7-2-1669, Utopia-B/0606, Casa Paradiso,Sanath Nagar,Hyderabad,<br />
                  Hyderabad, Telangana,India, 500018
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tea-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9393837358</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-tea-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">hyderabadteahouse@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 NS CONSUMER PRODUCTS PRIVATE LIMITED. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
