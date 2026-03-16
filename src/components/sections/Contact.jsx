import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something <span className="text-crimson-red">Amazing</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl">
              Currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
              <a 
                href="mailto:girivaran68@gmail.com"
                className="flex items-center gap-4 text-white/80 transition-colors group bg-white/5 border border-white/10 px-8 py-6 rounded-2xl hover:bg-crimson-red/10 hover:border-crimson-red/30 hover:text-crimson-red justify-center"
              >
                <Mail size={28} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">girivaran68@gmail.com</span>
              </a>
              <a 
                href="https://github.com/GIRIVARAN07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 transition-colors group bg-white/5 border border-white/10 px-8 py-6 rounded-2xl hover:bg-crimson-red/10 hover:border-crimson-red/30 hover:text-crimson-red justify-center"
              >
                <Github size={28} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">github.com/GIRIVARAN07</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/giri-varan-19a242334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 transition-colors group bg-white/5 border border-white/10 px-8 py-6 rounded-2xl hover:bg-crimson-red/10 hover:border-crimson-red/30 hover:text-crimson-red justify-center"
              >
                <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">linkedin.com/in/giri-varan-19a242334</span>
              </a>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 text-center text-white/20 text-sm">
            © 2026 Girivaran Portfolio
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
