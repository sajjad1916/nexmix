'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import ProblemSolution from './components/ProblemSolution';
// import SolutionsOverview from './components/SolutionsOverview';
// import IndustrySolutions from './components/IndustrySolutions';
// import WhyChooseUs from './components/WhyChooseUs';
// import Results from './components/Results';
// import Testimonial from './components/Testimonial';
// import FinalCTA from './components/FinalCTA';
// import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Dynamic import for GSAP and ScrollTrigger
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate grid cards
        gsap.utils.toArray('.grid-card').forEach((card, i) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          });
        });

        // Animate section headings
        gsap.utils.toArray('section h2').forEach((heading) => {
          gsap.from(heading, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top bottom-=150',
              toggleActions: 'play none none none',
            },
          });
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
       <Hero />
     {/* <ProblemSolution />
      <SolutionsOverview />
      <IndustrySolutions />
      <WhyChooseUs />
      <Results />
      <Testimonial />
      <FinalCTA />
      <Footer /> */}
    </>
  );
}