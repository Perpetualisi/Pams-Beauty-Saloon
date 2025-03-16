import React from "react";
import "./About.css";
import { motion } from "framer-motion";
// import Aboutimage from "../../images/about-image.jpg";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

            <img src="/images/about-image.jpg" alt="About PAMS BEAUTY SALOON" />

          
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About <span>Pams Beauty Saloon</span></h2>
          <p>
            Welcome to Pams Beauty Saloon, where beauty meets perfection! Our expert stylists
            and makeup artists are here to give you the most luxurious salon experience.
            Whether you're looking for a stylish haircut, flawless makeup, or a relaxing
            beauty treatment, we've got you covered.
          </p>
          <p>
            Our mission is to make every client feel confident and beautiful. Visit us
            today and experience beauty like never before!
          </p>
          <button className="about-btn">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
