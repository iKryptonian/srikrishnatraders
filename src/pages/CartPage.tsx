import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { UserDetailsModal } from '../components/UserDetailsModal';
import { calculateTotalPrice } from '../utils/cartUtils';
import type { CartItem } from '../types/CartItem';
import type { UserDetails } from '../types/UserDetails';

// PDF generation imports
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { SriKrishnaReceiptPDF } from '../components/SriKrishnaReceiptPDF'; // adjust path if needed

interface CartPageProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cart, onRemoveFromCart }) => {
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
  const [showWhatsPopup, setShowWhatsPopup] = useState(false);

  const total = calculateTotalPrice(cart);
  const originalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = originalTotal - total;

  const handleOrderSubmit = async (details: UserDetails) => {
    // Close modal
    setIsUserDetailsModalOpen(false);

    // Build PDF doc
    const doc = (
      <SriKrishnaReceiptPDF
        customer={details}
        items={cart}
        subtotal={originalTotal}
        total={total}
        date={new Date().toLocaleDateString()}  // Pass current date as a string
      />
    );

    // Generate and save PDF
    const blob = await pdf(doc).toBlob();
    saveAs(blob, `Invoice_${details.name}_${details.city}`.replace(/\s+/g, '') + '.pdf');


    // Show WhatsApp popup
    setShowWhatsPopup(true);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <ShoppingBag className="w-16 h-16 text-orange-500 mb-4" />
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Your cart is empty</h2>
        <p className="font-semibold text-orange-700 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 font-bold text-white px-12 py-5 rounded-lg hover:opacity-80 transition-colors"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ikrytonian.sirv.com/bg5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-8 px-0">
      <div className="flex justify-between items-center mb-8 px-0 mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-orange-600">
          Shopping Cart
        </h2>
        <Link
          to="/products"
          className="font-bold text-xl md:text-2xl text-green-700 hover:text-purple-900 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={5} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Cart items */}
      <div className="space-y-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-gray-400 line-through">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  <p className="text-green-600 font-bold">
                    ₹{item.discountedPrice.toLocaleString('en-IN')} × {item.quantity}
                  </p>
                  <p className="font-semibold text-orange-600">
                    Total: ₹
                    {(item.discountedPrice * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Total</span>
            <span>₹{originalTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount (80%)</span>
            <span>-₹{discount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-3">
            <span>Final Amount</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button
          onClick={() => setIsUserDetailsModalOpen(true)}
          className="w-full font-bold text-white mt-6 py-3 rounded-lg hover:opacity-80 transition-colors"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ikrytonian.sirv.com/bg5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal
        isOpen={isUserDetailsModalOpen}
        onClose={() => setIsUserDetailsModalOpen(false)}
        onSubmit={handleOrderSubmit}
        total={total}
      />

      {/* WhatsApp popup */}
      {showWhatsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Invoice Downloaded</h2>
            <h2 className="text-xl font-bold mb-4">Send the Invoice PDF to WhatsApp</h2>
            <p className="mb-6">
              Click below to open WhatsApp and attach the invoice PDF.
            </p>
            <a
              href="https://wa.me/919597273656"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            >
              Open WhatsApp
            </a>
            <button
              onClick={() => setShowWhatsPopup(false)}
              className="mt-4 block mx-auto text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
