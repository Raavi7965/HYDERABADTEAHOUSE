
import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import SearchModal from './SearchModal';
import UserProfile from './UserProfile';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="https://m.media-amazon.com/images/I/51VolY+rduL.jpg" alt="Hyderabad Tea House Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-tea-brown transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-tea-brown transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-tea-brown transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-tea-brown transition-colors">Contact</a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex"
                onClick={() => setIsProfileOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>
              <CartSidebar>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-tea-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </CartSidebar>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-tea-brown transition-colors">Home</a>
                <a href="#products" className="text-gray-700 hover:text-tea-brown transition-colors">Products</a>
                <a href="#about" className="text-gray-700 hover:text-tea-brown transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-tea-brown transition-colors">Contact</a>
                <div className="flex space-x-4 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsProfileOpen(true)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <UserProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};

export default Header;
