import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';

export const Home = () => {
  return (
    <div className="bg-[#0F1A2B] min-h-screen text-[#F5F5F5] font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 pt-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1A2B] to-[#1C1C1C] z-0" />
        {/* Optional Grid Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F5F5F5] mb-10 sm:mb-12"
            >
              Corporate Learning. <br className="hidden sm:block" />
              Measurable Performance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[1.6] text-[#F5F5F5]/80 max-w-[600px] mb-12 sm:mb-14"
            >
              Learning Works designs capability that translates into business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button onClick={() => {
                navigator.clipboard.writeText('info@learningworksindia.com');
                toast.success('Email copied to clipboard!');
                window.location.href = 'mailto:info@learningworksindia.com';
              }}>
                Schedule a Strategic Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="border-t border-[#F5F5F5]/10 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
          <p className="text-[13px] sm:text-[14px] uppercase tracking-[1.5px] text-[#F5F5F5]/60 font-medium">
            15+ Years <span className="mx-2 opacity-30">|</span> 120+ Corporate Clients <span className="mx-2 opacity-30">|</span> 8 Sectors <span className="mx-2 opacity-30">|</span> Pan-India & Global Delivery
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-[#0F1A2B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 space-y-32">

          {/* Why Learning Works */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-6">Why Learning Works</h2>
              <div className="h-[2px] w-12 bg-[#B89C5A]"></div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 text-[#F5F5F5]/80 text-lg leading-relaxed space-y-6">
              <p>
                In a rapidly evolving corporate landscape, traditional training often fails to deliver tangible returns. We bridge the gap between learning and performance.
              </p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#B89C5A] mt-2.5 mr-4 flex-shrink-0"></span>
                  <span>Board-level strategic alignment ensuring learning initiatives drive business goals.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#B89C5A] mt-2.5 mr-4 flex-shrink-0"></span>
                  <span>Data-driven methodologies that measure impact beyond simple attendance.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#B89C5A] mt-2.5 mr-4 flex-shrink-0"></span>
                  <span>Customized architecture for leadership and capability development.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Impact */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-6">Impact</h2>
              <div className="h-[2px] w-12 bg-[#B89C5A]"></div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 text-[#F5F5F5]/80 text-lg leading-relaxed">
              <p>
                Our interventions are designed to create sustainable behavioral change. We focus on measurable outcomes that resonate with stakeholders and drive organizational growth.
              </p>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-6">Focus Areas</h2>
              <div className="h-[2px] w-12 bg-[#B89C5A]"></div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">Leadership</h3>
                  <p className="text-[#F5F5F5]/70">Developing the next generation of C-suite executives.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">Sales</h3>
                  <p className="text-[#F5F5F5]/70">High-performance sales architectures.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">Transformation</h3>
                  <p className="text-[#F5F5F5]/70">Navigating change with agility and resilience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">Culture</h3>
                  <p className="text-[#F5F5F5]/70">Building high-trust, high-performance environments.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Engage */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-6">Engage</h2>
              <div className="h-[2px] w-12 bg-[#B89C5A]"></div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 text-[#F5F5F5]/80 text-lg leading-relaxed">
              <p className="mb-8">
                Partner with us to architect your organization's future. Let's discuss how we can elevate your team's capability.
              </p>
              <Button onClick={() => {
                navigator.clipboard.writeText('info@learningworksindia.com');
                toast.success('Email copied to clipboard!');
                window.location.href = 'mailto:info@learningworksindia.com';
              }}>
                Schedule a Strategic Consultation
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
