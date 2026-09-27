import React from 'react';
import { ProjectCaseStudy } from '../data/content.ts';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onRequestQuote
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors border-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[11px] uppercase tracking-wider">
            {project.tagLabel}
          </span>
          <span className="text-[13px] text-on-surface-variant font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-secondary">pin_drop</span>
            {project.location}
          </span>
          <span className="text-on-surface-variant text-[13px]">·</span>
          <span className="text-[13px] font-bold text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {project.duration}
          </span>
        </div>

        <h2 className="text-[26px] font-extrabold text-on-surface mb-4 tracking-tight">
          {project.title}
        </h2>

        {/* Hero image of project */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-md bg-surface-container">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
          {project.description}
        </p>

        {project.fullDetails && (
          <div className="space-y-5 bg-surface-container-low p-5 rounded-2xl mb-6">
            <div className="grid grid-cols-2 gap-4 border-b border-surface-container-high pb-4">
              <div>
                <span className="text-[12px] uppercase font-bold text-on-surface-variant block">
                  Client Profile
                </span>
                <span className="text-[14px] font-bold text-on-surface">
                  {project.fullDetails.client}
                </span>
              </div>
              <div>
                <span className="text-[12px] uppercase font-bold text-on-surface-variant block">
                  Total Surface Area
                </span>
                <span className="text-[14px] font-bold text-on-surface">
                  {project.fullDetails.squareFeet}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[12px] uppercase font-bold text-on-surface-variant block mb-2">
                Execution Scope &amp; Specifications
              </span>
              <ul className="space-y-2 text-[14px] text-on-surface m-0 p-0 list-none">
                {project.fullDetails.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <span className="text-[12px] uppercase font-bold text-on-surface-variant block mb-2">
                Curated Color Palette Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {project.fullDetails.palette.map((p, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface text-[12px] font-semibold shadow-sm border border-outline-variant/30"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-bold text-[14px] py-3.5 px-6 rounded-full hover:bg-secondary-fixed transition-all shadow-md cursor-pointer border-none"
          >
            <span>Request Similar Project Scope</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3.5 rounded-full bg-surface-container text-on-surface font-semibold text-[14px] hover:bg-surface-container-high transition-colors cursor-pointer border-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
