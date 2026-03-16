import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const skills = [
  'React', 'JavaScript', 'Spring Boot', 'MongoDB', 
  'Node.js', 'Express', 'Next.js', 'PostgreSQL', 
  'Docker', 'AWS', 'Tailwind CSS', 'Redux'
];

const Dashboard = () => {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Technical <span className="text-crimson-red">Arsenal</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <GlassCard title="Core Technologies" className="p-8 md:p-12">
            <p className="text-white/60 mb-8 max-w-2xl text-lg">
              A carefully curated stack of modern tools and frameworks designed to build fast, scalable, and responsive applications.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-lg font-medium text-white/90 hover:border-crimson-red/50 hover:bg-crimson-red/10 hover:shadow-red-glow transition-all cursor-default">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
