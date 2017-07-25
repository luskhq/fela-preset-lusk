const namedMediaQuery = require("fela-plugin-named-media-query").default;
const pseudoClass = require("fela-plugin-friendly-pseudo-class").default;
const fallbackValue = require("fela-plugin-fallback-value").default;
const prefixer = require("fela-plugin-prefixer").default;

module.exports = ({ mediaQueries = {} }) => [
  pseudoClass(),
  namedMediaQuery(mediaQueries),
  prefixer(),
  fallbackValue(),
];
