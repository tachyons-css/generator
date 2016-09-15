module.exports = colors => {
  const cx = []
  cx.push(bg(colors))

  return cx.join('\n')
}

const bg = colors => {
  const _bg = []
  console.log(colors)

  colors.forEach(color => {
    const key = keyVal(color)[0]
    const val = keyVal(color)[1]
    console.log(color, key, val)

    _bg.push(`.bg-${key} { background-color: ${val} }`)
  })

  return _bg.join('\n')
}

const keyVal = color => {
  const key = Object.keys(color)[0]
  const val = color[key]

  return [key, val]
}
