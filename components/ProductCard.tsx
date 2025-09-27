
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden lg:aspect-none">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 lg:h-80"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800">
          <Link to={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
