import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-logo">George</div>

        {/* Menu Items */}
        <div className="nav-links">
          {["Dashboard", "About", "Project", "Contact"].map((item) => (
            <NavLink key={item} to={item.toLowerCase()} className="nav-item">
              {({ isActive }) => (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="nav-text">
                  {item}
                  {isActive && <motion.div layoutId="underline" className="nav-underline" />}
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
