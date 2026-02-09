"use client";

import Image from "next/image";

export default function InstitutionalCommunication() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Broadcasts",
      description: "Campus-wide alerts for important updates.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Targeted Groups",
      description: "Message specific batches or departments.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Dashboard SVGs */}
          <div className="relative">
            {/* Main dashboard background */}
            <div className="relative">
              <Image
                src="/User_admin_screen_4__1_.svg"
                alt="Admin dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Overlapping date/time picker modal */}
            <div className="absolute -bottom-8 -left-8 w-[280px]">
              <Image
                src="/Date___Time_picker_1__1_.svg"
                alt="Schedule announcement"
                width={280}
                height={320}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[42px] font-bold text-gray-900 mb-5 leading-tight">
                Centralized institutional communication
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Eliminate missed emails and hallway notices. Broadcast official
                announcements or send targeted messages to specific departments
                and student groups directly within the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
