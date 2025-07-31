
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  image: string;
  description: string;
  category: string;
}

const categoryProducts: Record<string, Product[]> = {
  'Assam Tea': [
    {
      id: 101,
      name: 'Royal Assam Black Tea',
      price: '₹450',
      originalPrice: '₹600',
      rating: 4.8,
      image: '🍃',
      description: 'Premium loose leaf Assam tea with rich malty flavor',
      category: 'Assam Tea'
    },
    {
      id: 102,
      name: 'Assam Gold Blend',
      price: '₹520',
      originalPrice: '₹650',
      rating: 4.7,
      image: '🍃',
      description: 'Golden tip Assam tea with robust character',
      category: 'Assam Tea'
    },
    {
      id: 103,
      name: 'Morning Assam',
      price: '₹380',
      originalPrice: '₹480',
      rating: 4.6,
      image: '🍃',
      description: 'Perfect breakfast tea with strong aroma',
      category: 'Assam Tea'
    }
  ],
  'Darjeeling Tea': [
    {
      id: 201,
      name: 'Himalayan Darjeeling',
      price: '₹650',
      originalPrice: '₹800',
      rating: 4.9,
      image: '🏔️',
      description: 'First flush Darjeeling with delicate muscatel notes',
      category: 'Darjeeling Tea'
    },
    {
      id: 202,
      name: 'Summer Darjeeling',
      price: '₹580',
      originalPrice: '₹720',
      rating: 4.8,
      image: '🏔️',
      description: 'Second flush with full-bodied flavor',
      category: 'Darjeeling Tea'
    }
  ],
  'Herbal Blends': [
    {
      id: 301,
      name: 'Chamomile Dream',
      price: '₹300',
      originalPrice: '₹400',
      rating: 4.6,
      image: '🌿',
      description: 'Soothing caffeine-free herbal blend',
      category: 'Herbal Blends'
    },
    {
      id: 302,
      name: 'Peppermint Fresh',
      price: '₹320',
      originalPrice: '₹420',
      rating: 4.5,
      image: '🌿',
      description: 'Refreshing mint tea for digestion',
      category: 'Herbal Blends'
    }
  ],
  'Chai Masala': [
    {
      id: 401,
      name: 'Hyderabadi Chai Masala',
      price: '₹350',
      originalPrice: '₹450',
      rating: 4.7,
      image: '🧄',
      description: 'Traditional spice blend from old city recipes',
      category: 'Chai Masala'
    },
    {
      id: 402,
      name: 'Royal Masala Chai',
      price: '₹420',
      originalPrice: '₹520',
      rating: 4.8,
      image: '🧄',
      description: 'Premium spiced tea with cardamom and cinnamon',
      category: 'Chai Masala'
    }
  ],
  'Green Tea': [
    {
      id: 501,
      name: 'Wellness Green Tea',
      price: '₹400',
      originalPrice: '₹500',
      rating: 4.6,
      image: '🍵',
      description: 'Organic green tea rich in antioxidants',
      category: 'Green Tea'
    },
    {
      id: 502,
      name: 'Jasmine Green Tea',
      price: '₹480',
      originalPrice: '₹600',
      rating: 4.7,
      image: '🍵',
      description: 'Delicate green tea with jasmine flowers',
      category: 'Green Tea'
    }
  ],
  'Tea Accessories': [
    {
      id: 601,
      name: 'Ceramic Tea Set',
      price: '₹1200',
      originalPrice: '₹1500',
      rating: 4.8,
      image: '🫖',
      description: 'Premium ceramic teapot with cups',
      category: 'Tea Accessories'
    },
    {
      id: 602,
      name: 'Tea Infuser',
      price: '₹250',
      originalPrice: '₹350',
      rating: 4.5,
      image: '🫖',
      description: 'Stainless steel tea strainer',
      category: 'Tea Accessories'
    }
  ]
};

interface CategoryProductsProps {
  category: string;
  onBack: () => void;
}

const CategoryProducts = ({ category, onBack }: CategoryProductsProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const products = categoryProducts[category] || [];

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Coming Soon",
      description: "This feature is coming soon!",
    });
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-tea-darkBrown mb-4">
            {category}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium {category.toLowerCase()} collection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
      </div>
    </div>
  );
};

export default CategoryProducts;
