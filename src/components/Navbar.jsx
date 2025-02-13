import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css"; // Pastikan file CSS diimpor

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-logo">George</div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menu Items */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Dashboard", "About", "Project", "Contact"].map((item) => (
            <NavLink key={item} to={item.toLowerCase()} className="nav-item">
              {({ isActive }) => (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="nav-text">
                  {item}
                  <motion.div
                    layoutId="underline"
                    className="nav-underline"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
