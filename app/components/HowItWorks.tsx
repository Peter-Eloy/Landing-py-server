export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Download & Install",
      description: "Get the app for your platform and run the installer",
    },
    {
      number: "2",
      title: "Create Endpoints",
      description: "Use the admin panel to define your API routes and responses",
    },
    {
      number: "3",
      title: "Start Testing",
      description: "Your mock API server is live at localhost:5000",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-30 transform translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-3xl font-bold shadow-lg shadow-purple-500/50 transition-transform duration-300 hover:scale-110">
                  {step.number}
                </div>

                {/* Card Content */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 w-full transition-all duration-300 hover:bg-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for Mobile - Between Steps */}
                {index < steps.length - 1 && (
                  <div className="md:hidden my-4">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300">
            Ready to get started?{" "}
            <a
              href="#download"
              className="text-purple-400 hover:text-purple-300 font-semibold underline transition-colors"
            >
              Download now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
