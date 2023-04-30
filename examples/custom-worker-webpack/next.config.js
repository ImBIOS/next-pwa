const path = require("path");

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  customWorkerWebpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@util": path.resolve(__dirname, "./util"),
        },
      },
    };
  },
});

module.exports = withPWA();
