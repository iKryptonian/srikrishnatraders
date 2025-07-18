import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CartButton } from './CartButton';
import type { CartItem } from '../types/CartItem';

interface HeaderProps {
  cart: CartItem[];
}

export const Header: React.FC<HeaderProps> = ({ cart }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-yellow-200'
      : 'text-white hover:text-yellow-200';
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className="py-3 px-6 fixed w-full top-0 z-50 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://ikrytonian.sirv.com/headerbanner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-yellow-200">
          <img
            src="https://ikrytonian.sirv.com/skt.png"
            alt="Sri Krishna Traders"
            className="h-14 md:h-24 w-auto transform scale-200 object-contain"
            style={{ transform: 'scale(1.2)', transformOrigin: 'left center' }}
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-200"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-12 w-12" />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-lg font-bold">
            <li><Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link></li>
            <li><Link to="/products" className={`${isActive('/products')} transition-colors`}>Products</Link></li>
            <li><Link to="/diwali-chit" className={`${isActive('/diwali-chit')} transition-colors`}>Diwali Chit</Link></li>
            <li><Link to="/contact" className={`${isActive('/contact')} transition-colors`}>Contact</Link></li>
            <li><CartButton cart={cart} /></li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li><Link to="/" className={`${isActive('/')} transition-colors block py-2`}>Home</Link></li>
            <li><Link to="/products" className={`${isActive('/products')} transition-colors block py-2`}>Products</Link></li>
            <li><Link to="/diwali-chit" className={`${isActive('/diwali-chit')} transition-colors block py-2`}>Diwali Chit</Link></li>
            <li><Link to="/contact" className={`${isActive('/contact')} transition-colors block py-2`}>Contact</Link></li>
            <li className="py-2"><CartButton cart={cart} /></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
