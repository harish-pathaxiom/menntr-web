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
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.659 22H18C19.1038 22 20 21.1038 20 20V8.00001C20.0016 7.35995 19.7474 6.74578 19.294 6.29401L15.706 2.70601C15.2542 2.2526 14.6401 1.99844 14 2.00001H6C4.89617 2.00001 4 2.89618 4 4.00001V13.34"
                      stroke="#0F1724"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9991 2V7C13.9991 7.55192 14.4471 8 14.9991 8H19.9991M10.3771 12.622C11.2058 11.7941 12.5507 11.7948 13.3786 12.6235C14.2064 13.4522 14.2058 14.7971 13.3771 15.625L8.35906 20.637C8.12144 20.8748 7.82772 21.0488 7.50506 21.143L4.63806 21.98C4.46279 22.0311 4.2736 21.9826 4.14451 21.8536C4.01541 21.7245 3.96694 21.5353 4.01806 21.36L4.85406 18.491C4.94843 18.1687 5.12245 17.8753 5.36006 17.638L13.9991 2"
                      stroke="#0F1724"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 17H5M19 7H10"
                      stroke="#0F1724"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 17C14 18.6557 15.3443 20 17 20C18.6557 20 20 18.6557 20 17C20 15.3443 18.6557 14 17 14C15.3443 14 14 15.3443 14 17V17"
                      stroke="#0F1724"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7C4 8.65575 5.34425 10 7 10C8.65575 10 10 8.65575 10 7C10 5.34425 8.65575 4 7 4C5.34425 4 4 5.34425 4 7V7"
                      stroke="#0F1724"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
