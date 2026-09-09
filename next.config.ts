import type { NextConfig } from "next";

const APP_STORE_URL = "https://apps.apple.com/us/app/gomesh/id6795811158";

const nextConfig: NextConfig = {
  // Temporary: send visitors landing on gomesh.app straight to the App Store
  // listing so tapping the domain (link previews, socials, cards) triggers
  // the download flow. Only "/" is matched — /privacy, /terms, /sitemap.xml,
  // /icon, /opengraph-image, and the favicon routes all continue to serve
  // normally, which keeps App Store review + shared legal links working.
  // Remove this redirects() block to restore the landing page.
  async redirects() {
    return [
      {
        source: "/",
        destination: APP_STORE_URL,
        permanent: false, // 307 — reversible, no long-term browser caching
      },
    ];
  },
};

export default nextConfig;
