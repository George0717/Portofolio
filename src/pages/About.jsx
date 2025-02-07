import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="about-container"
    >
      <div className="about-background"></div>
      <div className="about-content">
        <h1 className="about-title">Tentang Saya</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quidem fugit voluptatum at quas modi nesciunt! Fuga
          quos, quisquam, eos minima facere enim exercitationem architecto
          molestias perspiciatis vero minus aut.{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
