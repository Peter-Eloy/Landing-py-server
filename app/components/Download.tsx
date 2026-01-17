"use client";

import { useEffect, useState } from "react";

type OS = "Windows" | "macOS" | "Linux" | "Unknown";

export default function Download() {
  const [detectedOS, setDetectedOS] = useState<OS>("Unknown");
  const GITHUB_USERNAME = "Peter-Eloy";
  const REPO_NAME = "py-server";

  const downloadUrls = {
    windows: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases/latest/download/MockAPIServer.exe`,
    macos: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases/latest/download/MockAPIServer.dmg`,
  };

  const releasesUrl = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases`;

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("win")) {
      setDetectedOS("Windows");
    } else if (userAgent.includes("mac")) {
      setDetectedOS("macOS");
    } else if (userAgent.includes("linux")) {
      setDetectedOS("Linux");
    } else {
      setDetectedOS("Unknown");
    }
  }, []);

  const downloads = [
    {
      os: "Windows" as OS,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      url: downloadUrls.windows,
      fileType: ".exe",
    },
    {
      os: "macOS" as OS,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      url: downloadUrls.macos,
      fileType: ".dmg",
    },
  ];

  return (
    <section id="download" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download Mock API Server
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            {detectedOS !== "Unknown" && detectedOS !== "Linux"
              ? `Detected: ${detectedOS}`
              : "Choose your platform"}
          </p>

          {/* Version Badge */}
          <a
            href={releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:border-purple-500/50 transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Latest Release
          </a>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {downloads.map((download) => {
            const isDetected = detectedOS === download.os;
            return (
              <a
                key={download.os}
                href={download.url}
                className={`group relative flex flex-col items-center p-8 rounded-xl border-2 transition-all duration-300 ${
                  isDetected
                    ? "bg-gradient-to-br from-purple-600 to-blue-600 border-purple-500 shadow-xl shadow-purple-500/50"
                    : "bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
                }`}
                aria-label={`Download for ${download.os}`}
              >
                {isDetected && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                    Recommended
                  </span>
                )}

                <div className="mb-4 text-white">{download.icon}</div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {download.os}
                </h3>

                <p className="text-sm text-gray-300 mb-4">{download.fileType}</p>

                <div
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    isDetected
                      ? "bg-white/20 text-white"
                      : "bg-purple-600 text-white group-hover:bg-purple-500"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </div>
              </a>
            );
          })}
        </div>

        {/* Linux Notice */}
        {detectedOS === "Linux" && (
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8">
            <p className="text-yellow-300 text-center">
              Linux builds are not currently available. Please check the{" "}
              <a
                href={releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-200"
              >
                releases page
              </a>{" "}
              for updates.
            </p>
          </div>
        )}

        {/* Additional Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-3">
            Need help or want to contribute?
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
