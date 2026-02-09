"use client";

import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="max-w-[1400px] mx-auto pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex">
          {/* Sidebar SVG */}
          <div className="flex-shrink-0">
            <Image
              src="/Side_bar.svg"
              alt="Dashboard Sidebar"
              width={280}
              height={600}
              className="w-auto h-full object-cover"
              priority
            />
          </div>

          {/* Main Dashboard SVG */}
          <div className="flex-grow">
            <Image
              src="/Frame_242.svg"
              alt="Institution Admin Dashboard"
              width={920}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Mobile & Tablet Layout - Stacked */}
        <div className="lg:hidden">
          {/* Main Dashboard (shown first on mobile) */}
          <div className="w-full">
            <Image
              src="/Frame_242.svg"
              alt="Institution Admin Dashboard"
              width={920}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Sidebar (shown below on mobile) */}
          <div className="w-full border-t border-gray-200 sm:hidden">
            <Image
              src="/Side_bar.svg"
              alt="Dashboard Sidebar"
              width={280}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
