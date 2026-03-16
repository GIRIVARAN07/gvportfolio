import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const variants = {
    primary: "bg-crimson-red text-white hover:bg-crimson-red/90 shadow-red-glow hover:shadow-red-glow-strong",
    outline: "border border-crimson-red/50 text-crimson-red hover:bg-crimson-red/10",
    ghost: "text-white/70 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
