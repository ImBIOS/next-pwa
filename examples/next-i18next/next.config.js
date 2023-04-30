// @ts-check
const { i18n } = require("./next-i18next.config.js");

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require("./next-utils.config");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

// TODO: Work on the Typescript support
// @ts-expect-error
const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
});

module.exports = nextConfig;
