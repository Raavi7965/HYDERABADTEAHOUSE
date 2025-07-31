
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-tea-cream to-tea-gold/20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-tea-darkBrown mb-6 leading-tight">
              Premium Tea from the Heart of 
              <span className="text-tea-brown"> Hyderabad</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover our exquisite collection of handpicked teas, blended with tradition and served with passion. From the gardens of Assam to the hills of Darjeeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tea-brown hover:bg-tea-darkBrown text-white px-8 py-3 text-lg"
                onClick={scrollToProducts}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-tea-brown text-tea-brown hover:bg-tea-brown hover:text-white px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="bg-tea-brown/10 rounded-full p-8">
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-80 h-80 bg-gradient-to-br from-tea-gold to-tea-brown rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🫖</div>
                    <h3 className="text-2xl font-serif font-bold">Premium</h3>
                    <p className="text-lg">Tea Collection</p>
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

export default Hero;
