"use client";

export default function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto pb-16 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xl font-bold text-gray-900">Menntr</div>
              </div>
              <div className="text-xs text-gray-500">
                Smarter Campus Management for Everyone
              </div>
            </div>

            <nav className="space-y-2 flex-1">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-purple-700 bg-purple-100 rounded-xl font-medium transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <rect
                    x="3"
                    y="11"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <rect
                    x="11"
                    y="3"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 3L3 7V13L10 17L17 13V7L10 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                Organization
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="7"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M5 17C5 14.2386 7.23858 12 10 12C12.7614 12 15 14.2386 15 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                User Management
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M3 17C3 14.2386 4.79086 12 7 12C9.20914 12 11 14.2386 11 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                Student Management
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="12"
                    height="12"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M4 8H16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Assessment
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="4"
                    y="3"
                    width="12"
                    height="14"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M7 7H13M7 10H13M7 13H10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Assignment
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200">
              <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-semibold">
                N
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-br from-gray-50 to-white">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-purple-700"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Institution Admin Portal
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className="text-gray-600"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors relative">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className="text-gray-600"
                    >
                      <path
                        d="M11 3C7.68629 3 5 5.68629 5 9C5 12.3137 7.68629 15 11 15C14.3137 15 17 12.3137 17 9C17 5.68629 14.3137 3 11 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M5 15L3 19H19L17 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                    J
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              {/* Welcome Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">👋</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        Welcome back, Javed
                      </h2>
                      <p className="text-sm text-gray-600">
                        Here's your institution performance summary
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 px-4 py-2.5 rounded-xl border border-orange-200 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle
                        cx="9"
                        cy="9"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M9 5V9L12 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      Your plan is going to expire
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Total Students */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5 text-gray-600 mb-5">
                    <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-emerald-600"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M5 17C5 14.2386 7.23858 12 10 12C12.7614 12 15 14.2386 15 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      Total Students
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        1100
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 13V5M9 5L5 9M9 5L13 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-base font-bold">15%</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Compared to last month
                      </div>
                    </div>
                    <div className="h-20 w-28">
                      <svg viewBox="0 0 100 70" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="greenGrad"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#10B981"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#10B981"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 55 Q 20 50 40 35 T 80 15 L 80 70 L 0 70 Z"
                          fill="url(#greenGrad)"
                        />
                        <path
                          d="M 0 55 Q 20 50 40 35 T 80 15"
                          stroke="#10B981"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Faculty Members */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5 text-gray-600 mb-5">
                    <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-amber-600"
                      >
                        <circle
                          cx="7"
                          cy="6"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <circle
                          cx="13"
                          cy="6"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M3 16C3 13.7909 4.79086 12 7 12C9.20914 12 11 13.7909 11 16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M9 16C9 13.7909 10.7909 12 13 12C15.2091 12 17 13.7909 17 16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      Faculty Members
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        150
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 5V13M9 13L5 9M9 13L13 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-base font-bold">1%</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Compared to last month
                      </div>
                    </div>
                    <div className="h-20 w-28">
                      <svg viewBox="0 0 100 70" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="amberGrad"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#F59E0B"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#F59E0B"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 35 Q 20 30 40 40 T 80 25 L 80 70 L 0 70 Z"
                          fill="url(#amberGrad)"
                        />
                        <path
                          d="M 0 35 Q 20 30 40 40 T 80 25"
                          stroke="#F59E0B"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Assessments */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5 text-gray-600 mb-5">
                    <div className="w-9 h-9 bg-rose-50 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-rose-600"
                      >
                        <rect
                          x="4"
                          y="3"
                          width="12"
                          height="14"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M7 7H13M7 10H13M7 13H10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      Assessments
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        12
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-600 mb-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 5V13M9 13L5 9M9 13L13 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-base font-bold">10%</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        Compared to last month
                      </div>
                      <div className="inline-block bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg text-xs font-semibold">
                        3 due today
                      </div>
                    </div>
                    <div className="h-20 w-28">
                      <svg viewBox="0 0 100 70" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="roseGrad"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#EF4444"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#EF4444"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 25 Q 20 20 40 30 T 80 45 L 80 70 L 0 70 Z"
                          fill="url(#roseGrad)"
                        />
                        <path
                          d="M 0 25 Q 20 20 40 30 T 80 45"
                          stroke="#EF4444"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-2 gap-6">
                {/* Academic Performance */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="text-indigo-600"
                        >
                          <path
                            d="M3 13L7 9L11 13L17 7"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        Avg Academic Performance
                      </span>
                    </div>
                    <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors">
                      All Departments
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mb-6">
                    Minimum requirement: 75%
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-44 h-44">
                      <svg className="transform -rotate-90 w-44 h-44">
                        <circle
                          cx="88"
                          cy="88"
                          r="70"
                          stroke="#F3F4F6"
                          strokeWidth="14"
                          fill="none"
                        />
                        <circle
                          cx="88"
                          cy="88"
                          r="70"
                          stroke="url(#purpleGradient)"
                          strokeWidth="14"
                          fill="none"
                          strokeDasharray="440"
                          strokeDashoffset="128"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="purpleGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                          71%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          High performers
                        </span>
                      </div>
                      <span className="font-bold text-gray-900">
                        375 students
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          At-risk students
                        </span>
                      </div>
                      <span className="font-bold text-gray-900">
                        50 students
                      </span>
                    </div>
                  </div>
                </div>

                {/* Placement Readiness */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-blue-600"
                      >
                        <path
                          d="M10 2L3 7V13L10 17L17 13V7L10 2Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      Placement Readiness Overview
                    </span>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2.5">
                        <span className="text-gray-700 font-semibold">
                          Ready for placement
                        </span>
                        <span className="font-bold text-gray-900">
                          300/1100 students
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2.5">
                        <span>
                          74% students scoring above the required threshold
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-sm"
                          style={{ width: "27%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2.5">
                        <span className="text-gray-700 font-semibold">
                          Needs improvement
                        </span>
                        <span className="font-bold text-gray-900">
                          800/1100 students
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2.5">
                        <span>163 students requiring significant support</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full shadow-sm"
                          style={{ width: "73%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 font-medium">
                          Minimum Score Requirement:{" "}
                          <span className="text-gray-900 font-bold">94%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Performance by Department */}
              {/* <div className="mt-6 bg-white/50 rounded-2xl border border-gray-200 p-6 opacity-40">
                <div className="text-sm font-semibold text-gray-900 mb-3">
                  Academic Performance by department
                </div>
                <div className="h-32 bg-gray-100 rounded-xl"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
