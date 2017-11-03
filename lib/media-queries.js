const isObject = require('isobject')

const { withUnits } = require('./units')

const format = customMedia => customMedia.map(breakpoint => {
  const key = Object.keys(breakpoint)[0]
  const value = breakpoint[key]

  if (isObject(value)) {
    return Object.assign({}, breakpoint[key], {
      key,
      value: value.value
    })
  } else {
    return { key, value }
  }
})

module.exports = config => {
  const formatted = format(config.customMedia)

  const minMaxMedia = formatted.filter(s => !isMinWidthQuery(s))
  const minMaxQueries = minMaxMedia.map((breakpoint, i) => {
      const nextBreakpoint = minMaxMedia[i+1]

      const mq = [
        'screen',
        `(min-width: ${withUnits(breakpoint.value)})`
      ]

      if (nextBreakpoint) {
        mq.push(`(max-width: ${withUnits(nextBreakpoint.value)})`)
      }

      return Object.assign({}, breakpoint, { mq: mq.join(' and ') })
    })

  const minQueries = formatted
    .filter(isMinWidthQuery)
    .map(breakpoint => {
      const mq = `screen and (min-width: ${withUnits(breakpoint.value)})`

      return Object.assign({}, breakpoint, { mq })
    })

  return minMaxQueries.concat(minQueries)
}

const isMinWidthQuery = breakpoint => breakpoint.minWidth

module.exports.format = format
