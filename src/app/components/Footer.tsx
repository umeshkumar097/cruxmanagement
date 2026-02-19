import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] py-12 md:py-20 border-t border-[#F5F5F5]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#F5F5F5] font-inter font-semibold text-xl tracking-tight mb-6">
              Learning Works
            </h3>
            <p className="text-[#F5F5F5]/60 text-sm max-w-xs font-inter leading-relaxed">
              Designs capability that translates into business results. Performance architecture for the modern enterprise.
            </p>
          </div>
          <div>
            <h4 className="text-[#F5F5F5] font-medium mb-6 text-sm tracking-wider uppercase opacity-80">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#F5F5F5]/60 hover:text-[#B89C5A] text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-[#F5F5F5]/60 hover:text-[#B89C5A] text-sm transition-colors">Solutions</a></li>
              <li><a href="#" className="text-[#F5F5F5]/60 hover:text-[#B89C5A] text-sm transition-colors">Impact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F5F5F5] font-medium mb-6 text-sm tracking-wider uppercase opacity-80">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#F5F5F5]/60 hover:text-[#B89C5A] text-sm transition-colors">LinkedIn</a></li>
              <li><a href="mailto:info@learningworksindia.com" className="text-[#F5F5F5]/60 hover:text-[#B89C5A] text-sm transition-colors">info@learningworksindia.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#F5F5F5]/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#F5F5F5]/40">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>&copy; {new Date().getFullYear()} Learning Works. All rights reserved.</p>
            <p>
              Developed by <a href="https://aiclex.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89C5A] transition-colors">Aiclex Technologies</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F5F5F5]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5F5F5]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
