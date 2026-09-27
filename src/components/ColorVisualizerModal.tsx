import React, { useState } from 'react';
import { IMAGES } from '../data/content.ts';

interface ColorVisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

interface PaintSwatch {
  name: string;
  code: string;
  hex: string;
  undertone: string;
  category: string;
}

const SWATCHES: PaintSwatch[] = [
  { name: 'Warm Saffron', code: 'PC-108', hex: '#E5A93C', undertone: 'Golden Sunlight / Warm', category: 'Accent' },
  { name: 'Heritage Navy', code: 'PC-402', hex: '#0E1C2F', undertone: 'Deep Indigo / Grounded', category: 'Statement' },
  { name: 'Forest Sage', code: 'PC-214', hex: '#6B8E7B', undertone: 'Natural Botanical / Calming', category: 'Neutral' },
  { name: 'Crisp Alabaster', code: 'PC-005', hex: '#F4F5F7', undertone: 'Clean Cool White / Airy', category: 'Base' },
  { name: 'Tuscan Ochre', code: 'PC-119', hex: '#D97706', undertone: 'Rich Amber / Welcoming', category: 'Accent' },
  { name: 'Terracotta Dune', code: 'PC-331', hex: '#C26D53', undertone: 'Earthy Clay / Modern', category: 'Warm' },
  { name: 'Coastal Fog', code: 'PC-228', hex: '#94A3B8', undertone: 'Slate Mineral / Balanced', category: 'Cool' }
];

export const ColorVisualizerModal: React.FC<ColorVisualizerModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote
}) => {
  const [selectedSwatch, setSelectedSwatch] = useState<PaintSwatch>(SWATCHES[0]);
  const [finish, setFinish] = useState<'Matte' | 'Eggshell' | 'Satin' | 'Semi-Gloss'>('Eggshell');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors border-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-bold text-[12px] uppercase tracking-wider mb-3">
          <span className="material-symbols-outlined text-sm">palette</span>
          <span>Interactive Visualizer</span>
        </div>

        <h2 className="text-[26px] font-extrabold text-on-surface mb-2 tracking-tight">
          Virtual Room Color Studio
        </h2>
        <p className="text-[14px] text-on-surface-variant mb-6">
          Preview custom curated designer undertones and sheen finishes before a single drop of paint touches your walls.
        </p>

        {/* Visualizer Canvas Preview */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg mb-6 bg-surface-container-high border border-outline-variant/30">
          <img
            src={IMAGES.heroLivingRoom}
            alt="Room Visualizer"
            className="w-full h-full object-cover"
          />

          {/* Color Tint Overlay that dynamically reacts to selected color */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-35 transition-all duration-500 pointer-events-none"
            style={{ backgroundColor: selectedSwatch.hex }}
          />

          {/* Floating Swatch HUD on Canvas */}
          <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-outline-variant/30">
            <div
              className="w-7 h-7 rounded-lg shadow-inner ring-1 ring-black/10"
              style={{ backgroundColor: selectedSwatch.hex }}
            />
            <div className="text-left">
              <span className="text-[13px] font-extrabold text-on-surface block leading-tight">
                {selectedSwatch.name}
              </span>
              <span className="text-[11px] text-on-surface-variant font-medium">
                {selectedSwatch.code} · {finish} Finish
              </span>
            </div>
          </div>
        </div>

        {/* Swatch Selection Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[13px] font-bold text-on-surface uppercase tracking-wider">
              Select Curated Color Swatch:
            </span>
            <span className="text-[12px] text-secondary font-bold">
              {selectedSwatch.undertone}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
            {SWATCHES.map((swatch) => {
              const isSelected = selectedSwatch.code === swatch.code;
              return (
                <button
                  key={swatch.code}
                  onClick={() => setSelectedSwatch(swatch)}
                  className={`p-2.5 rounded-2xl flex flex-col items-center gap-1.5 transition-all border-none cursor-pointer text-center ${
                    isSelected
                      ? 'ring-2 ring-secondary-container bg-surface-container shadow-md'
                      : 'bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full shadow-md border border-black/10"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span className="text-[11px] font-bold text-on-surface truncate w-full">
                    {swatch.name}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-mono">
                    {swatch.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sheen / Finish Picker */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-4 bg-surface-container-low rounded-2xl">
          <span className="text-[13px] font-bold text-on-surface">
            Select Sheen Lustre:
          </span>
          <div className="flex gap-2">
            {(['Matte', 'Eggshell', 'Satin', 'Semi-Gloss'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFinish(s)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all border-none cursor-pointer ${
                  finish === s
                    ? 'bg-secondary-container text-on-secondary-container shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-on-surface-variant m-0">
            *We bring complimentary 12" x 12" peel-and-stick color samples to your in-home walkthrough.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-bold text-[14px] py-3.5 px-6 rounded-full hover:bg-secondary-fixed transition-all shadow-md cursor-pointer border-none"
            >
              <span>Book Color Consultation</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
