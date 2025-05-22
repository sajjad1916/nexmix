'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              Automate<span className="text-white">AI</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <div className="group relative">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Solutions</a>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 px-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">AI Agent Development</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">Intelligent Process Automation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">Enterprise AI Transformation</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Industries</a>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 px-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">Fintech</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">E-commerce</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">Real Estate</a>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Case Studies</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Resources</a>
            <a href="#" className="ml-4 px-6 py-2 rounded-full bg-transparent hover:bg-opacity-10 hover:bg-white text-white border border-white hover:border-opacity-80 transition-all duration-300">Contact</a>
            <a href="#" className="ml-2 px-6 py-2 rounded-full btn-primary text-white transition-all duration-300">Schedule a Consultation</a>
          </div>

          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}