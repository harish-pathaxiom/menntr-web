export default function PlacementVisibility() {
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
          className="w-6 h-6"
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
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From performance to placement visibility
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bridge the gap between academics and careers. Mentrr
                automatically calculates placement readiness based on
                assessment, assignment scores and AI interview performance.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700">
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

          {/* Right Side - Dashboard Mockup */}
          <div className="relative">
            <div className="relative transform lg:rotate-2 lg:scale-105">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-sm font-semibold">MK</span>
                      </div>
                      <div>
                        <div className="font-semibold">
                          Mahendrakumar Jadeja
                        </div>
                        <div className="text-xs text-purple-100">
                          B.Tech Computer Science • Batch 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">CGPA</div>
                      <div className="text-2xl font-bold text-gray-900">
                        2/16
                      </div>
                      <div className="text-xs text-gray-400">Out of class</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Assignments
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        14/16
                      </div>
                      <div className="text-xs text-gray-400">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Skills</div>
                      <div className="text-2xl font-bold text-gray-900">
                        7.5/10
                      </div>
                      <div className="text-xs text-gray-400">
                        Technical score
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Communication
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        8/58
                      </div>
                      <div className="text-xs text-gray-400">
                        Interview score
                      </div>
                    </div>
                  </div>

                  {/* Assessments Section */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Pending Assessments
                      </h3>
                      <button className="text-xs text-purple-600 font-medium">
                        View all &rarr;
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Data Structures Quiz
                        </span>
                        <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded-full">
                          Due tomorrow
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          The Next Step
                        </span>
                        <span className="text-xs text-gray-500">
                          Due in 2 days
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Placement Readiness */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">
                      Placement Readiness
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-24">
                        <svg className="transform -rotate-90 w-24 h-24">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="#E5E7EB"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="#10B981"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40 * 0.85} ${2 * Math.PI * 40}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">
                            85%
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-2">
                          Ready for placement
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Strong technical skills</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span>Improve communication</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Chart Preview */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">
                      Performance Overview
                    </h3>
                    <div className="h-32 flex items-end justify-between gap-2">
                      <div
                        className="flex-1 bg-blue-500 rounded-t"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="flex-1 bg-blue-500 rounded-t"
                        style={{ height: "85%" }}
                      ></div>
                      <div
                        className="flex-1 bg-blue-500 rounded-t"
                        style={{ height: "70%" }}
                      ></div>
                      <div
                        className="flex-1 bg-red-400 rounded-t"
                        style={{ height: "45%" }}
                      ></div>
                      <div
                        className="flex-1 bg-red-400 rounded-t"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="flex-1 bg-yellow-400 rounded-t"
                        style={{ height: "65%" }}
                      ></div>
                      <div
                        className="flex-1 bg-green-500 rounded-t"
                        style={{ height: "75%" }}
                      ></div>
                      <div
                        className="flex-1 bg-yellow-400 rounded-t"
                        style={{ height: "55%" }}
                      ></div>
                      <div
                        className="flex-1 bg-red-400 rounded-t"
                        style={{ height: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements for Depth */}
              <div className="absolute -right-4 top-20 w-48 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
                <div className="text-xs font-semibold text-gray-700 mb-2">
                  Eligible Companies
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded"></div>
                    <span className="text-xs text-gray-600">Microsoft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded"></div>
                    <span className="text-xs text-gray-600">Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
