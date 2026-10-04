// craco.js
module.exports = {
  jest: {
    configure: (jestConfig) => {
      // CRA's jest (jest 27) does not understand the "exports" map, so it
      // resolves react-router(-dom) v7 through their "main" fields, which
      // point at dist/main.js — a file that no longer ships with v7.
      // Map both packages straight to their CommonJS builds so tests run.
      jestConfig.moduleNameMapper = {
        ...jestConfig.moduleNameMapper,
        "^react-router-dom$": "react-router-dom/dist/index.js",
        "^react-router/dom$": "react-router/dist/development/dom-export.js",
      };
      return jestConfig;
    },
  },
  webpack: {
    configure: (cracoConfig) => {
      return cracoConfig;
    },
  },
};
