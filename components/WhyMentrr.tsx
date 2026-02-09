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
    <section className="bg-[#0a1628] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why institutions choose Mentrr
          </h2>
          <p className="text-gray-400 text-lg">
            Designed for the scale and complexity of modern education.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0f1d2f] border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
