export default function Hero() {
  const GITHUB_USERNAME = "Peter-Eloy";
  const REPO_NAME = "py-server";

  const downloadUrls = {
    windows: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases/latest/download/MockAPIServer.exe`,
    macos: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases/latest/download/MockAPIServer.dmg`,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* GitHub Stars Badge */}
        <div className="flex justify-center mb-6">
          <a
            href={`https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img
              src={`https://img.shields.io/github/stars/${GITHUB_USERNAME}/${REPO_NAME}?style=social`}
              alt="GitHub stars"
              className="h-6"
            />
          </a>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Mock API Server
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Build and test APIs without backend code
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Windows Download - Primary */}
          <a
            href={downloadUrls.windows}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 w-full sm:w-auto"
            aria-label="Download for Windows"
          >
            <span className="relative flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Download for Windows
            </span>
          </a>

          {/* macOS Download - Secondary */}
          <a
            href={downloadUrls.macos}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700 hover:border-gray-600 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            aria-label="Download for macOS"
          >
            <span className="relative flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for macOS
            </span>
          </a>
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-gray-400">
          Free • Open Source • No Sign-up Required
        </p>
      </div>
    </section>
  );
}
