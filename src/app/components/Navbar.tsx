import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

type Page = 'home' | 'about' | 'solutions' | 'impact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'About', value: 'about' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Impact', value: 'impact' },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1A2B]/90 backdrop-blur-sm border-b border-[#F5F5F5]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="text-[#F5F5F5] font-inter font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          Learning Works
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={clsx(
                "text-[14px] font-medium tracking-wide transition-colors duration-300",
                currentPage === item.value
                  ? "text-[#B89C5A]"
                  : "text-[#F5F5F5] hover:text-[#B89C5A]"
              )}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.exam.learningworksindia.com"
            className="flex items-center gap-2 text-[14px] font-medium tracking-wide text-[#F5F5F5]/70 hover:text-[#B89C5A] transition-colors"
          >
            <Lock size={14} />
            Portal
          </a>
          <button
            onClick={() => { }}
            className="text-[14px] font-medium tracking-wide text-[#F5F5F5] border border-[#F5F5F5]/20 px-4 py-2 rounded hover:border-[#B89C5A] hover:text-[#B89C5A] transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-5 md:hidden">
          <a
            href="https://www.exam.learningworksindia.com"
            className="flex items-center gap-2 text-[14px] font-medium tracking-wide text-[#F5F5F5] hover:text-[#B89C5A] transition-colors"
          >
            <Lock size={16} className="text-[#B89C5A]" />
            <span>Portal</span>
          </a>

          <button
            className="text-[#F5F5F5]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#0F1A2B] border-b border-[#F5F5F5]/10 p-6 flex flex-col space-y-6 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={clsx(
                  "text-left text-[16px] font-medium tracking-wide",
                  currentPage === item.value
                    ? "text-[#B89C5A]"
                    : "text-[#F5F5F5]"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              className="text-left text-[16px] font-medium tracking-wide text-[#F5F5F5] opacity-80"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
