import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const features = [
  {
    name: "Resume Analyzer",
    desc: "AI-powered scanning for keyword optimization and formatting.",
    icon: "📄"
  },
  {
    name: "Technical Test Platform",
    desc: "Assess technical skills with interactive coding challenges and automated evaluations.",
    icon: "💻"
  },
  {
    name: "Aptitude Test Platform",
    desc: "Interactive MCQ modules to sharpen technical and logical skills.",
    icon: "🧠"
  }
];

const FeaturedProduct = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-crimson-red tracking-[0.3em] uppercase mb-4">Featured Product</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white">CareerForge</h3>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">AI-powered career preparation platform designed to help students bridge the gap to professional excellence.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassCard className="flex flex-col h-full items-start hover:bg-white/5 hover:border-crimson-red/30 transition-all group">
                  <div className="text-4xl mb-6 bg-crimson-red/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-crimson-red transition-colors">{feature.name}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
