const palx = require('palx')

module.exports = colors => {
  if (typeof colors === 'string') {
    colors = palxToColors(colors)
  }

  colorGenerator.backgroundColors = () => bg(colors)
  colorGenerator.colors = () => text(colors)
  colorGenerator.skinsPseudos = () => hover(colors)
  colorGenerator.borderColors = () => border(colors)
  colorGenerator.variables = () => variables(colors)
  colorGenerator.skins = () => skins(colors)

  function colorGenerator () {}
  return colorGenerator
}

const skins = colors => `
  ${bg(colors)}
  ${text(colors)}
`

const bg = colors => {
  const _bg = []

  colors.forEach(color => {
    const key = keyVal(color)[0]

    _bg.push(`.bg-${key} { background-color: ${asVar(key)} }`)
  })

  return _bg.join('\n')
}

const text = colors => {
  const _text = []

  colors.forEach(color => {
    const key = keyVal(color)[0]

    _text.push(`.${key} { color: ${asVar(key)} }`)
  })

  return _text.join('\n')
}

const hover = colors => {
  const _hover = []

  colors.forEach(color => {
    const key = keyVal(color)[0]

    _hover.push(`.hover-${key}:focus, .hover-${key}:hover { color: ${asVar(key)} }`)
  })

  return _hover.join('\n')
}

const border = colors => {
  const _border = []

  colors.forEach(color => {
    const key = keyVal(color)[0]

    _border.push(`.b--${key} { border-color: ${asVar(key)} }`)
  })

  return _border.join('\n')
}

const variables = colors => {
  const _variables = []
  _variables.push(`:root {`)

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]

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

const keyVal = color => {
  const key = Object.keys(color)[0]
  const val = color[key]

  return [key, val]
}

const asVar = color => `var(--${color})`
