const namedMediaQuery = require("fela-plugin-named-media-query").default;
const pseudoClass = require("fela-plugin-friendly-pseudo-class").default;
const fallbackValue = require("fela-plugin-fallback-value").default;
const dynamicPrefixer = require("fela-plugin-dynamic-prefixer").default;

module.exports = ({ mediaQueries = {}, prefixer }) => [
  pseudoClass(),
  namedMediaQuery(mediaQueries),
  dynamicPrefixer(prefixer),
  fallbackValue(),
];
