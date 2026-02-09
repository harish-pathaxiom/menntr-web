export default function InstitutionalCommunication() {
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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Broadcasts",
      description: "Campus-wide alerts for important updates.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Targeted Groups",
      description: "Message specific batches or departments.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-gray-900">Mentrr</div>
                    <span className="text-sm text-gray-500">
                      Institution Admin Portal
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  </div>
                </div>
              </div>

              {/* Sidebar and Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-48 bg-gray-50 border-r border-gray-200 p-4 space-y-2">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-purple-600 bg-purple-50 rounded-lg font-medium">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Organization
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    User Management
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Assignment
                  </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Welcome Message */}
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Welcome back, Jared 👋
                      </div>
                      <div className="text-xs text-gray-500">
                        Here's what's happening with your institution today
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">
                        Total Students
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-gray-900">
                          1100
                        </div>
                        <div className="text-xs text-green-600 flex items-center">
                          ↑ 13%
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Compared to last month
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Faculty</div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-gray-900">
                          150
                        </div>
                        <div className="text-xs text-green-600 flex items-center">
                          ↑ 8%
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Active this month
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-4">
                      Avg Academic Performance
                    </div>
                    <div className="relative">
                      <div className="w-40 h-40 mx-auto">
                        <svg className="transform -rotate-90 w-40 h-40">
                          <circle
                            cx="80"
                            cy="80"
                            r="60"
                            stroke="#E5E7EB"
                            strokeWidth="16"
                            fill="none"
                          />
                          <circle
                            cx="80"
                            cy="80"
                            r="60"
                            stroke="url(#gradient)"
                            strokeWidth="16"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 60 * 0.75} ${2 * Math.PI * 60}`}
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#EC4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900">
                              75%
                            </div>
                            <div className="text-xs text-gray-500">Average</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">High performers</span>
                          <span className="font-medium text-gray-900">
                            122 students
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">
                            At-risk students
                          </span>
                          <span className="font-medium text-orange-600">
                            19 students
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Panel */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-3">
                      Notifications
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5"></div>
                        <div className="flex-1">
                          <div className="text-gray-900">
                            New assessment has been assigned to CSE
                          </div>
                          <div className="text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5"></div>
                        <div className="flex-1">
                          <div className="text-gray-900">
                            Results published for Practice Test - Python
                          </div>
                          <div className="text-gray-500">5 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcement Modal Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-2">
                    Send Announcement to
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Select the audience for this announcement
                  </div>
                  <div className="flex gap-2 mb-4">
                    <button className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg font-medium">
                      Admin & Faculty
                    </button>
                    <button className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg">
                      Students
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="flex-1 px-4 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                      Send
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
                Centralized institutional communication
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Eliminate missed emails and hallway notices. Broadcast official
                announcements or send targeted messages to specific departments
                and student groups directly within the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
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
