import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaBuilding, FaUsers, FaDraftingCompass } from 'react-icons/fa';
import Footer from '../components/Footer';

const milestones = [
    {
        year: 'Pre-1992',
        title: 'The Foundation',
        desc: 'Before formally establishing as a PLC, the business operated as a sole proprietorship for over two decades, building trust and expertise in the Ethiopian market.'
    },
    {
        year: '1992',
        title: 'Minaye PLC Established',
        desc: 'The transition to a Private Limited Company marked the beginning of a diversified corporate journey, expanding into various sectors including office equipment and manufacturing.'
    },
    {
        year: '2003',
        title: 'Birth of Deluxe Furniture',
        desc: 'Recognizing the need for premium, high-quality furniture, Deluxe Furniture was launched as a specialized division. It quickly rose to become a market leader in household and office interiors.'
    },
    {
        year: '2006',
        title: 'Manufacturing Expansion',
        desc: 'The group expanded further with Minaye Packaging and other industrial ventures, solidifying its backbone in the local economy.'
    },
    {
        year: 'Today',
        title: 'A National Leader',
        desc: 'With over 7 showrooms in Addis Ababa and Hawassa, and backed by a workforce of 1,300+, Deluxe Furniture stands as the premier one-stop shop for luxury interiors in Ethiopia.'
    }
];

const StoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--color-black)' }}>

            {/* Hero Section */}
            <div className="container" style={{ marginBottom: '6rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>Our Journey</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 10vw, 4rem)', fontFamily: 'var(--font-heading)', margin: '1rem 0', wordBreak: 'break-word' }}>Decades of <span className="text-gold">Excellence</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        From a humble sole proprietorship to Ethiopia's leading furniture supplier. This is the story of passion, growth, and quality.
                    </p>
                </motion.div>
            </div>

            {/* About Minaye Group */}
            <div style={{ background: 'var(--color-dark-grey)', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.5rem, 8vw, 2.5rem)', marginBottom: '1.5rem' }}>Powered by <span className="text-gold">Minaye PLC</span></h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Deluxe Furniture is a proud division of Minaye PLC, a diversified powerhouse in the Ethiopian economy.
                                Beyond furniture, the group is a leader in packaging, agriculture (Minaye Flowers), and industrial manufacturing.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <FaUsers style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }} />
                                    <h4 style={{ fontSize: '1.2rem' }}>1,300+</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Employees</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <FaBuilding style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }} />
                                    <h4 style={{ fontSize: '1.2rem' }}>8+</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Branches</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                                alt="Minaye Building"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="container" style={{ paddingBlock: '8rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 8vw, 3rem)', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>Our <span className="text-gold">History</span></h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>

                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ paddingLeft: '40px', marginBottom: '4rem', position: 'relative' }}
                        >
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px',
                                top: '5px',
                                width: '20px',
                                height: '20px',
                                background: 'var(--color-gold)',
                                borderRadius: '50%',
                                border: '4px solid var(--color-black)'
                            }}></div>

                            <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.year}</span>
                            <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Vision Quote */}
            <div style={{ background: 'var(--color-gold)', color: 'var(--color-black)', paddingBlock: '6rem', textAlign: 'center' }}>
                <div className="container">
                    <FaDraftingCompass style={{ fontSize: '3rem', marginBottom: '1.5rem', opacity: 0.8 }} />
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '900px', margin: '0 auto', fontFamily: 'var(--font-heading)' }}>
                        "We allow our quality to speak for itself. We strive to be the standard of luxury and durability in East Africa."
                    </h2>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StoryPage;
