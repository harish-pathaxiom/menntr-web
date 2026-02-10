"use client";

import Image from "next/image";

export default function AutomatedAssessments() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24"
      style={{ background: "linear-gradient(90deg, #F2F4F9 0%, #E8EEFF 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* LEFT — Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
                Automated assessments with controlled re-attempts
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Streamline the entire evaluation process. Create complex
                assignments, define pass criteria, and let the system handle
                grading and re-attempts automatically.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Flexible Creation */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                    Flexible Creation
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                    Create MCQ, coding tests, and written assignments easily.
                  </p>
                </div>
              </div>

              {/* Rule-Based Evaluation */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6m5.196-14.196l-4.243 4.243m0 5.656l-4.242 4.243m9.9-4.243l-4.243-4.242m0 5.656l-4.242-4.242" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                    Rule-Based Evaluation
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                    Set auto-fail criteria and enable conditional re-attempts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Assessment Dashboard SVG */}
          <div className="relative flex justify-center lg:justify-end items-center order-2 lg:order-2">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              <Image
                src="/Assessments_1.svg"
                alt="Assessment Dashboard"
                width={600}
                height={400}
                className="rounded-xl lg:rounded-2xl shadow-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
