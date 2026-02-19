import React from 'react';
import { motion } from 'motion/react';

const SolutionBlock = ({ title, description }: { title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group py-12 border-b border-[#F5F5F5]/10 hover:border-[#B89C5A]/50 transition-colors duration-500"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="col-span-12 md:col-span-4">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-white group-hover:text-[#B89C5A] transition-colors duration-300">
          {title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-8">
        <p className="text-xl text-[#F5F5F5]/70 font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export const Solutions = () => {
  return (
    <div className="bg-[#0F1A2B] min-h-screen text-[#F5F5F5] font-inter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="mb-20">
          <h1 className="text-[48px] sm:text-[64px] font-semibold leading-[1.1] text-white mb-6">
            Core Capabilities
          </h1>
          <p className="text-xl text-[#F5F5F5]/60 max-w-2xl">
            Strategic interventions designed for high-impact organizational needs.
          </p>
        </div>

        <div className="space-y-4">
          <SolutionBlock 
            title="Leadership" 
            description="Cultivating executive presence, strategic thinking, and the ability to navigate complexity in the modern enterprise." 
          />
          <SolutionBlock 
            title="Sales" 
            description="Architecting high-performance sales behaviors that drive revenue growth and client retention." 
          />
          <SolutionBlock 
            title="Transformation" 
            description="Equipping teams with the resilience and agility required to thrive during periods of significant organizational change." 
          />
          <SolutionBlock 
            title="Culture" 
            description="Aligning values and behaviors to create a cohesive, high-trust environment that attracts and retains top talent." 
          />
        </div>

        <div className="mt-24 pt-8 border-t border-[#F5F5F5]/5">
          <p className="text-[#F5F5F5]/40 text-sm tracking-widest uppercase text-center md:text-left">
            Delivery Modes: Instructor-led &middot; Digital &middot; Blended &middot; Enterprise-wide
          </p>
        </div>

      </div>
    </div>
  );
};
