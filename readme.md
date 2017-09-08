# tachyons-generator [![Build Status](https://secure.travis-ci.org/tachyons-css/tachyons-generator.svg?branch=master)](https://travis-ci.org/tachyons-css/tachyons-generator) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This repo is currently under active development.
It isn't currently ready for production, but we hope to have a beta out soon.
Pull requests and issues welcome!
If you'd like to lend a hand but don't know where to start please ping @johnotander :heart:.

Generate a custom Tachyons build with a json configuration.
Inspiration from [this tachyons issue](https://github.com/tachyons-css/tachyons/issues/224).

## Installation

```bash
npm i -S tachyons-generator
```

## Usage

```javascript
const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const tachy = tachyonsGenerator(config)

const modules = await tachy.generate()
const css = await tachy.css()
```

#### Example config

```js
{
  "typeScale": [
    3, 2.25, 1.5, 1.25, 1, 0.875
  ],
  "spacing": {
    "root": 8,
    "ratio": 2,
    "steps": 6
  },
  "customMedia": [
    { "m": 48 },
    { "l": 64 },
    { "xl": 128 }
  ],
  "colors": [
    { "black": "#000" },
    { "near-black": "#111" },
    { "dark-gray": "#333" },
    { "mid-gray": "#555" },
    { "gray": "#777" },
    { "silver": "#999" },
    { "light-silver": "#aaa" },
    { "moon-gray": "#ccc" },
    { "light-gray": "#eee" },
    { "near-white": "#f4f4f4" },
    { "white": "#fff" },
    { "dark-red": "#f00008" },
    { "red": "#ff3223" },
    { "orange": "#f3a801" },
    { "gold": "#f2c800" },
    { "yellow": "#ffde37" },
    { "purple": "#7d5da9" },
    { "light-purple": "#8d4f92" },
    { "hot-pink": "#d62288" },
    { "dark-pink": "#c64774" },
    { "pink": "#f49cc8" },
    { "dark-green": "#006C71" },
    { "green": "#41D69F" },
    { "navy": "#001b44" },
    { "dark-blue": "#00449e" },
    { "blue": "#357edd" },
    { "light-blue": "#96ccff" },
    { "lightest-blue": "#cdecff" },
    { "washed-blue": "#f6fffe" },
    { "washed-green": "#e8fdf5" },
    { "washed-yellow": "#fff8d5" },
    { "light-pink": "#efa4b8" },
    { "light-yellow": "#f3dd70" },
    { "light-red": "#ffd3c0" }
  ]
}
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
