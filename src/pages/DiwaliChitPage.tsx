import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Gift, Shield, Phone } from 'lucide-react';
import { FireworksAnimation } from '../components/FireworksAnimation';

export const DiwaliChitPage: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto space-y-4 px-0 md:px-8 pt-14 mx-[-7px]">
      <FireworksAnimation />
      
      {/* Title Section */}
      <div className="text-center mt-16 md:mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600/90">
      
          Diwali Chit Scheme 2025
        </h2>
        <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
          
        </p>
      </div>

      {/* Highlights Section */}
      <div 
        className="p-6 md:p-12 rounded-xl text-white text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://ikrytonian.sirv.com/bg5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Why Choose Our Chit Scheme?
            </h3>
            <ul className="space-y-3">
              <li className="font-semibold flex items-center space-x-3">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span>Secure and transparent savings plan</span>
              </li>
              <li className="font-semibold flex items-center space-x-3">
                <Gift className="h-5 w-5 text-yellow-300" />
                <span>Exclusive bonuses and discounts</span>
              </li>
              <li className="font-semibold flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-yellow-300" />
                <span>Flexible payment options</span>
              </li>
              <li className="font-semibold flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span>Premium quality fireworks guaranteed</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/20 rounded-lg p-4 md:p-4">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Scheme Details
            </h4>
            <div className="grid grid-cols-4 gap-2 text-center font-bold text-xs md:text-base mb-2">
              <div className="bg-blue-800 p-4 rounded lg:text-[14px]">SCHEME</div>
              <div className="bg-blue-800 p-2 rounded lg:text-[14px]">PAYMENT × MONTH</div>
              <div className="bg-blue-800 p-4 rounded lg:text-[14px]">BONUS</div>
              <div className="bg-blue-800 p-4 rounded lg:text-[14px]">TOTAL</div>
            </div>
            <div className="space-y-2 overflow-x-auto">
              {[
                { amount: 200, bonus: 200 },
                { amount: 300, bonus: 300 },
                { amount: 400, bonus: 400 },
                { amount: 500, bonus: 500 },
                { amount: 600, bonus: 600 },
                { amount: 700, bonus: 700 },
                { amount: 800, bonus: 800 },
                { amount: 900, bonus: 900 },
                { amount: 1000, bonus: 1000 }
              ].map(({ amount, bonus }) => {
                const monthly = amount * 9;
                const bonusTotal = monthly / 10 + bonus;
                const total = monthly + bonus;
                return (
                  <div key={amount} className="grid grid-cols-4 gap-0 font-semibold text-center bg-red-900/80 p-2 rounded text-xs md:text-sm">
                    <div>₹{amount}</div>
                    <div>₹{amount} × 9</div>
                    <div>{monthly} + {bonus}</div>
                    <div>₹{total}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-white-800 font-semibold text-sm md:text-base">
              🎁 Bonus includes: One month free + Free delivery!
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 md:p-12 rounded-xl text-white text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://ikrytonian.sirv.com/bg6.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
          <h4 className="text-lg md:text-xl font-semibold mb-3">How to Join</h4>
          <p className="font-semibold text-black-600 mb-4 text-sm md:text-base">
            Contact Sri Krishna Traders to start your preferred scheme. Our team will guide you through the process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 font-semibold text-orange-400 hover:text-purple-500"
          >
            <Phone className="h-5 w-5" />
            <span>Contact Us Now</span>
          </Link>
        </div>

        <div className="p-6 md:p-12 rounded-xl text-white text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://ikrytonian.sirv.com/bg6.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
          <h4 className="text-lg md:text-xl font-semibold mb-3">Payment Options</h4>
          <ul className="space-y-2 font-semibold text-black-600 text-sm md:text-base">
            <li>✓ PhonePe</li>
            <li>✓ Google Pay</li>
            <li>✓ Cash payment at store</li>
          </ul>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-yellow-50 border-4 border-blue-800 rounded-xl p-4 md:p-6">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">
          Important Information:
        </h4>
        <ul className="list-disc list-inside space-y-2 text-yellow-700 text-sm md:text-base">
          <li>Scheme period: January to September 2025</li>
          <li>Non-refundable scheme</li>
          <li>
            Products will be delivered based on the paid amount if payments are
            missed
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-orange-500/85 to-blue-500/70 text-white px-12 py-6 rounded-lg hover:bg-purple-700 transition-colors text-lg md:text-xl font-semibold"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ikrytonian.sirv.com/bg3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Contact Us to Join
        </Link>
      </div>
    </div>
  );
};
