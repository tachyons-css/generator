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

This package includes a module you can use programmatically to generate a `.css` file, a minimized version of the same, and an `.html` that demonstrates the classes in the `.css` file.

First, a file named `index.js` with the following contents:

```javascript
const fs = require('fs')

const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  const out = await tachy.generate()

  fs.writeFileSync('index.html', out.docs)
  fs.writeFileSync('tachyons.css', out.css)
  fs.writeFileSync('tachyons.min.css', out.min)
}

generate()
```

Next, create `config.json` which will control the specifics of the classes in the `.css` file.  Here is an example to start from:

```json
{
  "typeScale": [
    3, 2.25, 1.5, 1.25, 1, 0.875
  ],
  "spacing": [0.25, 0.5, 1, 2, 4, 8, 16],
  "lineHeight": [1, 1.25, 1.5],
  "customMedia": [
    { "m": 48 },
    { "l": 64 },
    { "xl": 128 }
  ],
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
    "hot-pink": "#d62288",
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
  },
  "nested": {
    "links": ["blue", "light-blue"]
  },
  "borderWidths": [0, 0.125, 0.25, 0.5, 1, 2],
  "borderRadius": [0, 0.125, 0.25, 0.5, 1],
  "widths": [1, 2, 4, 8, 16],
  "maxWidths": [1, 2, 4, 8, 16, 32, 48, 64, 96],
  "heights": [1, 2, 4, 8, 16],
  "tables": {
    "striped": ["light-silver", "moon-gray", "light-gray", "near-white"],
    "stripe": ["light", "dark"]
  },
  "typography":{
    "measure": [30, 34, 20]
  },
  "opacity": [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0]
}
```

Now, generate everything like so:

```
> node index.js
```

This will create `tachyons.css`, `tachyons.min.css`, and `index.html`.  If you open `index.html` in your browser, you should see a style guide and some documentation.

### Advanced Usage

You can also omit the partials you don't need with the key `skipModules`, for example if you don't want normalize.css in the bundle you can do:

```js
{
  "skipModules": ["normalize"]
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

---

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).
