
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 1,
    name: 'Assam Tea',
    description: 'Rich, malty flavor with robust character',
    icon: '🍃',
    bgColor: 'bg-tea-brown/10',
    borderColor: 'border-tea-brown/20'
  },
  {
    id: 2,
    name: 'Darjeeling Tea',
    description: 'Delicate muscatel flavor from the hills',
    icon: '🏔️',
    bgColor: 'bg-tea-green/10',
    borderColor: 'border-tea-green/20'
  },
  {
    id: 3,
    name: 'Herbal Blends',
    description: 'Caffeine-free wellness teas',
    icon: '🌿',
    bgColor: 'bg-tea-lightGreen/10',
    borderColor: 'border-tea-lightGreen/20'
  },
  {
    id: 4,
    name: 'Chai Masala',
    description: 'Traditional spiced tea blends',
    icon: '🧄',
    bgColor: 'bg-tea-gold/10',
    borderColor: 'border-tea-gold/20'
  },
  {
    id: 5,
    name: 'Green Tea',
    description: 'Antioxidant-rich healthy options',
    icon: '🍵',
    bgColor: 'bg-tea-green/10',
    borderColor: 'border-tea-green/20'
  },
  {
    id: 6,
    name: 'Tea Accessories',
    description: 'Premium teapots and accessories',
    icon: '🫖',
    bgColor: 'bg-tea-brown/10',
    borderColor: 'border-tea-brown/20'
  }
];

interface ProductCategoriesProps {
  onCategorySelect?: (category: string) => void;
}

const ProductCategories = ({ onCategorySelect }: ProductCategoriesProps) => {
  const handleExploreCollection = (categoryName: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-tea-darkBrown mb-4">
            Our Tea Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated selection of premium teas, each with its own unique character and story
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className={`${category.bgColor} ${category.borderColor} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-tea-darkBrown mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-tea-brown text-tea-brown hover:bg-tea-brown hover:text-white"
                  onClick={() => handleExploreCollection(category.name)}
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
