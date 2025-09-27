
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Chic & Co. All rights reserved.</p>
        <p className="text-sm mt-1">A Fictional E-commerce Experience</p>
      </div>
    </footer>
  );
};

export default Footer;
