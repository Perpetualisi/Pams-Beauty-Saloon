import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.css";

const servicesData = [
  { title: "Hair Styling", description: "Professional hair styling services.", image: "/images/hair-styling.jpg" },
  { title: "Makeup", description: "Expert makeup for all occasions.", image: "/images/makeup.jpg" },
  { title: "Manicure & Pedicure", description: "Luxury nail treatments.", image: "/images/Manicure_Pedicure.jpeg" },
  { title: "Facials", description: "Rejuvenating facial treatments.", image: "/images/facials.jpg" },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="services" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Our Services
      </motion.h2>

      <div className="services-container">
        <motion.div
          className="service-slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key={servicesData[currentIndex].title}
            className="service-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={servicesData[currentIndex].image}
              alt={servicesData[currentIndex].title}
              className="service-image"
            />
            <h3 className="service-title">{servicesData[currentIndex].title}</h3>
            <p className="service-description">{servicesData[currentIndex].description}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
