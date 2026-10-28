import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '6rem', background: 'var(--color-dark-grey)', minHeight: '100vh' }}>
            <Contact />

            <Footer />
        </div>
    );
};

export default ContactPage;
