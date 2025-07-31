
import { Card, CardContent } from '@/components/ui/card';
import { Award, Leaf, Heart, Truck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Sourced directly from the finest tea gardens across India'
  },
  {
    icon: Leaf,
    title: 'Organic & Natural',
    description: 'No artificial additives, just pure natural tea flavors'
  },
  {
    icon: Heart,
    title: 'Traditional Recipes',
    description: 'Time-honored blends passed down through generations'
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description: 'Fast, secure delivery to keep your tea fresh'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-tea-darkBrown mb-6">
              The Hyderabad Tea House Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established in the heart of Hyderabad, our tea house has been serving the finest quality teas for over three decades. We believe that tea is more than just a beverage – it's a moment of peace, a connection to tradition, and a bridge between cultures.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our journey began in the old city of Hyderabad, where the aroma of freshly brewed tea and the warmth of hospitality go hand in hand. Today, we bring that same authentic experience to tea lovers across the country.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-tea-brown/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-tea-brown mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-tea-darkBrown mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="bg-tea-gold/10 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">☕</div>
                  <h3 className="text-2xl font-serif font-bold text-tea-brown mb-4">
                    30+ Years of Excellence
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Happy Customers</span>
                      <span className="font-bold text-tea-brown">50,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tea Varieties</span>
                      <span className="font-bold text-tea-brown">100+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cities Served</span>
                      <span className="font-bold text-tea-brown">25+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Awards Won</span>
                      <span className="font-bold text-tea-brown">15+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
