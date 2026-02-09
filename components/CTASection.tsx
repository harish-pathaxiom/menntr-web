export default function CTASection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
          Modernize academic and placement operations
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Mentrr is currently onboarding institutions for early adoption. Join
          the future of education management today.
        </p>

        {/* CTA Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Request Demo
        </button>
      </div>
    </section>
  );
}
