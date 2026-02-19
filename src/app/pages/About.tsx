import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="bg-[#0F1A2B] min-h-screen text-[#F5F5F5] font-inter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-[48px] sm:text-[64px] font-semibold leading-[1.1] text-white max-w-4xl">
            Quiet confidence in capability design.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          
          {/* Vertical Divider Line (Visual only for larger screens) */}
          <div className="hidden md:block absolute left-[33%] top-0 bottom-0 w-[1px] bg-[#F5F5F5]/10"></div>

          {/* Section 1: About Learning Works */}
          <div className="col-span-12 md:col-span-4 pr-0 md:pr-12">
            <h2 className="text-2xl font-medium text-white mb-6">About Learning Works</h2>
          </div>
          <div className="col-span-12 md:col-span-8 pl-0 md:pl-12">
            <div className="prose prose-invert prose-lg max-w-none text-[#F5F5F5]/80 leading-loose">
              <p className="mb-8">
                Learning Works operates at the intersection of strategy and performance. We are not a traditional training company. We are architects of corporate capability. 
              </p>
              <p>
                Founded on the belief that true organizational change requires more than just workshops, we partner with C-suite leaders to diagnose root causes of performance gaps and design bespoke interventions that stick. Our work is characterized by depth, rigor, and a relentless focus on measurable business outcomes.
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="col-span-12 h-16"></div>

          {/* Section 2: Our Approach */}
          <div className="col-span-12 md:col-span-4 pr-0 md:pr-12">
            <h2 className="text-2xl font-medium text-white mb-6">Our Approach</h2>
          </div>
          <div className="col-span-12 md:col-span-8 pl-0 md:pl-12">
            <div className="prose prose-invert prose-lg max-w-none text-[#F5F5F5]/80 leading-loose">
              <p className="mb-8">
                We believe in "Performance Architecture." This means we look at the system, not just the individual. A highly capable leader in a broken system will fail. A perfect system with incapable teams will stagnate.
              </p>
              <p>
                Our approach integrates behavioral psychology, organizational design, and strategic alignment. We don't bring off-the-shelf solutions. We bring a toolkit of frameworks that we adapt to your specific context, ensuring relevance and immediate applicability.
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="col-span-12 h-16"></div>

          {/* Section 3: How We Work */}
           <div className="col-span-12 md:col-span-4 pr-0 md:pr-12">
            <h2 className="text-2xl font-medium text-white mb-6">How We Work</h2>
          </div>
          <div className="col-span-12 md:col-span-8 pl-0 md:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                 <span className="block text-[#B89C5A] text-sm font-semibold tracking-widest uppercase mb-4">01. Diagnose</span>
                 <p className="text-[#F5F5F5]/80 leading-relaxed">
                   We start with data. Interviews, assessments, and observation to understand the reality on the ground.
                 </p>
              </div>
              <div>
                 <span className="block text-[#B89C5A] text-sm font-semibold tracking-widest uppercase mb-4">02. Design</span>
                 <p className="text-[#F5F5F5]/80 leading-relaxed">
                   Collaborative creation of learning journeys and performance support systems tailored to your goals.
                 </p>
              </div>
              <div>
                 <span className="block text-[#B89C5A] text-sm font-semibold tracking-widest uppercase mb-4">03. Deliver</span>
                 <p className="text-[#F5F5F5]/80 leading-relaxed">
                   World-class facilitation and digital delivery that respects the time and intelligence of your senior leaders.
                 </p>
              </div>
               <div>
                 <span className="block text-[#B89C5A] text-sm font-semibold tracking-widest uppercase mb-4">04. Reinforce</span>
                 <p className="text-[#F5F5F5]/80 leading-relaxed">
                   Structured follow-through to ensure behavioral change becomes permanent organizational habit.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
