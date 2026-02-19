import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export const Impact = () => {
  return (
    <div className="bg-[#0F1A2B] min-h-screen text-[#F5F5F5] font-inter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div className="mb-24">
          <h1 className="text-[48px] sm:text-[64px] font-semibold leading-[1.1] text-white mb-8">
            Measured Results.
          </h1>
          <p className="text-xl text-[#F5F5F5]/70 max-w-3xl leading-relaxed">
            We move beyond "happy sheets" to measure what matters: behavior change and business impact. Our diagnostic-driven approach ensures every intervention targets specific performance levers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Column 1: Diagnostic & Assessment */}
          <div>
            <h2 className="text-2xl font-medium text-white mb-8 pb-4 border-b border-[#F5F5F5]/10">
              Diagnostic Instruments
            </h2>
            <ul className="space-y-6">
              {[
                "Executive Leadership Competency Audits",
                "Organizational Culture & Climate Surveys",
                "Sales Capability & Process Gap Analysis",
                "Team Dynamics & Psychological Safety Assessment",
                "Change Readiness Benchmarking"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-lg text-[#F5F5F5]/80"
                >
                  <span className="w-1.5 h-1.5 bg-[#B89C5A] rounded-full mr-4 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 2: Engagement Model */}
          <div>
            <h2 className="text-2xl font-medium text-white mb-8 pb-4 border-b border-[#F5F5F5]/10">
              Engagement Model
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Diagnose", desc: "Root cause analysis via data and observation." },
                { step: "02", title: "Design", desc: "Architecting the solution and learning journey." },
                { step: "03", title: "Deliver", desc: "Execution via expert facilitation and digital tools." },
                { step: "04", title: "Reinforce", desc: "Sustaining change through coaching and nudges." }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <span className="text-[#B89C5A] font-mono text-sm pt-1 mr-6 opacity-80">{item.step}</span>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-[#F5F5F5]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-32 pt-16 border-t border-[#F5F5F5]/5 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-semibold text-white mb-4">Ready to elevate performance?</h2>
              <p className="text-[#F5F5F5]/60">Let's define the metrics that matter to your organization.</p>
            </div>
            <Button onClick={() => {
              navigator.clipboard.writeText('info@learningworksindia.com');
              toast.success('Email copied to clipboard!');
              window.location.href = 'mailto:info@learningworksindia.com';
            }}>
              Schedule a Strategic Consultation
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
