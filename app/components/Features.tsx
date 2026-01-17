export default function Features() {
  const features = [
    {
      emoji: "🖥️",
      title: "System Tray App",
      description: "Runs quietly in your system tray, always ready",
    },
    {
      emoji: "🚫",
      title: "No Coding Required",
      description: "Visual admin panel for creating endpoints",
    },
    {
      emoji: "📄",
      title: "JSON & File Responses",
      description: "Return JSON data or serve static files",
    },
    {
      emoji: "🗂️",
      title: "Multiple Projects",
      description: "Organize endpoints into separate projects",
    },
    {
      emoji: "🔧",
      title: "Local Development",
      description: "Runs on localhost:5000 by default",
    },
    {
      emoji: "⚡",
      title: "Instant Setup",
      description: "Download, install, and start mocking APIs in seconds",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A powerful yet simple tool for creating mock APIs without the complexity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              {/* Emoji Icon */}
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
