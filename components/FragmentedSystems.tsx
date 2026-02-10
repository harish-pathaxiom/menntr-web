const items = [
  {
    title: "Disconnected Tools",
    description:
      "Admin, faculty, and student portals operate in isolation, leading to data redundancy and manual sync errors.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#E2E8F0" />
        <path
          d="M27.3909 16.3901C27.6469 16.6463 28.0214 16.7441 28.3699 16.6458C28.7185 16.5474 28.9866 16.2683 29.0709 15.9161C29.3582 14.7204 30.4724 13.9111 31.6983 14.0078C32.9242 14.1045 33.8978 15.0784 33.9941 16.3044C34.0904 17.5303 33.2807 18.6443 32.0849 18.9311C31.7327 19.0154 31.4536 19.2836 31.3552 19.6321C31.2569 19.9807 31.3547 20.3552 31.6109 20.6111L33.2939 22.2931C33.7467 22.7458 34.001 23.3599 34.001 24.0001C34.001 24.6404 33.7467 25.2544 33.2939 25.7071L31.6109 27.3901C31.355 27.6463 30.9805 27.7441 30.6319 27.6458C30.2834 27.5474 30.0152 27.2683 29.9309 26.9161C29.6437 25.7204 28.5295 24.9111 27.3035 25.0078C26.0776 25.1045 25.104 26.0784 25.0078 27.3044C24.9115 28.5303 25.7211 29.6443 26.9169 29.9311C27.2691 30.0154 27.5483 30.2836 27.6466 30.6321C27.7449 30.9807 27.6471 31.3552 27.3909 31.6111L25.7079 33.2931C25.2552 33.7459 24.6412 34.0002 24.0009 34.0002C23.3607 34.0002 22.7466 33.7459 22.2939 33.2931L20.6109 31.6101C20.355 31.3539 19.9805 31.2561 19.6319 31.3544C19.2834 31.4528 19.0152 31.7319 18.9309 32.0841C18.6437 33.2798 17.5295 34.0891 16.3035 33.9924C15.0776 33.8957 14.104 32.9218 14.0078 31.6959C13.9115 30.4699 14.7211 29.356 15.9169 29.0691C16.2691 28.9848 16.5483 28.7167 16.6466 28.3681C16.7449 28.0196 16.6471 27.6451 16.3909 27.3891L14.7079 25.7071C14.2552 25.2544 14.0008 24.6404 14.0008 24.0001C14.0008 23.3599 14.2552 22.7458 14.7079 22.2931L16.3909 20.6101C16.6469 20.3539 17.0214 20.2561 17.3699 20.3544C17.7185 20.4528 17.9866 20.7319 18.0709 21.0841C18.3582 22.2798 19.4724 23.0891 20.6983 22.9924C21.9242 22.8957 22.8978 21.9218 22.9941 20.6959C23.0904 19.4699 22.2807 18.356 21.0849 18.0691C20.7327 17.9848 20.4536 17.7167 20.3552 17.3681C20.2569 17.0196 20.3547 16.6451 20.6109 16.3891L22.2939 14.7071C22.7466 14.2544 23.3607 14 24.0009 14C24.6412 14 25.2552 14.2544 25.7079 14.7071L27.3909 16.3901"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Manual Evaluations",
    description:
      "Faculty spend countless hours grading assessments manually, slowing down feedback loops for students.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#E2E8F0" />
        <path
          d="M21 14H27C27.5523 14 28 14.4477 28 15V17C28 17.5519 27.5519 18 27 18H21C20.4481 18 20 17.5519 20 17V15C20 14.4481 20.4481 14 21 14V14"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 16H30C31.1038 16 32 16.8962 32 18V32C32 33.1038 31.1038 34 30 34H18C16.8962 34 16 33.1038 16 32V18C16 16.8962 16.8962 16 18 16H20M27 23L21 29M21 23L27 29"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Zero Visibility",
    description:
      "Principals and HODs lack real-time dashboards to track student performance and attendance at a glance.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#E2E8F0" />
        <path
          d="M22.7331 17.0759C27.5203 16.5054 32.1013 19.1936 33.9381 23.6509C34.0215 23.8755 34.0215 24.1224 33.9381 24.3469C33.5701 25.2376 33.0844 26.0751 32.4941 26.8369M26.0841 26.1579C24.907 27.2949 23.0359 27.2786 21.8787 26.1214C20.7215 24.9642 20.7052 23.0931 21.8421 21.9159"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.4795 29.499C26.7954 31.0889 23.553 31.4345 20.5941 30.4459C17.6353 29.4573 15.2518 27.2321 14.0625 24.348C13.9792 24.1235 13.9792 23.8765 14.0625 23.652C14.9491 21.5019 16.5092 19.6972 18.5085 18.509M14.0005 14L34.0005 34"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Weak Placement Link",
    description:
      "Academic scores aren't automatically translated into placement readiness, leaving placement cells guessing.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#E2E8F0" />
        <path
          d="M30.84 24.25L32.56 22.54H32.54C34.4569 20.5537 34.4033 17.3901 32.42 15.47C30.4808 13.5999 27.4092 13.5999 25.47 15.47L23.75 17.18M17.17 23.75L15.46 25.46C13.5431 27.4463 13.5967 30.6099 15.58 32.53C17.5192 34.4001 20.5908 34.4001 22.53 32.53L24.24 30.82M20 14V17M14 20H17M28 31V34M31 28H34"
          stroke="#0F1724"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function FragmentedSystems() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24"
      style={{ background: "linear-gradient(90deg, #F2F4F9 0%, #E8EEFF 100%)" }}
    >
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
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-3 sm:mb-4">{item.icon}</div>

              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
