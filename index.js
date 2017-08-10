// Using ES5 to avoid having to transpile

var namedMediaQuery = require("fela-plugin-named-media-query").default;
var pseudoClass = require("fela-plugin-friendly-pseudo-class").default;
var fallbackValue = require("fela-plugin-fallback-value").default;
var prefixer = require("fela-plugin-prefixer").default;

module.exports = function felaPresetLusk(opts) {
  var options = opts || {};
  var mediaQueries = options.mediaQueries || {};

  return [
    pseudoClass(),
    namedMediaQuery(mediaQueries),
    prefixer(),
    fallbackValue(),
  ];
};

