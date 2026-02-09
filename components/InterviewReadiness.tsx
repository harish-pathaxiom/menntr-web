import Image from "next/image";

export default function InterviewReadiness() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
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
          className="w-6 h-6"
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
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mock Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              {/* Mock Interview Interface */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Mentrr
                    </div>
                    <div className="text-xs text-gray-500">
                      AI Interview Practice
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Time: 08:24:35</div>
                    <div className="text-xs text-purple-600 font-medium">
                      Q 2/10 - Advanced
                    </div>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                    1
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                    ✓
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                    2
                  </div>
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400"
                    >
                      {i + 3}
                    </div>
                  ))}
                </div>

                {/* Student Profile */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-500">
                      Computer Science
                    </div>
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">
                    Question 2:
                  </div>
                  <div className="text-base font-semibold text-gray-900">
                    What is the difference between BIT and a variable in Python?
                  </div>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-purple-50 border-2 border-purple-500 rounded-lg">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-700">
                        A variable is a named storage location in memory while
                        BIT stores single binary values.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-gray-600">
                        I am not sure about it. Can you explain it to me again
                        please?
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-gray-600">
                        Both BIT and variable are essentially the same; you can
                        name a variable anything.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4">
                  <div className="text-xs text-gray-500">
                    2/10 Questions Answered
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 text-sm font-medium text-purple-600 bg-white border border-purple-600 rounded-full hover:bg-purple-50 transition-colors">
                      Prev Question
                    </button>
                    <button className="px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                      Next Question →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-powered interview readiness
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prepare students for the real world with AI-driven mock
                interviews that provide instant, actionable feedback on
                communication and technical skills.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
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
