
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone, MapPin, Package, Heart } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile = ({ isOpen, onClose }: UserProfileProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      console.log('User logged in:', loginForm.email);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {isLoggedIn ? 'My Account' : 'Login / Sign Up'}
          </DialogTitle>
        </DialogHeader>
        
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-tea-brown hover:bg-tea-darkBrown">
              Login
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <span className="text-tea-brown cursor-pointer hover:underline">Sign up here</span>
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-tea-cream/30 rounded-lg">
              <User className="h-8 w-8 text-tea-brown" />
              <div>
                <h3 className="font-medium">Welcome back!</h3>
                <p className="text-sm text-gray-600">{loginForm.email}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                My Orders
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Addresses
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </div>
            
            <Button 
              onClick={handleLogout}
              variant="outline" 
              className="w-full border-red-200 text-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
