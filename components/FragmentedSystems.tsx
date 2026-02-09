import { Link2Off, ClipboardCheck, EyeOff, TrendingDown } from "lucide-react";

const items = [
  {
    title: "Disconnected Tools",
    description:
      "Admin, faculty, and student portals operate in isolation, leading to data redundancy and manual sync errors.",
    icon: Link2Off,
  },
  {
    title: "Manual Evaluations",
    description:
      "Faculty spend countless hours grading assessments manually, slowing down feedback loops for students.",
    icon: ClipboardCheck,
  },
  {
    title: "Zero Visibility",
    description:
      "Principals and HODs lack real-time dashboards to track student performance and attendance at a glance.",
    icon: EyeOff,
  },
  {
    title: "Weak Placement Link",
    description:
      "Academic scores aren't automatically translated into placement readiness, leaving placement cells guessing.",
    icon: TrendingDown,
  },
];

export default function FragmentedSystems() {
  return (
    <section className="relative bg-gradient-to-b from-[#F4F7FF] to-[#EEF2FF] py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
            Institutions are running on fragmented systems
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Legacy tools and spreadsheets are creating silos between academic
            delivery and student outcomes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl lg:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF2FF] mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
