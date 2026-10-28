import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const locations = [
    { name: 'Deluxe Mall Showroom', address: 'Addis Ababa, Ethiopia' },
    { name: 'Olympia Showroom', address: 'Bole Road, Addis Ababa' },
    { name: 'CMC Showroom', address: 'CMC Road, Addis Ababa' },
];

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: '', email: '', phone: '', message: '' });
            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" style={{ background: 'var(--color-dark-grey)', paddingBlock: '6rem', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'var(--color-gold)', filter: 'blur(150px)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'var(--color-grey)', filter: 'blur(120px)', borderRadius: '50%' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Get In Touch</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1rem 0', wordBreak: 'break-word' }}>Let's Build Your <span className="text-stroke">Dream Space</span></h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Visit Our Showrooms</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {locations.map((loc, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-gold)' }}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{loc.name}</h4>
                                        <p style={{ color: 'var(--color-text-muted)' }}>{loc.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Direct Line</h3>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                <a href="tel:+25111111111" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-white)', textDecoration: 'none' }}>
                                    <FaPhone style={{ color: 'var(--color-gold)' }} /> +251 114 672 546
                                </a>
                                <a href="mailto:info@deluxefurniture.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-white)', textDecoration: 'none' }}>
                                    <FaEnvelope style={{ color: 'var(--color-gold)' }} /> info@minaye.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(10px)',
                            padding: '3rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginLeft: '10px' }}>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '1rem', borderRadius: '8px', color: 'white' }}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginLeft: '10px' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '1rem', borderRadius: '8px', color: 'white' }}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginLeft: '10px' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '1rem', borderRadius: '8px', color: 'white' }}
                                    placeholder="+251 ..."
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginLeft: '10px' }}>Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    style={{ background: 'rgba(255,255,255,0.05)', border: 'none', padding: '1rem', borderRadius: '8px', color: 'white', resize: 'vertical' }}
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className="btn-primary"
                                style={{
                                    marginTop: '1rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'wait' : 'pointer'
                                }}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                                    />
                                ) : isSuccess ? (
                                    <>
                                        <FaCheck /> Message Sent
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
