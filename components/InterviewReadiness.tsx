import Image from "next/image";

export default function InterviewReadiness() {
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
            d="M12 8V4H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8H18C19.1038 8 20 8.89617 20 10V18C20 19.1038 19.1038 20 18 20H6C4.89617 20 4 19.1038 4 18V10C4 8.89617 4.89617 8 6 8V8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 14H4M20 14H22M15 13V15M9 13V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 17.5192 6.48085 22 12 22C17.5192 22 22 17.5192 22 12C22 6.48085 17.5192 2 12 2C6.48085 2 2 6.48085 2 12V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 12C6 15.3115 8.68851 18 12 18C15.3115 18 18 15.3115 18 12C18 8.68851 15.3115 6 12 6C8.68851 6 6 8.68851 6 12H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12C10 13.1038 10.8962 14 12 14C13.1038 14 14 13.1038 14 12C14 10.8962 13.1038 10 12 10C10.8962 10 10 10.8962 10 12V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Skill Gap Identification",
      description:
        "Pinpoint specific areas where students need improvement before placements.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #F7F8FA 0%, #F7F8FA 100%)",
      }}
    >
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
        </div>
      </div>
    </section>
  );
}
