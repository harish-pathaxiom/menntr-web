"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import RequestDemoModal from "./RequestDemoModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestDemo = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsMenuOpen(false);
    window.location.href = "https://app.menntr.in";
  };

  return (
    <>
      <style>{`
        @keyframes ai-border-spin {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .ai-login-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          padding: 2px;
          cursor: pointer;
          border-radius: 9999px;
          overflow: hidden;
        }

        .ai-login-btn-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1000px;
          height: 1000px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            #904BFF 90deg,
            #C053C2 150deg,
            #FF6EE7 210deg,
            #7B2FFF 270deg,
            transparent 300deg,
            transparent 360deg
          );
          animation: ai-border-spin 2s linear infinite;
          pointer-events: none;
        }

        .ai-login-btn-mask {
          position: absolute;
          inset: 2px;
          border-radius: 9999px;
          background: #F2F4F9;
          transition: background 0.2s;
          z-index: 1;
        }

        .ai-login-btn:hover .ai-login-btn-mask {
          background: #E8ECF6;
        }

        .ai-login-btn-text {
          position: relative;
          z-index: 2;
          font-size: 0.875rem;
          color: #374151;
          padding: 6px 20px;
          white-space: nowrap;
        }
      `}</style>

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 relative overflow-hidden">
        {/* Decorative Border Circles - Top Right */}
        <div className="absolute -top-24 right-5 pointer-events-none hidden lg:block">
          <svg
            width="520"
            height="520"
            viewBox="0 0 520 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="519"
              height="519"
              rx="259.5"
              stroke="#CBD5E1"
              strokeDasharray="3 2"
            />
            <g filter="url(#filter0_d_nav_1)">
              <rect
                x="43"
                y="27"
                width="10"
                height="10"
                rx="5"
                fill="#06B6D4"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_nav_1"
                x="39"
                y="23"
                width="18"
                height="18"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_89_1484"
                />
                <feOffset />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.878431 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_89_1484"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_89_1484"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/Container.svg"
                alt="Menntr"
                width={120}
                height={30}
                className="h-7 w-auto sm:h-8"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/#features"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="/#why"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Why Menntr?
              </a>
              <a
                href="/#rbac"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                RBAC
              </a>
              <a
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={handleLogin} className="ai-login-btn">
                <div className="ai-login-btn-bg" />
                <div className="ai-login-btn-mask" />
                <span className="ai-login-btn-text">Log in</span>
              </button>

              <button
                onClick={handleRequestDemo}
                className="text-white text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-sm bg-gradient-to-r from-[#904BFF] to-[#C053C2] hover:opacity-90"
              >
                Request Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a
                  href="/#features"
                  className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/#why"
                  className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Menntr?
                </a>
                <a
                  href="/#rbac"
                  className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  RBAC
                </a>
                <a
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleLogin}
                    className="ai-login-btn"
                    style={{ width: "100%" }}
                  >
                    <div className="ai-login-btn-bg" />
                    <div className="ai-login-btn-mask" />
                    <span
                      className="ai-login-btn-text"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      Log in
                    </span>
                  </button>

                  <button
                    onClick={handleRequestDemo}
                    className="text-white text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm bg-gradient-to-r from-[#904BFF] to-[#C053C2] hover:opacity-90"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Request Demo Modal */}
      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
