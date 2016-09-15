module.exports = (colors, opts) => {
  const cx = []
  cx.push(bg(colors, opts))
}

const bg = (colors, opts) => {
  for (let color in colors) {
    const key = Object.keys(color)[0]
    const val = color[key]
  }
}

const keyVal = color => {
  const key = Object.keys(color)[0]
  const val = color[key]

  return [key, val]
}
