'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Create random dots
    const dotsContainer = document.querySelector('.dots-bg');
    if (dotsContainer) {
      for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        const size = Math.random() * 10 + 4;
        const colors = ['#0066CC', '#00CC99', '#FF6600'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.background = color;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.opacity = (Math.random() * 0.3 + 0.1).toString();

        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        dot.style.animation = `moveDot ${duration}s infinite linear ${delay}s`;

        dotsContainer.appendChild(dot);
      }
    }
  }, []);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="hero-shape top-20 left-1/4 floating-slow"></div>
      <div className="hero-shape bottom-20 right-1/4 floating"></div>

      <div className="dots-bg">
        <div className="dot" style={{ width: '8px', height: '8px', background: '#0066CC', top: '10%', left: '10%' }}></div>
        <div className="dot" style={{ width: '12px', height: '12px', background: '#00CC99', top: '20%', left: '70%' }}></div>
        <div className="dot" style={{ width: '6px', height: '6px', background: '#FF6600', top: '80%', left: '15%' }}></div>
        <div className="dot" style={{ width: '10px', height: '10px', background: '#0066CC', top: '40%', left: '90%' }}></div>
        <div className="dot" style={{ width: '14px', height: '14px', background: '#00CC99', top: '70%', left: '60%' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Enterprise AI Automation</span>
              <span className="block mt-2">That Delivers Measurable Results</span>
            </h1>
            <p className="text-xl text-gray-300">Custom AI agents and workflow automation for mid to large enterprises</p>
            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="px-8 py-3 rounded-full btn-primary text-white text-lg font-medium text-center">Schedule a Consultation</a>
              <a href="#" className="px-8 py-3 rounded-full bg-transparent hover:bg-white hover:bg-opacity-5 text-white text-lg font-medium border border-white border-opacity-30 text-center transition-all duration-300">Learn More</a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden gradient-border blur-card p-1">
              <div className="absolute top-0 left-0 w-full h-full">
                <img src="/api/placeholder/600/400" alt="AI Automation" className="w-full h-full object-cover rounded-2xl opacity-70" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <span className="px-3 py-1 bg-primary bg-opacity-30 text-white rounded-full text-sm mb-2 inline-block">Enterprise AI</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Intelligent Process Automation</h3>
                <p className="text-gray-300">Transform your enterprise with custom AI agents built for your specific needs</p>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-xl blur-card gradient-border rotate-12 floating-fast"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-xl blur-card gradient-border -rotate-12 floating"></div>
          </div>
        </div>
      </div>
    </section>
  );
}