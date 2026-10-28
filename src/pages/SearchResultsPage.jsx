import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts, categories } from '../data/products.jsx';
import { FaSearch } from 'react-icons/fa';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (query) {
            const lowerQuery = query.toLowerCase();
            const filtered = allProducts.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--color-black)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Search Results for <span className="text-gold">"{query}"</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        {results.length} {results.length === 1 ? 'result' : 'results'} found
                    </p>
                </motion.div>

                {/* Results Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem',
                        paddingBottom: '4rem'
                    }}
                >
                    {results.length > 0 ? (
                        <AnimatePresence>
                            {results.map((product) => (
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
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>
                            <FaSearch style={{ fontSize: '3rem', color: 'var(--color-text-muted)', marginBottom: '1rem', opacity: 0.5 }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No matches found</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                Try checking for typos or using broader keywords.
                            </p>
                            <Link to="/products" className="btn-primary">
                                Browse All Products
                            </Link>
                        </div>
                    )}

                    {results.length > 0 && (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '2rem' }}>
                            <Link to="/products" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                View More Products
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchResultsPage;
