"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
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
            <button className="text-sm text-gray-700 bg-[#F2F4F9] px-5 py-2 rounded-full hover:bg-[#E8ECF6] transition-all duration-200">
              Log in
            </button>
            <button className="text-white text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-sm bg-gradient-to-r from-[#904BFF] to-[#C053C2] hover:opacity-90">
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
                <button className="text-sm text-black bg-[#F2F4F9] px-5 py-2.5 rounded-full text-center hover:bg-[#E8ECF6] transition-all duration-200">
                  Log in
                </button>
                <button className="text-white text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm bg-gradient-to-r from-[#904BFF] to-[#C053C2] hover:opacity-90">
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
