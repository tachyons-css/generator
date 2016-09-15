'use strict'

const defaultConfig = require('./config.json')
const spacingUtils = require('./lib/spacing-utils')
const colorUtils = require('./lib/color-utils')

module.exports = function tachyonsGenerator (config) {
  const _config = Object.assign({}, config, defaultConfig)

  const mediaQueries = _config.customMedia.map((breakpoint, i) => {
    const nextBreakpoint = _config.customMedia[i+1]
    const key = Object.keys(breakpoint)[0]
    const val = breakpoint[key]

    if (nextBreakpoint) {
      const nbpVal = nextBreakpoint[Object.keys(nextBreakpoint)[0]]

      return [key, `screen and (min-width: ${val}) and (max-width: ${nbpVal})`]
    } else {
      return [key, `screen and (min-width: ${val})`]
    }
  })

  generator.spacing = () => {
    const _spacing = []

    for (let i = 0; i <= _config.spacingCount; i++) {
      _spacing.push(spacingUtils(i, _config.baseScale))

      mediaQueries.forEach(mq => {
        _spacing.push(`
          @media ${mq[1]} {
            ${spacingUtils(i, _config.baseScale, { postfix: '-' + mq[0] })}
          }
        `)
      })
    }

    return _spacing.join('\n')
  }

  generator.colors = () => {
    const _colors = []

    _colors.push(colorUtils(colors))

    mediaQueries.forEach(mq => {
      _colors.push(`
        @media ${mq[1]} {
          ${colorUtils(colors, { postfix: '-' + mq[0] })}
        }
      `)
    })

    return _colors.join('\n')
  }

  function generator () {}
  return generator
}
