import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'var(--color-black)',
            }}
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    y: y1,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                    zIndex: 0,
                }}
            />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'var(--color-gold)',
                        marginBottom: '1rem',
                        letterSpacing: '4px'
                    }}>
                        Est. 2024
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 12vw, 8rem)', // Reduced min size for 320px
                        lineHeight: '0.9',
                        marginBottom: '2rem',
                        color: 'var(--color-white)',
                        wordBreak: 'break-word', // Ensure long words break
                        hyphens: 'auto'
                    }}>
                        Timeless <br />
                        <span className="text-outline" style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Elegance</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="hero-text-container"
                    style={{ y: y2 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '2rem',
                        lineHeight: '1.6'
                    }}>
                        Crafting spaces that tell your story. Experience the fusion of modern design and Ethiopian heritage.
                    </p>
                    <Link to="/products" className="btn-primary">
                        Discover More
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '4rem',
                width: '100px',
                height: '1px',
                background: 'var(--color-gold)',
                zIndex: 10
            }} />
        </section>
    );
};

export default Hero;
