import React, { useState, useEffect } from 'react';
import type { Product } from '../types/Product';

// ✅ Category positions mapping — key = position (1-based index in list)
const categoryPositions: { [key: number]: string } = {
  1: "SPARKLERS",
  24: "GROUND CHAKKARAS",
  30: "FLOWER POTS",
  37: "FOUNTAINS",
  55: "TWINKLING STAR",
  58: "PENCILS",
  62: "ROCKETS",
  65: "ATOM BOMBS",
  70: "ONE SOUND CRACKERS",
  76: "LOOSE CRACKERS",
  78: "WALA CRACKERS",
  81: "REPEATING SHOTS",
  90: "FANCY ITEMS"
};

interface ProductTableProps {
  products: Product[];
  onImageClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const STORAGE_KEY = 'productQuantities';

export const ProductTable: React.FC<ProductTableProps> = ({ products, onImageClick, onAddToCart }) => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
    } catch {}
  }, [quantities]);

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities(prev => {
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
          {products.map((product, index) => {
            const quantity = quantities[product.id] || 1;
            const position = index + 1; // ✅ Convert to 1-based position

            return (
              <React.Fragment key={product.id}>
                {/* ✅ Insert category row before matching POSITION */}
                {categoryPositions[position] && (
                  <tr className="bg-white">
                    <td colSpan={5} className="bg-white text-center font-bold text-sm sm:text-lg py-2 sm:py-3" style={{ color: 'rgba(33, 36, 196, 1)' }}>
                      
                      {categoryPositions[position]}
                    </td>
                  </tr>
                )}

                {/* Product row */}
                <tr className="text-center">
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
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
