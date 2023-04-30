const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  swSrc: "service-worker.js",
});

module.exports = withPWA({
  images: {
    domains: ["source.unsplash.com"],
  },
});
