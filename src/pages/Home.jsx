import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Contact from '../components/Contact';
import { FaInstagram, FaFacebookF, FaTelegram } from 'react-icons/fa';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductShowcase teaser={true} />

            <About />

            <Contact />
            <Footer />
        </>
    );
};

export default Home;
