import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass-effect glow-border p-6 rounded-2xl overflow-hidden ${className}`}
    >
      {/* Subtle background glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-crimson-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
