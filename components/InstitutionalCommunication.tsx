"use client";

import Image from "next/image";

export default function InstitutionalCommunication() {
  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6.00001C14.0414 6.07835 17.0139 5.08751 19.4 3.20001C19.703 2.97274 20.1084 2.93619 20.4472 3.10558C20.786 3.27497 21 3.62123 21 4.00001V16C21 16.3788 20.786 16.725 20.4472 16.8944C20.1084 17.0638 19.703 17.0273 19.4 16.8C17.0139 14.9125 14.0414 13.9217 11 14H5C3.89617 14 3 13.1038 3 12V8.00001C3 6.89618 3.89617 6.00001 5 6.00001H11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14C6 16.5964 6.84213 19.1228 8.4 21.2C9.0623 22.0831 10.3169 22.2623 11.2 21.6C12.0831 20.9377 12.2623 19.6831 11.6 18.8C10.5614 17.4152 10 15.731 10 14M8 6V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Broadcasts",
      description: "Campus-wide alerts for important updates.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 20.9999V18.9999C16 16.7923 14.2077 14.9999 12 14.9999H6C3.79234 14.9999 2 16.7923 2 18.9999V20.9999M16 3.12793C17.7642 3.58529 18.9962 5.1774 18.9962 6.99993C18.9962 8.82246 17.7642 10.4146 16 10.8719M22 20.9999V18.9999C21.9986 17.177 20.765 15.5856 19 15.1299"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7C5 8.42906 5.7624 9.74957 7 10.4641C8.2376 11.1786 9.7624 11.1786 11 10.4641C12.2376 9.74957 13 8.42906 13 7C13 4.79234 11.2077 3 9 3C6.79234 3 5 4.79234 5 7H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Targeted Groups",
      description: "Message specific batches or departments.",
    },
  ];

  return (
    <section className="relative bg-[radial-gradient(50%_50%_at_50%_50%,_#F7F8FA_0%,_#F7F8FA_100%)] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT — Dashboard SVGs */}
          <div className="relative order-2 lg:order-1">
            {/* Desktop view - with overlay */}
            <div className="hidden lg:block relative max-w-full">
              <div className="relative">
                <Image
                  src="/User_admin_screen_4__1_.svg"
                  alt="Admin dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>

              {/* Overlapping date/time picker modal - desktop only */}
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

            {/* Mobile/Tablet view - single image only */}
            <div className="lg:hidden relative max-w-[500px] mx-auto">
              <Image
                src="/User_admin_screen_4__1_.svg"
                alt="Admin dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
                Centralized institutional communication
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Eliminate missed emails and hallway notices. Broadcast official
                announcements or send targeted messages to specific departments
                and student groups directly within the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="space-y-3 rounded-lg p-5 sm:p-6"
                  style={{ background: "#F2F4F9" }}
                >
                  <div className="text-gray-900">{feature.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
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
