"use client";

import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="max-w-[1400px] mx-auto pb-16 px-4 md:px-8">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
        <div className="flex">
          {/* Sidebar SVG - Left side with no gap */}
          <div className="flex">
            <Image
              src="/Side_bar.svg"
              alt="Dashboard Sidebar"
              width={280}
              height={600}
              className="w-auto h-full object-cover"
              priority
            />
          </div>

          {/* Main Dashboard SVG - Right side seamlessly connected */}
          <div className="flex">
            <Image
              src="/Frame_242.svg"
              alt="Institution Admin Dashboard"
              width={920}
              height={600}
              className="w-auto h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
