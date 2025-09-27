
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'pants', name: 'Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'skirts', name: 'Skirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'innerwear', name: 'Inner Wear', image: 'https://images.unsplash.com/photo-1744854190875-2aa899021118?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'badges', name: 'Badges', image: 'https://plus.unsplash.com/premium_photo-1664303821667-ddd486d1acb4?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'uniforms', name: 'Uniforms', image: 'https://plus.unsplash.com/premium_photo-1661501422340-121cf62e8e1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const PRODUCTS: Product[] = [
  // Pants
  { id: 1, name: 'Classic Denim Jeans', price: 89.99, category: 'pants', image: 'https://images.unsplash.com/photo-1613504383899-c7fc5367e600?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Timeless denim jeans for any occasion.', isHot: true },
  { id: 2, name: 'Comfort Fit Chinos', price: 75.50, category: 'pants', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Soft and comfortable chinos, perfect for a casual look.', isHot: false },
  // Shirts
  { id: 3, name: 'Crisp White Shirt', price: 59.99, category: 'shirts', image: 'https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A wardrobe essential, this crisp white shirt is made from pure cotton.', isHot: true },
  { id: 4, name: 'Floral Print Blouse', price: 65.00, category: 'shirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A vibrant and stylish floral blouse to brighten your day.', isHot: true },
  // Skirts
  { id: 5, name: 'Flowy Maxi Skirt', price: 99.99, category: 'skirts', image: 'https://images.unsplash.com/photo-1591972068325-591dbbb83d80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'An elegant maxi skirt with a beautiful drape.', isHot: false },
  { id: 6, name: 'A-Line Denim Skirt', price: 55.00, category: 'skirts', image: 'https://images.unsplash.com/photo-1600738562574-860da204fa58?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A classic A-line skirt in durable denim.', isHot: false },
  // Inner Wear
  { id: 7, name: 'Lace Bralette', price: 39.99, category: 'innerwear', image: 'https://images.unsplash.com/photo-1657613034021-98444842bd22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Delicate and comfortable lace bralette.', isHot: true },
  { id: 8, name: 'Silk Boxer Shorts', price: 45.00, category: 'innerwear', image: 'https://images.unsplash.com/photo-1729719762110-6ad6e60f4dbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Luxurious silk boxer shorts for ultimate comfort.', isHot: false },
  // Badges
  { id: 9, name: 'Enamel Pin Set', price: 19.99, category: 'badges', image: 'https://plus.unsplash.com/premium_photo-1675896335891-cff0ba9c6e2d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A set of three stylish enamel pins to customize your look.', isHot: true },
  // Uniforms
  { id: 10, name: 'Official Security Uniform', price: 120.00, category: 'uniforms', image: 'https://images.unsplash.com/photo-1523617423-4ee97cdd27f4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Durable and professional security uniform.', isHot: false },
  { id: 11, name: 'Pilot Costume', price: 150.00, category: 'uniforms', image: 'https://plus.unsplash.com/premium_photo-1661504402886-4a4fefe9dc99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Authentic-looking pilot costume for events.', isHot: true },
  { id: 12, name: 'Police Officer Costume', price: 140.00, category: 'uniforms', image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A complete police officer costume set.', isHot: false },
];
