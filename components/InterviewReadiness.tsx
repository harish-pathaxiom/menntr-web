import Image from "next/image";

export default function InterviewReadiness() {
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Automated Feedback",
      description:
        "Detailed analysis of speech pace, clarity, and keyword usage.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Skill Gap Identification",
      description:
        "Pinpoint specific areas where students need improvement before placements.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - SVG Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-[500px] lg:max-w-full mx-auto">
              <Image
                src="/MCQ_test_1.svg"
                alt="AI Interview Practice Interface"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl lg:rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                AI-powered interview readiness
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Prepare students for the real world with AI-driven mock
                interviews that provide instant, actionable feedback on
                communication and technical skills.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
