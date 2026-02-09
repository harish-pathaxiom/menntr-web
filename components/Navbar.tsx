"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              Menntr
            </div>
            <div className="hidden sm:block text-xs text-gray-500 max-w-[150px] md:max-w-none">
              Smarter Campus Management
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#why"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Why Menntr?
            </a>
            <a
              href="#rbac"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              RBAC
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors">
              Log in
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-lg transition-colors shadow-sm">
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
                href="#features"
                className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#why"
                className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Menntr?
              </a>
              <a
                href="#rbac"
                className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RBAC
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button className="text-sm text-gray-700 hover:text-gray-900 py-2 text-left">
                  Log in
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
