export const allProducts = [
    // Home
    { id: 1, name: 'Velvet Armchair', category: 'home', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop', price: '$450' },
    { id: 2, name: 'Marble Dining Table', category: 'home', image: 'https://images.unsplash.com/photo-1577140917170-285929db55cc?q=80&w=1000&auto=format&fit=crop', price: '$1,200' },
    { id: 3, name: 'Modern Sofa', category: 'home', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop', price: '$899' },
    { id: 101, name: 'Bookshelf unit', category: 'home', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000&auto=format&fit=crop', price: '$350' },

    // Office
    { id: 4, name: 'Executive Desk', category: 'office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop', price: '$2,500' },
    { id: 5, name: 'Ergonomic Chair', category: 'office', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop', price: '$650' },
    { id: 102, name: 'Conference Table', category: 'office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop', price: '$3,200' },

    // Outdoor
    { id: 6, name: 'Rattan Lounge Set', category: 'outdoor', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000&auto=format&fit=crop', price: '$1,800' },
    { id: 7, name: 'Bistro Set', category: 'outdoor', image: 'https://images.unsplash.com/photo-1596162954151-cd670969925d?q=80&w=1000&auto=format&fit=crop', price: '$400' },

    // Safes
    { id: 8, name: 'Titanium Safe', category: 'safes', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop', price: '$3,200' },
];

import { FaLayerGroup, FaChair, FaBriefcase, FaCoffee, FaLock } from 'react-icons/fa';

export const categories = [
    { id: 'all', name: 'All', icon: <FaLayerGroup />, fullName: 'All Collections' },
    { id: 'home', name: 'Home', icon: <FaChair />, fullName: 'Home Furniture' },
    { id: 'office', name: 'Office', icon: <FaBriefcase />, fullName: 'Office Furniture' },
    { id: 'outdoor', name: 'Outdoor', icon: <FaCoffee />, fullName: 'Cafe & Outdoor' },
    { id: 'safes', name: 'Safes', icon: <FaLock />, fullName: 'Safes & Security' },
];
