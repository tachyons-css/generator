# tachyons-generator [![Build Status](https://secure.travis-ci.org/johnotander/tachyons-generator.svg?branch=master)](https://travis-ci.org/johnotander/tachyons-generator) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Generate a custom Tachyons build with a json configuration.
Inspiration from [this tachyons issue](https://github.com/tachyons-css/tachyons/issues/224).

## Installation

```bash
npm install --save tachyons-generator
```

## Usage

```javascript
const tachyonsGenerator = require('tachyons-generator')
const config = require('config.json')

console.log(tachyonsGenerator(config))
```

#### Example config

```json
{
  "font-family": "sans-serif",
  "sans-font-family": "sans-serif",
  "serif-font-family": "serif",
  "monospace-font-family": "monospace",
  "base-scale": 16,
  "ratio": 1.5,
  "custom-media": {
    "medium": 48,
    "large": 64
  },
  "colors": {
    "black": "#000",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    "gray": "#777",
    "silver": "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    "white": "#fff",
    "dark-red": "#f00008",
    "red": "#ff3223",
    "orange": "#f3a801",
    "gold": "#f2c800",
    "yellow": "#ffde37",
    "purple": "#7d5da9",
    "light-purple": "#8d4f92",
    "hot-pink: #d62288",
    "dark-pink": "#c64774",
    "pink": "#f49cc8",
    "dark-green": "#006C71",
    "green": "#41D69F",
    "navy": "#001b44",
    "dark-blue": "#00449e",
    "blue": "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    "washed-green": "#e8fdf5",
    "washed-yellow": "#fff8d5",
    "light-pink": "#efa4b8",
    "light-yellow": "#f3dd70",
    "light-red": "#ffd3c0"
  }
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
