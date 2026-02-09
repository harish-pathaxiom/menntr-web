"use client";

import Image from "next/image";

export default function AutomatedAssessments() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[42px] font-bold text-gray-900 mb-5 leading-tight">
                Automated assessments with controlled re-attempts
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Streamline the entire evaluation process. Create complex
                assignments, define pass criteria, and let the system handle
                grading and re-attempts automatically.
              </p>
            </div>

            <div className="space-y-5 mt-8">
              {/* Flexible Creation */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 mt-0.5 shadow-sm">
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
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    Flexible Creation
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Create MCQ, coding tests, and written assignments easily.
                  </p>
                </div>
              </div>

              {/* Rule-Based Evaluation */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 mt-0.5 shadow-sm">
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
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    Rule-Based Evaluation
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Set auto-fail criteria and enable conditional re-attempts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Assessment Dashboard SVG */}
          <div className="relative flex justify-end items-center">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/Assessments_1.svg"
                alt="Assessment Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
