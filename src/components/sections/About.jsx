import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              About <span className="text-crimson-red">Me</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I am Girivaran, a passionate full stack developer focused on building modern web applications and AI-powered platforms.
              </p>
              <p>
                My goal is to create impactful digital products that help students and professionals grow. I believe in the power of technology to bridge gaps and create opportunities.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas into reality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-crimson-red/10 blur-[120px] rounded-full scale-150 opacity-50" />
            <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-[3/4] group">
              <img 
                src="/profile.jpg" 
                alt="Girivaran" 
                className="w-full h-full object-cover object-top contrast-[1.1]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
              />
              {/* Seamless blend overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
