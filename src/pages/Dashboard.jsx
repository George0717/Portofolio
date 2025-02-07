import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Dashboard() {
  const navigate = useNavigate(); // Hook untuk navigasi tanpa refresh

  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <motion.div 
        className="dashboard-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="dashboard-overlay"></div>

      {/* Content */}
      <motion.div 
        className="dashboard-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg">
          <TypeAnimation
            sequence={[
              "Hi, I'm George",
              1500,
              "Web Developer",
              1500,
              "UI/UX Design",
              1500,
              "Let's Build An Amazing Webs App",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg md:text-xl mt-4 text-gray-200">
          I specialize in crafting modern, responsive, and high-performance websites.
          Let's create something amazing together!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="button-group mt-6">
          <motion.button
            onClick={() => navigate("/project")} // Navigasi tanpa refresh
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => navigate("/contact")} // Navigasi tanpa refresh
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-secondary"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
