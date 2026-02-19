import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { Impact } from './pages/Impact';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';

type Page = 'home' | 'about' | 'solutions' | 'impact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" />;
      case 'about':
        return <About key="about" />;
      case 'solutions':
        return <Solutions key="solutions" />;
      case 'impact':
        return <Impact key="impact" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1A2B] text-[#F5F5F5] font-inter selection:bg-[#B89C5A] selection:text-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}
