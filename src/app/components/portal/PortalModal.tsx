import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronDown, Check, Lock, BookOpen, Clock, Shield } from 'lucide-react';
import { clsx } from 'clsx';
import * as Dialog from '@radix-ui/react-dialog';

type Step = 'category' | 'selection' | 'login' | 'test-type' | 'access-code' | 'instructions' | 'exam';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sectors = [
  "Advertising & Digital Media",
  "App Development & Gaming",
  "Automotive",
  "Banking, Financial Services & Insurance (BFSI)",
  "Consulting",
  "Construction",
  "Energy & Infrastructure",
  "Entertainment",
  "Finance & Accounting",
  "Government & Public Sector",
  "Healthcare",
  "Information Technology"
];

const modules = [
  "AML / KYC",
  "BCBF",
  "Collections & Recovery",
  "Credit Appraisal",
  "DRA (Debt Recovery Agent)",
  "Others",
  "Regulatory Compliance",
  "Sales Executive"
];

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('category');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when closing
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('category');
      setSelectedSector('');
      setSelectedModule('');
    }, 300);
  };

  const handleNext = (nextStep: Step) => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setStep(nextStep);
      setIsLoading(false);
    }, 400);
  };

  const handleBack = () => {
    switch (step) {
      case 'selection': setStep('category'); break;
      case 'login': setStep('selection'); break;
      case 'test-type': setStep('login'); break;
      case 'access-code': setStep('test-type'); break;
      case 'instructions': setStep('test-type'); break;
      default: handleClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[70] w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          
          <div className="bg-[#F5F5F5] min-h-[600px] md:min-h-[700px] rounded-xl overflow-hidden flex flex-col relative shadow-2xl">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <Shield className="text-[#B89C5A] fill-[#B89C5A]/20" size={24} />
                <span className="text-[#0F1A2B] font-bold text-lg tracking-tight">Learning Portal</span>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#0F1A2B]/60"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-3xl"
                >
                  {/* STEP: CATEGORY */}
                  {step === 'category' && (
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#0F1A2B] mb-2 uppercase tracking-wide">Candidate Portal</h2>
                      <p className="text-[#0F1A2B]/60 mb-12 font-medium">Primary Categorization</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button className="group relative bg-white border-2 border-transparent hover:border-[#B89C5A] rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                          <h3 className="text-xl font-bold text-[#0F1A2B] group-hover:text-[#B89C5A] transition-colors">Core Professional Skills</h3>
                        </button>
                        
                        <button 
                          onClick={() => handleNext('selection')}
                          className="group relative bg-white border-2 border-transparent hover:border-[#B89C5A] rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                        >
                          <h3 className="text-xl font-bold text-[#0F1A2B] group-hover:text-[#B89C5A] transition-colors">Domain & Functional Skills</h3>
                        </button>
                      </div>
                      
                      <button onClick={handleClose} className="mt-12 text-[#0F1A2B]/40 hover:text-[#0F1A2B] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                        <ChevronLeft size={12} /> Back to Home
                      </button>
                    </div>
                  )}

                  {/* STEP: SELECTION */}
                  {step === 'selection' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-[#0F1A2B]/5">
                      <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[#0F1A2B] mb-2 uppercase tracking-wide">Domain & Functional Skills</h2>
                        <p className="text-[#0F1A2B]/60 text-sm">Select your specific area of focus</p>
                      </div>

                      <div className="space-y-6 max-w-lg mx-auto">
                        <div>
                          <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-2">Sector Selection</label>
                          <div className="relative">
                            <select 
                              className="w-full appearance-none bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] font-medium focus:outline-none focus:border-[#B89C5A] transition-colors"
                              value={selectedSector}
                              onChange={(e) => setSelectedSector(e.target.value)}
                            >
                              <option value="">-- Choose Sector --</option>
                              {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1A2B]/40 pointer-events-none" size={16} />
                          </div>
                        </div>

                        {selectedSector && (
                           <motion.div 
                             initial={{ opacity: 0, height: 0 }} 
                             animate={{ opacity: 1, height: 'auto' }}
                           >
                             <label className="block text-xs font-bold text-[#B89C5A] uppercase tracking-wider mb-2">BFSI Module</label>
                             <div className="relative">
                               <select 
                                 className="w-full appearance-none bg-white border-2 border-[#B89C5A] rounded-lg px-4 py-3 text-[#0F1A2B] font-medium focus:outline-none shadow-[0_0_0_4px_rgba(184,156,90,0.1)] transition-all"
                                 value={selectedModule}
                                 onChange={(e) => {
                                   setSelectedModule(e.target.value);
                                   if(e.target.value) setTimeout(() => handleNext('login'), 500);
                                 }}
                               >
                                 <option value="">-- Select BFSI Module --</option>
                                 {modules.map(m => <option key={m} value={m}>{m}</option>)}
                               </select>
                               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B89C5A] pointer-events-none" size={16} />
                             </div>
                           </motion.div>
                        )}
                      </div>

                      <div className="mt-12 text-center border-t border-[#0F1A2B]/5 pt-6">
                        <button onClick={handleBack} className="text-[#0F1A2B]/40 hover:text-[#0F1A2B] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                          <ChevronLeft size={12} /> Back to Category
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP: LOGIN */}
                  {step === 'login' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-[#0F1A2B]/5">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#0F1A2B] mb-2 uppercase tracking-wide">Candidate Login</h2>
                        <div className="inline-block border border-[#D32F2F] text-[#D32F2F] bg-[#D32F2F]/5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mt-2">
                          {selectedSector} / {selectedModule}
                        </div>
                      </div>

                      <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); handleNext('test-type'); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Full Name</label>
                            <input type="text" placeholder="Enter full Name" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" required />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Company Name</label>
                            <input type="text" placeholder="Enter company Name" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Email</label>
                            <input type="email" placeholder="Enter email" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" required />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Phone</label>
                            <input type="tel" placeholder="Enter phone" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Sup Name</label>
                            <input type="text" placeholder="Enter sup Name" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-1">Sup Email</label>
                            <input type="email" placeholder="Enter sup Email" className="w-full bg-[#F5F5F5] border border-[#0F1A2B]/10 rounded-lg px-4 py-3 text-[#0F1A2B] text-sm focus:outline-none focus:border-[#B89C5A]" />
                          </div>
                        </div>

                        <button type="submit" className="w-full bg-[#B89C5A] hover:bg-[#a38a4d] text-white font-bold py-3 rounded-lg mt-6 shadow-md transition-all active:scale-[0.99]">
                          Next
                        </button>
                      </form>

                      <div className="mt-8 text-center">
                        <button onClick={handleBack} className="text-[#0F1A2B]/40 hover:text-[#0F1A2B] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                          <ChevronLeft size={12} /> Back to Selection
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP: TEST TYPE */}
                  {step === 'test-type' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-[#0F1A2B]/5">
                      <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[#0F1A2B] mb-2 uppercase tracking-wide">Types of Tests Available</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="border border-[#0F1A2B]/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#B89C5A] hover:shadow-md transition-all cursor-pointer group">
                           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                             <span className="text-2xl">🎯</span>
                           </div>
                           <h3 className="font-bold text-[#0F1A2B] mb-2">Topic-wise practice</h3>
                           <p className="text-xs text-[#0F1A2B]/60">Access chapter-wise modules.</p>
                         </div>

                         <div onClick={() => handleNext('instructions')} className="border-2 border-[#D32F2F] bg-red-50/10 rounded-xl p-6 flex flex-col items-center text-center shadow-md cursor-pointer transform hover:-translate-y-1 transition-all">
                           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                             <span className="text-2xl">📝</span>
                           </div>
                           <h3 className="font-bold text-[#0F1A2B] mb-2">Exam-simulation tests</h3>
                           <p className="text-xs text-[#0F1A2B]/60">Attempt timed assessments.</p>
                         </div>

                         <div className="border border-[#0F1A2B]/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#B89C5A] hover:shadow-md transition-all cursor-pointer group">
                           <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                             <span className="text-2xl">📚</span>
                           </div>
                           <h3 className="font-bold text-[#0F1A2B] mb-2">Learning</h3>
                           <p className="text-xs text-[#0F1A2B]/60">Access learning chapters.</p>
                         </div>
                      </div>

                      <div className="mt-12 text-center border-t border-[#0F1A2B]/5 pt-6">
                        <button onClick={handleBack} className="text-[#D32F2F] text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:underline">
                          <ChevronLeft size={12} /> Exit to Home Page
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP: INSTRUCTIONS */}
                  {step === 'instructions' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-[#0F1A2B]/5 max-w-2xl mx-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#0F1A2B] mb-2 uppercase tracking-wide">Instructions to Candidates</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="border border-[#0F1A2B]/10 rounded-lg p-6">
                           <h4 className="flex items-center gap-2 font-bold text-[#D32F2F] mb-4">
                             <BookOpen size={18} /> TEST FORMAT & RULES
                           </h4>
                           <ul className="space-y-3 text-sm text-[#0F1A2B]/80 list-disc pl-5">
                             <li>Complete within the permitted time. Auto-submit on expiry.</li>
                             <li>No negative marking for incorrect answers.</li>
                             <li>Use of a calculator is permitted.</li>
                           </ul>
                        </div>

                        <div className="border border-[#0F1A2B]/10 rounded-lg p-6">
                           <h4 className="flex items-center gap-2 font-bold text-[#D32F2F] mb-4">
                             <Lock size={18} /> Technical Requirements
                           </h4>
                           <ul className="space-y-3 text-sm text-[#0F1A2B]/80 list-disc pl-5">
                             <li>Ensure a stable internet connection throughout.</li>
                             <li>Do not refresh or close the browser window.</li>
                           </ul>
                        </div>
                      </div>

                      <button onClick={() => handleNext('access-code')} className="w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-3 rounded-lg mt-8 shadow-md transition-all active:scale-[0.99]">
                        I Understand & Continue
                      </button>

                      <div className="mt-6 text-center">
                        <button onClick={handleBack} className="text-[#0F1A2B]/40 hover:text-[#0F1A2B] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                          <ChevronLeft size={12} /> Back to Test Types
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP: ACCESS CODE */}
                  {step === 'access-code' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-[#0F1A2B]/5 max-w-lg mx-auto text-center">
                      <div className="w-16 h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Lock className="text-[#B89C5A]" size={28} />
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#0F1A2B] mb-8 uppercase tracking-wide">Access Verification</h2>
                      
                      <div className="mb-8">
                        <label className="block text-xs font-bold text-[#0F1A2B]/40 uppercase tracking-wider mb-2 text-left">Access Code</label>
                        <input 
                          type="text" 
                          placeholder="C O D E" 
                          className="w-full border-2 border-[#D32F2F]/30 focus:border-[#D32F2F] rounded-lg px-4 py-4 text-center text-xl font-mono tracking-[0.5em] text-[#D32F2F] focus:outline-none placeholder:text-[#D32F2F]/20" 
                        />
                      </div>

                      <button className="w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.99]">
                        Start Assessment
                      </button>

                      <div className="mt-8 text-center">
                        <button onClick={() => setStep('instructions')} className="text-[#0F1A2B]/40 hover:text-[#0F1A2B] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                          <ChevronLeft size={12} /> Back to Modules
                        </button>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Footer Background Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0F1A2B] via-[#B89C5A] to-[#0F1A2B] opacity-20"></div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
