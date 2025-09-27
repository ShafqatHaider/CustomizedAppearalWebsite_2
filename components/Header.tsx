
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const Header: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-wider">
              C & A Co.
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out font-medium">Home</Link>
            <Link to="/category/shirts" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out font-medium">Shirts</Link>
            <Link to="/category/pants" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out font-medium">Pants</Link>
            <Link to="/category/uniforms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out font-medium">Costumes</Link>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
              <ShoppingBagIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 bg-rose-500 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
