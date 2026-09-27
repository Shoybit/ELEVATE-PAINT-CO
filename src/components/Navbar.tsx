import React, { useState } from "react";
import { IMAGES } from "../data/content.ts";

export type PageId =
  | "home"
  | "services"
  | "about-us"
  | "projects"
  | "pricing"
  | "contact";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about-us", label: "About Us" },
    { id: "projects", label: "Projects" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:max-w-10/12 lg:px-12 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-6">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center group cursor-pointer border-none bg-transparent p-0 shrink-0"
        >
          <img
            src="/logo.png"
            alt="Elevate Paint Co. Logo"
            className="h-9 sm:h-11 lg:h-14 w-auto object-contain transition-transform"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-[14px] font-semibold transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                  isActive
                    ? "text-secondary-container font-bold border-b-2 border-secondary-container pb-0.5"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Avatar */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={onRequestQuote}
            className="hidden md:inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container text-[14px] font-bold px-5 lg:px-6 py-3 rounded-full hover:bg-secondary-fixed transition-all shadow-[0_10px_25px_-5px_rgba(11,25,44,0.06)] hover:-translate-y-0.5 cursor-pointer border-none whitespace-nowrap"
          >
            <span>Request a Quote</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg border-none bg-transparent cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-4 sm:px-6 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`py-2.5 px-3 text-left text-[15px] font-semibold rounded-lg transition-colors border-none cursor-pointer ${
                  currentPage === item.id
                    ? "bg-secondary-container/15 text-secondary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onRequestQuote();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container text-[14px] font-bold py-3 rounded-full hover:bg-secondary-fixed transition-all shadow-md cursor-pointer border-none"
              >
                <span>Request a Quote</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};