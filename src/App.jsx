import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Dashboard from './components/sections/Dashboard';
import FeaturedProduct from './components/sections/FeaturedProduct';
import Contact from './components/sections/Contact';

function App() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-crimson-red/30">
      <Hero />
      <div className="relative z-10">
        <About />
        <Dashboard />
        <FeaturedProduct />
        <Contact />
      </div>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson-red/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-crimson-red/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full tech-grid opacity-20" />
      </div>
    </main>
  );
}

export default App;
