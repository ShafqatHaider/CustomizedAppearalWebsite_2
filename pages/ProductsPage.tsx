
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const products = PRODUCTS.filter(p => p.category === categoryId);
  const category = CATEGORIES.find(c => c.id === categoryId);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-10">
          {category ? category.name : 'Products'}
        </h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
