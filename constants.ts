
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'pants', name: 'Pants', image: 'https://picsum.photos/seed/pants/400/400' },
  { id: 'shirts', name: 'Shirts', image: 'https://picsum.photos/seed/shirts/400/400' },
  { id: 'skirts', name: 'Skirts', image: 'https://picsum.photos/seed/skirts/400/400' },
  { id: 'innerwear', name: 'Inner Wear', image: 'https://picsum.photos/seed/innerwear/400/400' },
  { id: 'badges', name: 'Badges', image: 'https://picsum.photos/seed/badges/400/400' },
  { id: 'uniforms', name: 'Uniforms', image: 'https://picsum.photos/seed/uniforms/400/400' },
];

export const PRODUCTS: Product[] = [
  // Pants
  { id: 1, name: 'Classic Denim Jeans', price: 89.99, category: 'pants', image: 'https://picsum.photos/seed/product1/600/800', description: 'Timeless denim jeans for any occasion.', isHot: true },
  { id: 2, name: 'Comfort Fit Chinos', price: 75.50, category: 'pants', image: 'https://picsum.photos/seed/product2/600/800', description: 'Soft and comfortable chinos, perfect for a casual look.', isHot: false },
  // Shirts
  { id: 3, name: 'Crisp White Shirt', price: 59.99, category: 'shirts', image: 'https://picsum.photos/seed/product3/600/800', description: 'A wardrobe essential, this crisp white shirt is made from pure cotton.', isHot: true },
  { id: 4, name: 'Floral Print Blouse', price: 65.00, category: 'shirts', image: 'https://picsum.photos/seed/product4/600/800', description: 'A vibrant and stylish floral blouse to brighten your day.', isHot: true },
  // Skirts
  { id: 5, name: 'Flowy Maxi Skirt', price: 99.99, category: 'skirts', image: 'https://picsum.photos/seed/product5/600/800', description: 'An elegant maxi skirt with a beautiful drape.', isHot: false },
  { id: 6, name: 'A-Line Denim Skirt', price: 55.00, category: 'skirts', image: 'https://picsum.photos/seed/product6/600/800', description: 'A classic A-line skirt in durable denim.', isHot: false },
  // Inner Wear
  { id: 7, name: 'Lace Bralette', price: 39.99, category: 'innerwear', image: 'https://picsum.photos/seed/product7/600/800', description: 'Delicate and comfortable lace bralette.', isHot: true },
  { id: 8, name: 'Silk Boxer Shorts', price: 45.00, category: 'innerwear', image: 'https://picsum.photos/seed/product8/600/800', description: 'Luxurious silk boxer shorts for ultimate comfort.', isHot: false },
  // Badges
  { id: 9, name: 'Enamel Pin Set', price: 19.99, category: 'badges', image: 'https://picsum.photos/seed/product9/600/800', description: 'A set of three stylish enamel pins to customize your look.', isHot: true },
  // Uniforms
  { id: 10, name: 'Official Security Uniform', price: 120.00, category: 'uniforms', image: 'https://picsum.photos/seed/product10/600/800', description: 'Durable and professional security uniform.', isHot: false },
  { id: 11, name: 'Pilot Costume', price: 150.00, category: 'uniforms', image: 'https://picsum.photos/seed/product11/600/800', description: 'Authentic-looking pilot costume for events.', isHot: true },
  { id: 12, name: 'Police Officer Costume', price: 140.00, category: 'uniforms', image: 'https://picsum.photos/seed/product12/600/800', description: 'A complete police officer costume set.', isHot: false },
];
