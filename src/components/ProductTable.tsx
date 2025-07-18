import React, { useState } from 'react';
import type { Product } from '../types/Product';

interface ProductTableProps {
  products: Product[];
  onImageClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({ products, onImageClick, onAddToCart }) => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[productId] || 1) + change);
      return { ...prev, [productId]: newQuantity };
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg text-xs md:text-base">
        <thead>
          <tr>
            <th className="border p-1 md:p-2">Image</th>
            <th className="border p-1 md:p-2">Product</th>
            <th className="border p-1 md:p-2">Price</th>
            <th className="border p-1 md:p-2">Qty</th>
            <th className="border p-1 md:p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const quantity = quantities[product.id] || 1;
            return (
              <tr key={product.id} className="text-center">
                <td className="border p-1 md:p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover cursor-pointer mx-auto"
                    onClick={() => onImageClick(product)}
                  />
                </td>
                <td className="border p-1 md:p-2">{product.name}</td>
                <td className="border p-1 md:p-2">
                  <div className="flex flex-col items-center">
                    <span className="line-through text-gray-400 text-xs md:text-sm">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-green-600 font-bold text-xs md:text-base">
                      ₹{product.discountedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </td>
                <td className="border p-1 md:p-2">
                  <div className="flex justify-center items-center space-x-1 md:space-x-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="bg-gray-300 px-2 rounded text-xs md:text-base"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="bg-gray-300 px-2 rounded text-xs md:text-base"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border p-1 md:p-2">
                  <button
                    onClick={() => onAddToCart(product, quantity)}
                    className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 text-xs md:text-base"
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
