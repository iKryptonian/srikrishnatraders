import React from 'react';
import { ProductTable } from '../components/ProductTable';
import { ProductModal } from '../components/ProductModal';
import { products } from '../data/products';
import { useModal } from '../hooks/useModal';
import { FireworksAnimation } from '../components/FireworksAnimation';
import type { Product } from '../types/Product';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  const { selectedProduct, openProductModal, closeProductModal } = useModal();

  // Handle adding selected quantity of product
  const handleAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="space-y-8 px-0 mx-[-7px] pt-12">
      {/*<FireworksAnimation />*/}
      <div>
        <h2 className="text-3xl font-bold text-orange-500">Our Fireworks Collection</h2>
        <p className="text-black-600 mt-2">
          Click on any product image to view special Diwali offers!
        </p>
      </div>

      <ProductTable
        products={products}
        onImageClick={openProductModal}
        onAddToCart={handleAddToCart} /* Pass our modified handler */
      />

      <ProductModal
        product={selectedProduct}
        onClose={closeProductModal}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};
