import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Memoize random particle data to prevent recreating animations on every mouse move
  const particleData = useMemo(() => {
    return [...Array(10)].map(() => ({
      startY: Math.random() * 1000,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 20,
      left: `${Math.random() * 100}%`
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Glow Cursor Effect */}
      <div 
        className="fixed w-[400px] h-[400px] bg-crimson-red/5 rounded-full blur-[100px] pointer-events-none z-0 transition-all duration-300"
        style={{ 
          left: mousePos.x - 200, 
          top: mousePos.y - 200 
        }} 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particleData.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson-red/40 rounded-full"
            animate={{
              y: [particle.startY, -10],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay
            }}
            style={{ left: particle.left }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-4 tracking-tighter text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            GIRIVARAN
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-light text-crimson-red mb-6 tracking-widest"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FULL STACK DEVELOPER
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building AI-powered platforms and modern web experiences that shape the future of digital interaction.
          </motion.p>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-crimson-red rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
