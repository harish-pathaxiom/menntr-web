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
      "Academic scores aren’t automatically translated into placement readiness, leaving placement cells guessing.",
    icon: TrendingDown,
  },
];

export default function FragmentedSystems() {
  return (
    <section className="relative bg-gradient-to-b from-[#F4F7FF] to-[#EEF2FF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Institutions are running on fragmented systems
          </h2>
          <p className="mt-4 text-muted">
            Legacy tools and spreadsheets are creating silos between academic
            delivery and student outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF2FF] mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
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
