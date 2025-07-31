
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartSidebarProps {
  children: React.ReactNode;
}

const CartSidebar = ({ children }: CartSidebarProps) => {
  const { items, removeFromCart, updateQuantity, totalItems, clearCart } = useCart();
  const { toast } = useToast();

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Proceeding to checkout...",
    });
    // Here you would integrate with payment gateway
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="text-2xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-tea-brown font-bold">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total: ₹{calculateTotal()}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700"
                >
                  Clear Cart
                </Button>
              </div>
              <Button 
                className="w-full bg-tea-brown hover:bg-tea-darkBrown"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
