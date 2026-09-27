/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { HowItWorksModal } from './components/HowItWorksModal.tsx';
import { ColorVisualizerModal } from './components/ColorVisualizerModal.tsx';

import { Home } from './pages/Home.tsx';
import { Services } from './pages/Services.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Projects } from './pages/Projects.tsx';
import { Pricing } from './pages/Pricing.tsx';
import { Contact } from './pages/Contact.tsx';
import { ProjectCaseStudy } from './data/content.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modals state
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [quoteInitialScope, setQuoteInitialScope] = useState<string>('');
  const [quoteInitialEstimate, setQuoteInitialEstimate] = useState<string>('');

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  const [isColorVisualizerOpen, setIsColorVisualizerOpen] = useState<boolean>(false);

  // Legal Modal
  const [legalModalTopic, setLegalModalTopic] = useState<string | null>(null);

  // Scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (scope?: string, estimate?: string) => {
    setQuoteInitialScope(scope || '');
    setQuoteInitialEstimate(estimate || '');
    setIsQuoteOpen(true);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsQuoteOpen(false);
        setSelectedCaseStudy(null);
        setIsHowItWorksOpen(false);
        setIsColorVisualizerOpen(false);
        setLegalModalTopic(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#131c2b] font-body selection:bg-[#fe7624]/20 selection:text-[#fe7624]">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote('General In-Home Consultation')}
      />

      {/* Main Screen Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuote('Whole Home / Living Room Refresh')}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onRequestQuoteWithEstimate={(scope, estimate) =>
              handleOpenQuote(scope, estimate)
            }
            onOpenColorVisualizer={() => setIsColorVisualizerOpen(true)}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUs
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuote('Craftsmanship Walkthrough')}
          />
        )}

        {currentPage === 'projects' && (
          <Projects
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuote('Custom Architectural Project')}
            onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
          />
        )}

        {currentPage === 'pricing' && (
          <Pricing
            onNavigate={handleNavigate}
            onRequestQuoteWithEstimate={(scope, estimate) =>
              handleOpenQuote(scope, estimate)
            }
          />
        )}

        {currentPage === 'contact' && (
          <Contact onNavigate={handleNavigate} />
        )}
      </main>

      {/* Floating Action / Quick Visualizer Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        <button
          onClick={() => setIsColorVisualizerOpen(true)}
          className="pointer-events-auto group flex items-center gap-2.5 bg-white/95 hover:bg-white text-[#131c2b] px-4 py-3 rounded-full shadow-xl border border-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 flex items-center justify-center text-white shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-3a2 2 0 00-2-2h-3m-9 7V9a4 4 0 014-4 4 4 0 014 4v12" />
            </svg>
          </div>
          <span className="text-xs font-bold font-headline hidden sm:inline">
            Virtual Room Painter
          </span>
          <span className="w-2 h-2 rounded-full bg-[#fe7624] animate-pulse sm:hidden"></span>
        </button>
      </div>

      {/* Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(topic) => setLegalModalTopic(topic)}
      />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialScope={quoteInitialScope}
        initialEstimate={quoteInitialEstimate}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onRequestQuote={() => {
          const title = selectedCaseStudy?.title || 'Case Study Consultation';
          setSelectedCaseStudy(null);
          handleOpenQuote(`Inspired by ${title}`);
        }}
      />

      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onRequestQuote={() => {
          setIsHowItWorksOpen(false);
          handleOpenQuote('Standard 4-Step Residential Walkthrough');
        }}
      />

      <ColorVisualizerModal
        isOpen={isColorVisualizerOpen}
        onClose={() => setIsColorVisualizerOpen(false)}
        onRequestQuote={() => {
          setIsColorVisualizerOpen(false);
          handleOpenQuote('Color Consultation & Swatch Match');
        }}
      />

      {/* Legal Topic Notice Modal */}
      {legalModalTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setLegalModalTopic(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold font-headline text-[#131c2b] mb-3">
              {legalModalTopic}
            </h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-64 overflow-y-auto pr-2">
              <p>
                Painter Contractors operates strictly under California Contractors State License Board regulations (CA Lic. #1084920). All projects include written contracts detailing paint manufacturer codes, warranty exclusions, and scheduled draw milestones.
              </p>
              <p>
                <strong>Zero Hidden Charges:</strong> All prices stated in written proposals are locked prior to commencement. Any scope expansion requested by the property owner requires a formal signed Change Order.
              </p>
              <p>
                <strong>EPA Lead-Safe Certified:</strong> For pre-1978 properties, our crews deploy HEPA-filtered containment barriers and compliant dust-suppression tools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModalTopic(null)}
                className="px-5 py-2.5 bg-[#131c2b] text-white rounded-xl text-xs font-bold hover:bg-[#1e2e44] transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
