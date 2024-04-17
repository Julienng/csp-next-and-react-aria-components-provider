// next.config.js
const localesPlugin = require("@react-aria/optimize-locales-plugin");

module.exports = {
  // ...
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({ locales: [] }));
    }
    return config;
  },
};
