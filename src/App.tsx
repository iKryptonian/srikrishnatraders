import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { DiwaliChitPage } from './pages/DiwaliChitPage';
import { CartPage } from './pages/CartPage';
import { useCart } from './hooks/useCart';

function App() {
  const { cart, addToCart, removeFromCart } = useCart();

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cart={cart} />

      <main className="pt-8 md:pt-20 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage onAddToCart={addToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/diwali-chit" element={<DiwaliChitPage />} />
          <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} />
        </Routes>
      </main>

      {/* cart Floating Buttons */}
      
        <Link
          to="/cart"
          className="fixed bottom-44 right-4  md:bottom-48 md:right-4 bg-purple-600 p-1 md:p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors z-50 cursor-move"
        >
          <div className="relative">
            <img
              src="https://ikrytonian.sirv.com/cartlogo.png"
              alt="Cart"
              className="h-12 w-12 object-contain"
            />
            {totalCartItems > 0 && (
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>
        </Link>
      

      {/* WhatsApp Floating Button */}
      
        <a
          href="https://wa.me/9597273656"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-4 md:bottom-24 md:right-4 bg-green-500 text-white p-1.5 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 cursor-move"
        >
          <img
            src="https://ikrytonian.sirv.com/whatsapplogo.png"
            alt="WhatsApp"
            className="w-11 h-11"
          />
        </a>
      
    </div>
  );
}

export default App;
