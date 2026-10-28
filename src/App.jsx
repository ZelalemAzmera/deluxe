import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage';
import StoryPage from './pages/StoryPage';
import ScrollToTop from './components/ScrollToTop'; // We'll create this helper

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll reset on route change */}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
