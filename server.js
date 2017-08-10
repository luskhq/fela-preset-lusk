// Using ES5 to avoid having to transpile

var namedMediaQuery = require("fela-plugin-named-media-query").default;
var pseudoClass = require("fela-plugin-friendly-pseudo-class").default;
var fallbackValue = require("fela-plugin-fallback-value").default;
var dynamicPrefixer = require("fela-plugin-dynamic-prefixer").default;

module.exports = function felaPresetLuskServer(opts) {
  var options = opts || {}
  var mediaQueries = options.mediaQueries || {}
  var prefixer = options.prefixer

  return [
    pseudoClass(),
    namedMediaQuery(mediaQueries),
    dynamicPrefixer(prefixer),
    fallbackValue(),
  ]
};
