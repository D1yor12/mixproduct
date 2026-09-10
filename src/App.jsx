import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Benefits from './components/Benefits';
import PremiumSection from './components/PremiumSection';
import InstallmentSection from './components/InstallmentSection';
import StoreLocation from './components/StoreLocation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProductForRequest, setSelectedProductForRequest] = useState(null);
  const [contactPrefillMessage, setContactPrefillMessage] = useState('');

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleRequestProduct = (product) => {
    if (!product) return;
    setSelectedProductForRequest(product);
    setContactPrefillMessage(`Здравствуйте! Меня интересует ${product.name}.`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSelectedProduct = () => {
    setSelectedProductForRequest(null);
    setContactPrefillMessage('');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F3] font-sans selection:bg-[#C8A45D]/20 selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brands Section */}
        <Brands onSelectBrand={() => {
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 3. Categories Section */}
        <Categories onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Products / Catalog Preview */}
        <ProductGrid
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onRequestProduct={handleRequestProduct}
        />

        {/* 5. Why MixProduct (Benefits) */}
        <Benefits />

        {/* 6. Premium & Luxury Tech Section */}
        <PremiumSection />

        {/* 7. Installment Section */}
        <InstallmentSection />

        {/* 8. Physical Store Location */}
        <StoreLocation />

        {/* 9. Final Contact & CTA */}
        <Contact 
          prefilledMessage={contactPrefillMessage} 
          selectedProduct={selectedProductForRequest} 
          onClearSelectedProduct={handleClearSelectedProduct}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Telegram Action */}
      <FloatingContact />
    </div>
  );
}
