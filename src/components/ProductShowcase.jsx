import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaChair, FaBriefcase, FaCoffee, FaLock, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { allProducts, categories } from '../data/products.jsx';

const ProductShowcase = ({ teaser = false }) => {
    const targetRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(allProducts.filter(p => p.category === activeCategory));
        }
    }, [activeCategory]);

    // Limits for teaser
    const displayProducts = teaser ? filteredProducts.slice(0, 4) : filteredProducts;

    // Mobile Detection
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

    return (
        <section id="products" ref={targetRef} style={{
            height: isMobile ? 'auto' : '400vh',
            position: 'relative',
            background: 'var(--color-dark-grey)',
            paddingBottom: isMobile ? '4rem' : '0'
        }}>
            <div style={{
                position: isMobile ? 'relative' : 'sticky',
                top: 0,
                height: isMobile ? 'auto' : '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                paddingTop: '6rem' // Space for navbar
            }}>

                {/* Creative Category Filter */}
                <div className={isMobile ? '' : 'container'} style={{
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: isMobile ? 'flex-start' : 'center',
                    gap: '1rem',
                    overflowX: 'auto',
                    paddingBottom: '1rem',
                    paddingLeft: isMobile ? '2rem' : '0',
                    paddingRight: isMobile ? '2rem' : '0',
                    width: '100%',
                    // Hide scrollbar but allow functionality
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-x'
                }}>
                    <style>
                        {`
                          .container::-webkit-scrollbar {
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
                                flexShrink: 0  // Prevent shrinking to ensure scrolling triggers
                            }}
                        >
                            {cat.icon}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Horizontal Scroll Area */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    overflowX: isMobile ? 'auto' : 'hidden',
                    overflowY: 'hidden',
                    width: '100%'
                }}>
                    <motion.div style={{
                        x: isMobile ? 0 : x,
                        display: 'flex',
                        gap: isMobile ? '2rem' : '4rem',
                        paddingLeft: isMobile ? '2rem' : '10vw',
                        paddingRight: isMobile ? '2rem' : '0',
                        width: isMobile ? 'max-content' : 'auto'
                    }}>

                        {/* Title Card */}
                        <div style={{
                            minWidth: isMobile ? '90vw' : '400px',
                            height: isMobile ? 'auto' : '50vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <motion.h2
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    lineHeight: '1',
                                    marginBottom: '2rem',
                                    color: 'var(--color-white)'
                                }}
                            >
                                {activeCategory === 'all' ? 'Finest' : categories.find(c => c.id === activeCategory)?.name.split(' ')[0]} <br />
                                <span className="text-gold">Selection</span>
                            </motion.h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '400px', lineHeight: '1.6' }}>
                                Designs that inspire, comfort that embraces. <br /> Find the perfect piece for your unique story.
                            </p>
                        </div>

                        {/* Product Cards */}
                        <AnimatePresence mode='wait'>
                            {displayProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        minWidth: isMobile ? '85vw' : '350px',
                                        height: isMobile ? '60vh' : '50vh',
                                        position: 'relative',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        background: 'var(--color-black)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '2rem',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                                    }}>
                                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
                                            {categories.find(c => c.id === product.category)?.name}
                                        </span>
                                        <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{product.name}</h3>
                                        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>{product.price}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* View More Card (Teaser Only) */}
                        {teaser && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    minWidth: isMobile ? '80vw' : '300px',
                                    height: '50vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'transparent',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                }}
                            >
                                <Link to="/products" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View All Categories <FaArrowRight />
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
