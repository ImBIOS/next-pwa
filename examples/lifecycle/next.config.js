const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  register: false,
  skipWaiting: false,
});

module.exports = withPWA();
