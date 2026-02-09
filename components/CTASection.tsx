export default function CTASection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Modernize academic and placement operations
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Mentrr is currently onboarding institutions for early adoption. Join
          the future of education management today.
        </p>

        {/* CTA Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
          Request Demo
        </button>
      </div>
    </section>
  );
}
