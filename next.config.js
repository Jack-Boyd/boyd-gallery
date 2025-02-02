import "./src/env.js";

/** @type {import("next").NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(coreConfig, {
  org: "confido",
  project: "boyd-gallery",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

export default config;