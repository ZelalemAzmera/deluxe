import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { categories } from '../data/products';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-black)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6rem' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    color: 'var(--color-text-muted)'
                }}>

                    {/* Column 1: Brand */}
                    <div>
                        <Link to="/" style={{ fontSize: '1.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '1px', color: 'white', display: 'block', marginBottom: '1.5rem' }}>
                            DELUXE<span className="text-gold">.</span>
                        </Link>
                        <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
                            Premium furniture designed for modern living. Crafted with the finest materials for timeless elegance and comfort.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}>
                                <FaInstagram />
                            </a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}>
                                <FaFacebookF />
                            </a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}>
                                <FaTelegram />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Products', path: '/products' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Collections</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {categories.filter(c => c.id !== 'all').map((cat) => (
                                <li key={cat.id}>
                                    <Link to={`/products?category=${cat.id}`} style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                                        {cat.fullName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <FaMapMarkerAlt style={{ color: 'var(--color-gold)', marginTop: '5px' }} />
                                <span>Addis Ababa, Ethiopia<br />Bole Road, Olympia</span>
                            </li>
                            <li>
                                <a href="tel:+251114672546" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <FaPhone style={{ color: 'var(--color-gold)' }} />
                                    <span>+251 114 672 546</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@minaye.com" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <FaEnvelope style={{ color: 'var(--color-gold)' }} />
                                    <span>info@minaye.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingBlock: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Deluxe Furniture. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
