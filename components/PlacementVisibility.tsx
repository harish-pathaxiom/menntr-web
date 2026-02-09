import Image from "next/image";

export default function PlacementVisibility() {
  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Unified Student Profiles",
      description:
        "A single view of academic history and placement eligibility.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Company Matching",
      description:
        "Students only see companies they are eligible for, reducing administrative noise.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* LEFT — Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-xl">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                From performance to placement visibility
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Bridge the gap between academics and careers. Mentrr
                automatically calculates placement readiness based on
                assessment, assignment scores and AI interview performance.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dashboard images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none">
              {/* Main dashboard */}
              <div className="relative">
                <Image
                  src="/Student_dashboard_1.svg"
                  alt="Placement dashboard"
                  width={440}
                  height={350}
                  className="rounded-xl shadow-lg w-full h-auto"
                  priority
                />
              </div>

              {/* Bottom-right overlay card - hidden on mobile, visible on sm+ */}
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 lg:bottom-0 -right-4 sm:-right-8 lg:-right-12 w-[200px] sm:w-[240px] lg:w-[260px]">
                <Image
                  src="/Student_info_1.svg"
                  alt="Student profile summary"
                  width={260}
                  height={180}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
