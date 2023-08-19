'use client';
import { useEffect } from 'react';
import CtaSection from './components/ctasection/CtaSection';
import Feature from './components/features/Feature';
import Footer from './components/footer/Footer';
import Heading from './components/navbar/components/Heading';
import LinkEle from './components/navbar/components/LinkEle';
import Navbar from './components/navbar/Navbar';
import NewsLetter from './components/newletter/NewsLetter';
import Pricing from './components/pricingsection/Pricing';
export default function Home() {
  useEffect(function () {
    const allSections = document.querySelectorAll('.section');
    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');

      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }, []);
  return (
    <>
      <div className="feature-section">
        <Navbar />
        <LinkEle />
        <Heading />
      </div>

      <Feature />

      <CtaSection />

      <Pricing />
      <NewsLetter />
      <Footer />
    </>
  );
}
