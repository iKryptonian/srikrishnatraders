import { useState, useEffect } from 'react';
import type { CartItem } from '../types/CartItem';
import type { Product } from '../types/Product';

// Key to save cart in sessionStorage (per tab)
const STORAGE_KEY = 'cart';

export const useCart = () => {
  // Load initial state from sessionStorage (lazy init inside useState)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error parsing cart from sessionStorage', e);
      return [];
    }
  });

  // Save to sessionStorage whenever the cart changes
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to sessionStorage', e);
    }
  }, [cart]);

  // Add product or increase quantity
  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          discountedPrice: product.discountedPrice,
          image: product.image,
          quantity: 1
        }
      ];
    });
  };

  // Remove product or decrease quantity
  const removeFromCart = (productId: number) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === productId);

      if (existingItem?.quantity === 1) {
        return currentCart.filter(item => item.id !== productId);
      }

      return currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing cart from sessionStorage', e);
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  };
};
