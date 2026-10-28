import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAward, FaStore, FaUsers, FaLeaf } from 'react-icons/fa';

const stats = [
    { id: 1, label: 'Years of Excellence', value: '14+' },
    { id: 2, label: 'Showrooms', value: '7' },
    { id: 3, label: 'Showroom Area', value: '6600m²' },
    { id: 4, label: 'Happy Clients', value: '10k+' },
];

const values = [
    {
        id: 1,
        icon: <FaAward />,
        title: 'Unmatched Quality',
        desc: 'Sole agents for award-winning international suppliers, ensuring every piece meets global standards.'
    },
    {
        id: 2,
        icon: <FaUsers />,
        title: 'Customer First',
        desc: 'A family business committed to building long-term relationships through exceptional after-sales service.'
    },
    {
        id: 3,
        icon: <FaStore />,
        title: 'Wide Reach',
        desc: 'Conveniently located across Addis Ababa and Hawassa, bringing luxury closer to you.'
    }
];

const About = () => {
    return (
        <section id="about" style={{ background: 'var(--color-black)', color: 'var(--color-white)', overflow: 'hidden' }}>

            {/* Intro Section */}
            <div className="container" style={{ paddingBlock: '8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                            Since 1992
                        </span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 8vw, 3.5rem)', fontFamily: 'var(--font-heading)', margin: '1rem 0', lineHeight: 1.1, wordBreak: 'break-word', hyphens: 'auto' }}>
                            The Difference <br /> Is <span className="text-stroke">Visible</span>.
                        </h2>
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Deluxe Furniture, a division of <strong>MINAYE PLC</strong>, has redefined the art of living in Ethiopia.
                            From humble beginnings to becoming the market leader, we allow our quality to speak for itself.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', lineHeight: 1.6 }}>
                            Whether it's equipping a modern office, designing a cozy home, or setting up a high-end restaurant,
                            we provide a wide variety of furniture that blends aesthetics with durability.
                        </p>

                        <Link to="/story" className="btn-primary" style={{ display: 'inline-block' }}>Our Story</Link>
                    </motion.div>

                    {/* Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', height: '500px' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '80%',
                            height: '80%',
                            background: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop) center/cover',
                            borderRadius: '4px',
                            zIndex: 2
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '60%',
                            height: '60%',
                            background: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop) center/cover',
                            borderRadius: '4px',
                            zIndex: 3,
                            border: '10px solid var(--color-black)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--color-gold)',
                            opacity: 0.3,
                            zIndex: 1
                        }} />
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container" style={{ padding: '4rem 2rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem', textAlign: 'center' }}>
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <h3 style={{ fontSize: '3rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>{stat.value}</h3>
                                <p style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="container" style={{ paddingBlock: '8rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Why Choose <span className="text-gold">Deluxe</span>?</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {values.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.03), transparent)',
                                transition: 'transform 0.3s'
                            }}
                            whileHover={{ y: -10, borderColor: 'var(--color-gold)' }}
                        >
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default About;
