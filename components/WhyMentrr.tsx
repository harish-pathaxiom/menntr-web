export default function WhyMentrr() {
  const features = [
    {
      title: "Education-First Design",
      description:
        "Not a generic CRM. Every feature is built for universities, colleges, and academic workflows.",
    },
    {
      title: "Strict Access Control",
      description:
        "Role-based security ensures data integrity and privacy across admins, faculty, and students.",
    },
    {
      title: "Academics-to-Placement",
      description:
        "The only platform that seamlessly connects daily academic performance to final placement outcomes.",
    },
    {
      title: "Automated Evaluation",
      description:
        "Reduce manual grading effort by 80% with automated assessment rules set by admins and in-control publishing results.",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Handles thousands of concurrent users, assessments, and data points without slowdowns.",
    },
    {
      title: "Measurable Outcomes",
      description:
        "Move beyond guesswork. Make decisions based on real-time data and analytics.",
    },
  ];

  return (
    <section className="bg-[#0a1628] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Why institutions choose Mentrr
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Designed for the scale and complexity of modern education.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0f1d2f] border border-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 hover:border-gray-700 hover:bg-[#12233a] transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
