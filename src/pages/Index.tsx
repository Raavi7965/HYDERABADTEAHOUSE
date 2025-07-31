
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import CategoryProducts from '@/components/CategoryProducts';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {selectedCategory ? (
        <CategoryProducts 
          category={selectedCategory} 
          onBack={handleBackToCategories}
        />
      ) : (
        <>
          <ProductCategories onCategorySelect={handleCategorySelect} />
          <FeaturedProducts />
        </>
      )}
      <About />
      <Footer />
    </div>
  );
};

export default Index;
