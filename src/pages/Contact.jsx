import { motion } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <div className="contact-page">
       <motion.div 
            className="contact-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        </motion.h1>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
        </motion.p>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <p><span className="highlight">raden7george@gmail.com</span></p>
          <p><span className="highlight">+62 859-3355-4649</span></p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;