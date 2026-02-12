"use client";

import Image from "next/image";

export default function AboutMentrr() {
  return (
    <main
      className="text-gray-900"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #F7F8FA 0%, #F7F8FA 100%)",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="pt-20 pb-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-[#0F172A]">
            About Menntr
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Menntr is an enterprise academic and placement management platform
            designed to help universities and colleges manage academics,
            assessments, and career readiness from a single unified system.
          </p>
        </div>
      </section>

      {/* ================= WHY BUILT ================= */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-[#0F172A]">
              Why Menntr Was Built
            </h2>

            <p className="text-gray-500 mb-5 leading-relaxed text-base">
              Menntr was created to solve a common challenge in higher
              education: fragmented systems, manual processes, and lack of
              visibility between academic performance and real-world career
              outcomes.
            </p>

            <p className="text-gray-500 leading-relaxed text-base">
              Traditional tools operate in silos, making it difficult for
              institutions to track student progress holistically and prepare
              them effectively for placements.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/about_us_image_1.svg"
                alt="Mentrr Platform"
                width={460}
                height={340}
                className="w-full max-w-md rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-[#0F172A]">
            What We Do
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-4xl">
            Menntr brings structure, automation, and intelligence into
            institutional workflows by centralizing academic operations,
            evaluations, communication, and placement readiness into a
            role-based platform tailored for modern educational institutions.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-6">
            {[
              "Manage administrators, faculty, and students through role-based access",
              "Conduct automated assessments and evaluations",
              "Provide AI-powered interview practice and feedback",
              "Track placement readiness using academic and skill data",
              "Centralize institutional communication",
              "Provide real-time dashboards for academic performance and outcomes",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image
                    src="/tick.svg"
                    alt="tick"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-20 px-6 bg-[#F2F3F8] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#111827] font-semibold mb-8">
            Our Mission
          </p>

          <blockquote className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-normal">
            “To bridge the gap between education and employability by enabling
            institutions to make data-driven academic and placement decisions
            through automation, analytics, and AI-driven insights.”
          </blockquote>
        </div>
      </section>
      {/* ================= OUR APPROACH ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mb-12">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education-First Design",
                desc: "Unlike generic CRMs or LMS tools, Menntr is built specifically for higher education workflows, addressing the operational complexity of universities and colleges.",
              },
              {
                title: "Automation & Intelligence",
                desc: "Assessment automation and AI-powered analysis reduce manual effort while improving feedback cycles and student readiness.",
              },
              {
                title: "Role-Based Governance",
                desc: "Administrators, faculty, placement teams, and students operate within secure, role-based environments ensuring data integrity and accountability.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILT FOR REAL OUTCOMES ================= */}
      <section className="pb-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mb-4">
            Built for Real Outcomes
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-3xl mx-auto">
            Menntr connects academic performance directly to placement
            eligibility, allowing institutions to move from manual tracking to
            measurable outcomes.
          </p>

          {/* FLOW PILLS */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-6 mb-16">
            {[
              "Academics",
              "Assessments",
              "Skill Readiness",
              "Placement Visibility",
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <span
                  className={`px-6 py-2 text-sm rounded-full font-medium transition-all duration-200 ${
                    index === 3
                      ? "border border-[#7C3AED] text-[#7C3AED] bg-[#EDE9FE]"
                      : "bg-[#EDE9FE] text-[#7C3AED]"
                  }`}
                >
                  {item}
                </span>

                {/* Arrow */}
                {index !== 3 && (
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-70 rotate-90 md:rotate-0 transition-transform duration-200"
                  />
                )}
              </div>
            ))}
          </div>

          {/* OUTCOME CARD */}
          <div className="relative max-w-3xl mx-auto">
            {/* Soft purple glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#E9D5FF] via-[#F5F3FF] to-[#E9D5FF] blur-2xl opacity-60"></div>

            <div className="relative bg-white rounded-full px-12 py-14 shadow-[0_10px_30px_rgba(124,58,237,0.08)] border border-[#E9D5FF]">
              <p className="text-gray-600 leading-relaxed text-base">
                <span className="text-[#7C3AED] font-semibold text-lg">
                  Menntr
                </span>{" "}
                is built for institutions that want more than administrative
                efficiency, it is designed for measurable academic growth and
                career readiness impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
