# Fela Preset Lusk

[![npm](https://img.shields.io/npm/v/fela-preset-lusk.svg)](https://www.npmjs.com/package/fela-preset-lusk)

[Fela](http://fela.js.org/) plugin presets used at [Lusk](https://lusk.io).

## Installation

```sh
npm install --save fela-preset-lusk
```

## Features

`fela-preset-lusk` enhances the default Fela behaviour to allow you to write style objects that looks like this:

```js
{
  color: "red",
  onHover: {
    color: "blue",
  },
  atWide: {
    color: "orange",
  }
}
```

Instead of:

```js
{
  color: "red",
  ":hover": {
    color: "blue",
  },
  "@media (min-width: 40em)": {
    color: "orange",
  }
}
```

...much more JavaScripty. Note that media query names have to be configured on app-by-app basis. See usage below.

Additionally, all styles are automatically prefixed for optimal cross-browser compatibility. :clap:

## Usage

### Client-side

```js
import { createRenderer } from "fela";
import luskPreset from "fela-preset-lusk";

const renderer = createRenderer({
  plugins: luskPreset({
    mediaQueries: {
      // Use whatever is appropriate for your app. Query names can be anything,
      // but try to stick to the `atSize` pattern.
      atNarrow: "@media (min-width: 25em)",
      atWide: "@media (min-width: 40em)",
      atVeryWide: "@media (min-width: 78em)",
    },
  }),
});
```


### Server-side

Server side preset differs from the client-side one by using dynamic style prefixer. When supplied userAgent string, (usually from `this.headers["user-agent"]` when using Koa) it will only prefix declarations that are not supported by the requesting browser. For modern browsers this makes the response extremely lean. :sparkles:

```js
import { createRenderer } from "fela";
import luskPresetServer from "fela-preset-lusk/server";

const renderer = createRenderer({
  plugins: luskPresetServer({
    mediaQueries: {
      // Same as client-side...
      atNarrow: "@media (min-width: 25em)",
      atWide: "@media (min-width: 40em)",
      atVeryWide: "@media (min-width: 78em)",
    },
    prefixer: {
      // Use the user-agent information from the incoming request
      userAgent: "User Agent String"
    },
  }),
});
```

### Combining with other plugins

If you want to add more plugins before or after the preset, spread the array returned from the preset function into another array.

```js
const renderer = createRenderer({
  plugins: [
    pluginBefore(),
    ...luskPreset(),
    pluginAfter(),
  ],
});

```

---

If you're interested in more info about Fela plugins, see [the official documentation](fela.js.org/docs/advanced/Plugins.html).
