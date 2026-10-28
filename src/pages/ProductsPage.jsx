import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChair, FaBriefcase, FaCoffee, FaLock, FaLayerGroup } from 'react-icons/fa';
import Footer from '../components/Footer';

import { allProducts, categories } from '../data/products.jsx';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mobile Detection
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Update active category when URL changes
    useEffect(() => {
        setActiveCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    useEffect(() => {
        let result = allProducts;

        // Filter by Category
        if (activeCategory !== 'all') {
            result = result.filter(p => p.category === activeCategory);
        }

        setFilteredProducts(result);
    }, [activeCategory]);

    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--color-black)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{ fontSize: 'clamp(2rem, 10vw, 3rem)', marginBottom: '1rem', wordBreak: 'break-word', hyphens: 'auto' }}>Our <span className="text-gold">Collections</span></h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Explore our range of premium furniture designed for every space.</p>
                </motion.div>

                {/* Filters */}
                <div style={{
                    display: 'flex',
                    justifyContent: isMobile ? 'flex-start' : 'center',
                    gap: '1rem',
                    flexWrap: isMobile ? 'nowrap' : 'wrap',
                    marginBottom: '4rem',
                    overflowX: isMobile ? 'auto' : 'visible',
                    width: isMobile ? 'calc(100% + 3rem)' : '100%', // Full width on mobile
                    marginLeft: isMobile ? '-1.5rem' : '0', // Pull to edge
                    paddingLeft: isMobile ? '1.5rem' : '0', // Restore padding
                    paddingRight: isMobile ? '1.5rem' : '0',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-x',
                    paddingBottom: isMobile ? '1rem' : '0' // Space for scrollbar (hidden)
                }}>
                    <style>
                        {`
                          div::-webkit-scrollbar {
                            display: none;
                          }
                        `}
                    </style>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '50px',
                                border: `1px solid ${activeCategory === cat.id ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)'}`,
                                background: activeCategory === cat.id ? 'var(--color-gold)' : 'transparent',
                                color: activeCategory === cat.id ? 'var(--color-black)' : 'var(--color-white)',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                                flexShrink: 0
                            }}
                        >
                            {cat.icon}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '2rem',
                        paddingBottom: '4rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'var(--color-dark-grey)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        {categories.find(c => c.id === product.category)?.name}
                                    </span>
                                    <h3 style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>{product.name}</h3>
                                    <p style={{ fontWeight: '600' }}>{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductsPage;
