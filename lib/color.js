const palx = require('palx')

module.exports = colors => {
  if (typeof colors === 'string') {
    colors = listToMap(palxToColors(colors))
  }

  colorGenerator.backgroundColors = () => bg(colors)
  colorGenerator.colors = () => text(colors)
  colorGenerator.skinsPseudo = () => hover(colors)
  colorGenerator.borderColors = () => border(colors)
  colorGenerator.variables = () => variables(colors)
  colorGenerator.skins = () => skins(colors)

  colorGenerator.colors = colors

  function colorGenerator () {}
  return colorGenerator
}

const skins = colors => `
  ${bg(colors)}
  ${text(colors)}
`

const colorToCss = fn => obj => Object.keys(obj).map(key => fn(key, obj[key])).join('\n')

const bg = colorToCss(key => `.bg-${key} { background-color: ${asVar(key)} }`)

const text = colorToCss(key => `.${key} { color: ${asVar(key)} }`)

const hover = colorToCss(key => `.hover-${key}:focus, .hover-${key}:hover { color: ${asVar(key)} }`)

const border = colorToCss(key => `.b--${key} { border-color: ${asVar(key)} }`)

const variables = colors => {
  const _variables = []
  _variables.push(`:root {`)

  Object.keys(colors).forEach(key => {
    const val = colors[key]

    _variables.push(`  --${key}: ${val};`)
  })

  _variables.push(`}`)
  return _variables.join('\n')
}

const palxToColors = color => {
  const colorMap = palx(color)

  const black = colorMap.black

  delete colorMap.base
  delete colorMap.black

  const colors = [{ black: black }]

  Object.keys(colorMap).forEach(name => {
    for (let i = 0; i < colorMap[name].length; i++) {
      const obj = {}
      obj[`${name}-${i + 1}`] = asVar(colorMap[name][i])

      colors.push(obj)
    }
  })

  return colors
}

const asVar = color => `var(--${color})`

const listToMap = list => list.reduce((acc, obj) => Object.assign(acc, obj), {})
