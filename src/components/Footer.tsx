import React from "react";
import { PageId } from "./Navbar.tsx";

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal?: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary-container/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-10/12 mx-auto px-6 lg:px-12 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <button
              onClick={() => handleNav("home")}
              className="flex items-center group cursor-pointer border-none bg-transparent p-0"
            >
              <img
                src="/footer logo.png"
                alt="Elevate Paint Co. Logo"
                className="h-10 sm:h-14 w-auto object-contain transition-transform "
              />
            </button>
            <p className="text-[15px] text-primary-fixed-dim mb-6 max-w-sm leading-relaxed">
              Transforming homes and businesses with certified painting
              excellence since 2012
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav("contact")}
                aria-label="Location Map"
                className="w-10 h-10 rounded-full bg-inverse-surface flex items-center justify-center text-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all border-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  pin_drop
                </span>
              </button>
              <a
                aria-label="Email Us"
                href="mailto:hello@painter.com"
                className="w-10 h-10 rounded-full bg-inverse-surface flex items-center justify-center text-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
              <a
                aria-label="Call Us"
                href="tel:+12345678900"
                className="w-10 h-10 rounded-full bg-inverse-surface flex items-center justify-center text-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all"
              >
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
              <button
                onClick={() => handleNav("projects")}
                aria-label="Reviews and Ratings"
                className="w-10 h-10 rounded-full bg-inverse-surface flex items-center justify-center text-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all border-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">star</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] text-surface font-bold tracking-wide uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-[15px] list-none p-0 m-0">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about-us")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("projects")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("pricing")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] text-surface font-bold tracking-wide uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-[15px] list-none p-0 m-0">
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Interior Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Exterior Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Commercial Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Color Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Cabinet &amp; Trim Refinishing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] text-surface font-bold tracking-wide uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-[15px] text-primary-fixed-dim list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5 shrink-0">
                  phone
                </span>
                <a
                  href="tel:+12345678900"
                  className="text-primary-fixed-dim hover:text-surface transition-colors"
                >
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5 shrink-0">
                  mail
                </span>
                <a
                  href="mailto:hello@painter.com"
                  className="text-primary-fixed-dim hover:text-surface transition-colors"
                >
                  hello@painter.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5 shrink-0">
                  location_on
                </span>
                <span>
                  123 Color Street, Suite 400
                  <br />
                  Design District, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-inverse-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-on-primary-container">
          <p className="m-0">
            © 2024 Painter Services Contractor. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal?.("Privacy Policy")}
              className="hover:text-surface transition-colors bg-transparent border-none p-0 text-[13px] text-on-primary-container cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal?.("Terms of Service")}
              className="hover:text-surface transition-colors bg-transparent border-none p-0 text-[13px] text-on-primary-container cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal?.("Licensing & Bond")}
              className="hover:text-surface transition-colors bg-transparent border-none p-0 text-[13px] text-on-primary-container cursor-pointer"
            >
              Licensing &amp; Bond
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
