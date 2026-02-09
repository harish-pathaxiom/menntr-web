import { Check } from "lucide-react";

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
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white mb-5 sm:mb-6 text-xl">
              📊
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
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#4F46E5] text-[#4F46E5] flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Portal */}
          <div className="rounded-xl lg:rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] mb-5 sm:mb-6 text-xl">
              🎓
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
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#4F46E5] text-[#4F46E5] flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
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
