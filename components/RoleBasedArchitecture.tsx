import { Check } from "lucide-react";

export default function RoleBasedArchitecture() {
  return (
    <section className="py-28 bg-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-[#EEF2FF] text-[#4F46E5]">
            Architecture
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
            Built around institutional roles
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Admin & Faculty */}
          <div className="rounded-2xl bg-[#F4F7FF] p-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white mb-6">
              📊
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Admin & Faculty Portals
            </h3>

            <p className="text-muted text-sm mb-6 max-w-md">
              Granular access control for every stakeholder in the academic
              process.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Institution Admin",
                "Principal & HOD Views",
                "Faculty Course Management",
                "Department Admins",
                "Placement co-ordinators",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#4F46E5] text-[#4F46E5]">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Student Portal */}
          <div className="rounded-2xl bg-white border border-border p-8 shadow-[var(--shadow-soft)]">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] mb-6">
              🎓
            </div>

            <h3 className="text-lg font-semibold mb-2">Student Portal</h3>

            <p className="text-muted text-sm mb-6 max-w-md">
              A focused environment for learning, assessments, and career
              growth.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Dedicated Student Dashboard",
                "Assessment & Assignment Submission",
                "AI Mock Interviews for practice",
                "Placement Eligibility Tracking",
                "Simple, Mobile-Friendly UI",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#4F46E5] text-[#4F46E5]">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
