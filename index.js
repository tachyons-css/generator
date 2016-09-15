'use strict'

const defaultConfig = require('./config.json')
const typeUtils = require('./lib/type-scale')
const spacingUtils = require('./lib/spacing')
const colorUtils = require('./lib/color')

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

  generator.typeScale = () => {
    const _typeScale = []

    for (let i = 0; i < _config.typeScale.length; i++) {
      _typeScale.push(typeUtils(i + 1, _config.typeScale[i]))
    }

    mediaQueries.forEach(mq => {
      _typeScale.push(`@media ${mq[1]} {`)

      for (let i = 0; i < _config.typeScale.length; i++) {
        _typeScale.push(typeUtils(i + 1, _config.typeScale[i], { postfix: '-' + mq[0] }))
      }

      _typeScale.push('}')
    })

    return _typeScale.join('\n')
  }

  generator.spacing = () => {
    const _spacing = []

    for (let i = 0; i <= _config.spacing.steps; i++) {
      _spacing.push(spacingUtils(i, _config.spacing.ratio))

      mediaQueries.forEach(mq => {
        _spacing.push(`
          @media ${mq[1]} {
            ${spacingUtils(i, _config.spacing.ratio, { postfix: '-' + mq[0] })}
          }
        `)
      })
    }

    return _spacing.join('\n')
  }

  generator.colors = () => {
    const _colors = []

    _colors.push(colorUtils(_config.colors))

    return _colors.join('\n')
  }

  function generator () {}
  return generator
}
