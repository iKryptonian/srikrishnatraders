import React, { useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
import type { UserDetails } from '../types/UserDetails';

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: UserDetails) => void;
  total: number;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  total
}) => {
  const [details, setDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    city: '',
    pincode: '',
    address: '',
    state: 'Tamil Nadu' // Changed default value and format
  });

  const [showMinOrderError, setShowMinOrderError] = useState(false);
  const [showAreaError, setShowAreaError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Allow orders only if
    // state is Tamil Nadu, OR Andhra with city or address containing "guntur" (case-insensitive)
    const normalizedCity = details.city.trim().toLowerCase();
    const normalizedAddress = details.address.trim().toLowerCase();
    if (
      details.state === 'Tamil Nadu' ||
      (
        details.state === 'Andhra' && 
        (normalizedCity.includes('guntur') || normalizedAddress.includes('guntur'))
      )
    ) {
      setShowAreaError(false);
      onSubmit(details);
    } else {
      setShowAreaError(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-[400px] md:w-[600px] h-auto bg-white rounded-xl p-8 border-4 border-purple-600 shadow-4xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      contentLabel="User Details"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Customer Details</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      {showMinOrderError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Minimum order value should be ₹2,500. Please add more items to continue.</p>
        </div>
      )}

      {showAreaError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          We are only accepting orders for Tamil Nadu and Guntur, Andhra.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 h-8 focus:ring-purple-500"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Mobile Number (WhatsApp)
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9]{10}"
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 h-8 focus:ring-purple-500"
            value={details.phone}
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Town/City Name
          </label>
          <input
            type="text"
            id="city"
            required
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 h-8 focus:ring-purple-500"
            value={details.city}
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
            Postal Pincode
          </label>
          <input
            type="text"
            id="pincode"
            required
            pattern="[0-9]{6}"
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 h-8 focus:ring-purple-500"
            value={details.pincode}
            onChange={(e) => setDetails({ ...details, pincode: e.target.value })}
          />
        </div>

        {/*  
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={details.address}
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
        </div>
        */}

        {/* Changed state input to dropdown select */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <select
            id="state"
            required
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-300 text-black shadow-sm focus:border-purple-500 h-8 focus:ring-purple-500"
            value={details.state}
            onChange={(e) => setDetails({ ...details, state: e.target.value })}
          >
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Andhra">Andhra</option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full text-white py-3 px-4 rounded-md bg-cover bg-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ikrytonian.sirv.com/bg5.jpg')"
            }}
          >
            <span style={{ fontWeight: 900 }}>Place Order</span>
          </button>
          <p className="text-center font-semibold text-lg text-green-700 mt-2">
            Invoice downloads automatically.
          </p>
        </div>
      </form>
    </Modal>
  );
};
