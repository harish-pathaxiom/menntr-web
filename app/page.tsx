"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardPreview from "@/components/DashboardPreview";
import FragmentedSystems from "@/components/FragmentedSystems";
import ValueProposition from "@/components/ValueProposition";
import RoleBasedArchitecture from "@/components/RoleBasedArchitecture";
import AutomatedAssessments from "@/components/AutomatedAssessments";
import WhyMentrr from "@/components/WhyMentrr";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InterviewReadiness from "@/components/InterviewReadiness";
import PlacementVisibility from "@/components/PlacementVisibility";
import InstitutionalCommunication from "@/components/InstitutionalCommunication";
import RequestDemoModal from "@/components/RequestDemoModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #E8EEFF 100%)",
        }}
      >
        {/* Decorative Border Circle - Top Right */}
        <div className="absolute -top-40 right-5 pointer-events-none hidden lg:block">
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
            <g filter="url(#filter0_d_hero_1)">
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
                id="filter0_d_hero_1"
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-block text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            Enterprise Academic Management
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6 px-2">
            One platform to run academics,
            <br className="hidden sm:block" />
            <span className="sm:inline block">
              {" "}
              assessments, and placements -
            </span>
            <br className="hidden sm:block" />
            <span className="text-[#904BFF]">at scale</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
            Menntr is a role-based platform for universities and colleges to
            manage administrators, faculty, students, assessments, and placement
            readiness with measurable outcomes.
          </p>

          <div className="flex justify-center gap-3 flex-wrap px-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[linear-gradient(90deg,_#904BFF_0%,_#C053C2_100%)] hover:opacity-95 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request Demo
            </button>
            <button className="border border-[#E1D3E8] text-[#6C5477] hover:bg-gray-50 font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-500">
              Talk to Founders
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <DashboardPreview />
      <FragmentedSystems />
      <ValueProposition />
      <RoleBasedArchitecture />
      <AutomatedAssessments />
      <InterviewReadiness />
      <PlacementVisibility />
      <InstitutionalCommunication />
      <WhyMentrr />
      <CTASection />
      <Footer />

      {/* Request Demo Modal */}
      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
