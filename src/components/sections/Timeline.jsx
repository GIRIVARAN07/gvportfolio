import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: '2024', event: 'Started learning full stack development', desc: 'Mastered the fundamentals of web technologies.' },
  { year: '2025', event: 'Built CareerForge platform', desc: 'Developed a comprehensive AI career readiness tool.' },
  { year: '2026', event: 'Building AI-powered developer tools', desc: 'Focusing on future-proof automated solutions.' }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Developer <span className="text-crimson-red">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson-red/30 to-transparent" />

          <div className="space-y-24">
            {events.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Year Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-crimson-red shadow-red-glow rounded-full z-10" />

                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="text-3xl font-black text-crimson-red mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.event}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
