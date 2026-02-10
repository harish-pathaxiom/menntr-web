import Image from "next/image";

export default function PlacementVisibility() {
  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3V21H21M18 17V9M13 17V5M8 17V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 20V4C16 2.89617 15.1038 2 14 2H10C8.89617 2 8 2.89617 8 4V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6H20C21.1038 6 22 6.89617 22 8V18C22 19.1038 21.1038 20 20 20H4C2.89617 20 2 19.1038 2 18V8C2 6.89617 2.89617 6 4 6V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Company Matching",
      description:
        "Students only see companies they are eligible for, reducing administrative noise.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-24"
      style={{ background: "linear-gradient(90deg, #F2F4F9 0%, #E8EEFF 100%)" }}
    >
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
                <div key={index} className="space-y-2">
                  <div className="flex gap-2 sm:gap-3 items-center">
                    <div className="flex-shrink-0 text-gray-900 w-5 sm:w-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 sm:w-6"></div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dashboard images */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Desktop view - with overlay */}
            <div className="hidden lg:block relative w-full max-w-none">
              <div className="relative">
                <Image
                  src="/Student_dashboard_1.svg"
                  alt="Placement dashboard"
                  width={440}
                  height={350}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>

              {/* Bottom-right overlay card - desktop only */}
              <div className="absolute -bottom-1 -right-50 w-[500px]">
                <Image
                  src="/Student_info_1.svg"
                  alt="Student profile summary"
                  width={350}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Mobile/Tablet view - single image only */}
            <div className="lg:hidden relative w-full max-w-[500px]">
              <Image
                src="/Student_dashboard_1.svg"
                alt="Placement dashboard"
                width={440}
                height={350}
                className="rounded-xl shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
