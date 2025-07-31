
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const featuredProducts = [
  {
    id: 1,
    name: 'Royal Assam Black Tea',
    price: '₹450',
    originalPrice: '₹600',
    rating: 4.8,
    image: '🍃',
    badge: 'Bestseller',
    description: 'Premium loose leaf Assam tea with rich malty flavor'
  },
  {
    id: 2,
    name: 'Himalayan Darjeeling',
    price: '₹650',
    originalPrice: '₹800',
    rating: 4.9,
    image: '🏔️',
    badge: 'Premium',
    description: 'First flush Darjeeling with delicate muscatel notes'
  },
  {
    id: 3,
    name: 'Hyderabadi Chai Masala',
    price: '₹350',
    originalPrice: '₹450',
    rating: 4.7,
    image: '🧄',
    badge: 'Local Favorite',
    description: 'Traditional spice blend from old city recipes'
  },
  {
    id: 4,
    name: 'Wellness Green Tea',
    price: '₹400',
    originalPrice: '₹500',
    rating: 4.6,
    image: '🍵',
    badge: 'Healthy Choice',
    description: 'Organic green tea rich in antioxidants'
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    toast({
      title: "Coming Soon",
      description: "This feature is coming soon!",
    });
  };

  return (
    <section className="py-20 bg-tea-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-tea-darkBrown mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked selections from our premium tea collection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-tea-gold/20 to-tea-brown/20 h-48 flex items-center justify-center">
                    <div className="text-8xl">{product.image}</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-tea-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-tea-darkBrown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-tea-gold fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-tea-brown">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-tea-brown hover:bg-tea-darkBrown text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-tea-brown text-tea-brown hover:bg-tea-brown hover:text-white px-8 py-3"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
