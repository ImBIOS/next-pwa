module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
