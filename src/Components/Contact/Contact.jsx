import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Your message has been sent successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Contact Us
      </motion.h2>
      
      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>

      {successMessage && <motion.p className="success-message" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2 }}>{successMessage}</motion.p>}
    </section>
  );
};

export default Contact;