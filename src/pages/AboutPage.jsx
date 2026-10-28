import React, { useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '6rem', background: 'var(--color-black)', minHeight: '100vh' }}>
            <About />

            <Footer />
        </div>
    );
};

export default AboutPage;
