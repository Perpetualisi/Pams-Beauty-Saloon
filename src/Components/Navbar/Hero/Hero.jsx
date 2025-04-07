import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Updated import for smooth scroll
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="gradient-text"
        >
          Welcome to PAMS BEAUTY SALOON
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          Experience luxury beauty services with us!
        </motion.p>
        
        {/* Updated Link to use react-scroll for smooth scrolling */}
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="book-now-link"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="book-btn"
          >
            Book Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
