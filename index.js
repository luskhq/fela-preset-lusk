const namedMediaQuery = require("fela-plugin-named-media-query");
const friendlyPseudoClass = require("fela-plugin-friendly-pseudo-class");
const fallbackValue = require("fela-plugin-fallback-value");
const prefixer = require("fela-plugin-prefixer");

module.exports = ({ mediaQueries }) => [
  friendlyPseudoClass(),
  namedMediaQuery(mediaQueries),
  prefixer(),
  fallbackValue(),
];
