import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mock API Server - Build and Test APIs Without Backend Code",
  description:
    "Free desktop app for creating mock REST APIs. No coding required. Perfect for frontend developers, QA testers, and API prototyping.",
  keywords: [
    "mock API server",
    "API testing tool",
    "local API simulator",
    "REST API mock",
    "API development",
    "mock server",
    "API prototyping",
    "frontend development",
    "QA testing",
  ],
  authors: [{ name: "Mock API Server" }],
  creator: "Mock API Server",
  publisher: "Mock API Server",
  metadataBase: new URL("https://peter-eloy.github.io/Landing-py-server"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peter-eloy.github.io/Landing-py-server",
    title: "Mock API Server - Build and Test APIs Without Backend Code",
    description:
      "Free desktop app for creating mock REST APIs. No coding required. Perfect for frontend developers, QA testers, and API prototyping.",
    siteName: "Mock API Server",
    images: [
      {
        url: "/Landing-py-server/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mock API Server - Build and Test APIs Without Backend Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mock API Server - Build and Test APIs Without Backend Code",
    description:
      "Free desktop app for creating mock REST APIs. No coding required. Perfect for frontend developers, QA testers, and API prototyping.",
    images: ["/Landing-py-server/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Landing-py-server/favicon.ico",
    apple: "/Landing-py-server/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mock API Server",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Windows, macOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free desktop app for creating mock REST APIs. No coding required. Perfect for frontend developers, QA testers, and API prototyping.",
    "downloadUrl": "https://github.com/Peter-Eloy/py-server/releases",
    "softwareVersion": "1.0.0",
    "author": {
      "@type": "Person",
      "name": "Peter Eloy",
      "url": "https://petereloy.dev"
    },
    "sameAs": [
      "https://github.com/Peter-Eloy/py-server",
      "https://x.com/petereloy",
      "https://www.instagram.com/peter.eloy/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
