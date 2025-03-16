import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const servicesData = [
  { title: "Hair Styling", description: "Professional hair styling services.", image: "public/images/hair-styling.jpg" },
  { title: "Makeup", description: "Expert makeup for all occasions.", image: "public/images/makeup.jpg" },
  { title: "Manicure & Pedicure", description: "Luxury nail treatments.", image: "public/images/Manicure_Pedicure.jpeg" },
  { title: "Facials", description: "Rejuvenating facial treatments.", image: "public/images/facials.jpg" },
];

const Services = () => {
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
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Services;