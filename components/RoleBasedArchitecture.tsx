const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9.5" stroke="#4F46E5" strokeWidth="1" />
    <path
      d="M6 10L9 13L14 7"
      stroke="#4F46E5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function RoleBasedArchitecture() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 px-3 py-1 text-xs rounded-full bg-[#EEF2FF] text-[#4F46E5] font-medium">
            Architecture
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] px-4">
            Built around institutional roles
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Admin & Faculty */}
          <div className="rounded-xl lg:rounded-2xl bg-[#F4F7FF] p-6 sm:p-8">
            <div className="mb-5 sm:mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="8" fill="#2F4ED8" />
                <path
                  d="M22 24H26M22 20H26M26 33V30C26 28.8962 25.1038 28 24 28C22.8962 28 22 28.8962 22 30V33"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22H16C14.8962 22 14 22.8962 14 24V31C14 32.1038 14.8962 33 16 33H32C33.1038 33 34 32.1038 34 31V21C34 19.8962 33.1038 19 32 19H30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 33V17C18 15.8962 18.8962 15 20 15H28C29.1038 15 30 15.8962 30 17V33"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
              Admin & Faculty Portals
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 max-w-md">
              Granular access control for every stakeholder in the academic
              process.
            </p>

            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Institution Admin",
                "Principal & HOD Views",
                "Faculty Course Management",
                "Department Admins",
                "Placement co-ordinators",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Portal */}
          <div className="rounded-xl lg:rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="mb-5 sm:mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="8" fill="#E0F2FE" />
                <path
                  d="M33.4208 22.9214C33.7867 22.76 34.0212 22.396 34.0171 21.9961C34.013 21.5962 33.7709 21.2372 33.4018 21.0834L24.8308 17.1794C24.3036 16.9389 23.698 16.9389 23.1708 17.1794L14.6008 21.0794C14.237 21.2387 14.002 21.5982 14.002 21.9954C14.002 22.3925 14.237 22.7521 14.6008 22.9114L23.1708 26.8194C23.698 27.0599 24.3036 27.0599 24.8308 26.8194L33.4208 22.9214M34.0008 21.9994V27.9994"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 24.499V27.999C18 29.6548 20.6885 30.999 24 30.999C27.3115 30.999 30 29.6548 30 27.999V24.499"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
              Student Portal
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 max-w-md">
              A focused environment for learning, assessments, and career
              growth.
            </p>

            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Dedicated Student Dashboard",
                "Assessment & Assignment Submission",
                "AI Mock Interviews for practice",
                "Placement Eligibility Tracking",
                "Simple, Mobile-Friendly UI",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
