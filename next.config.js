const withOptimizedImages = require("next-optimized-images");
const withProgressBar = require("next-progressbar");
const path = require("path");
const withTM = require("next-transpile-modules")(["react-spring"]);

module.exports = withTM(
  withProgressBar(
    withOptimizedImages({
      webpack(config) {
        config.resolve.alias.images = path.join(__dirname, "images");
        return config;
      },
    })
  )
);
