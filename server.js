const namedMediaQuery = require("fela-plugin-named-media-query");
const friendlyPseudoClass = require("fela-plugin-friendly-pseudo-class");
const fallbackValue = require("fela-plugin-fallback-value");
const dynamicPrefixer = require("fela-plugin-dynamic-prefixer");

module.exports = ({ mediaQueries, prefixer }) => [
  friendlyPseudoClass(),
  namedMediaQuery(mediaQueries),
  dynamicPrefixer(prefixer),
  fallbackValue(),
];
