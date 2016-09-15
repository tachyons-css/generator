module.exports = colors => {
  const cx = []
  cx.push(bg(colors))
  cx.push(text(colors))
  cx.push(hover(colors))
  cx.push(border(colors))

  return cx.join('\n')
}

const bg = colors => {
  const _bg = []

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]

    _bg.push(`.bg-${key} { background-color: ${val} }`)
  })

  return _bg.join('\n')
}

const text = colors => {
  const _text = []

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]

    _text.push(`.${key} { color: ${val} }`)
  })

  return _text.join('\n')
}

const hover = colors => {
  const _hover = []

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]

    _hover.push(`.hover-${key}:focus, .hover-${key}:hover { color: ${val} }`)
  })

  return _hover.join('\n')
}

const border = colors => {
  const _border = []

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]

    _border.push(`.b--${key} { border-color: ${val} }`)
  })

  return _border.join('\n')
}

const keyVal = color => {
  const key = Object.keys(color)[0]
  const val = color[key]

  return [key, val]
}
