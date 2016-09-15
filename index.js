'use strict'

const defaultConfig = require('./config.json')
const typeUtils = require('./lib/type-scale')
const spacingUtils = require('./lib/spacing')
const colorUtils = require('./lib/color')
const mqify = require('./lib/mqify')

module.exports = config => {
  const _config = Object.assign({}, config || {}, defaultConfig)

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

  generator.other = () => {
    return [
      mqify(require('./partials/_background-size.css'), mediaQueries),
      mqify(require('./partials/_background-position.css'), mediaQueries),
      mqify(require('./partials/_outlines.css'), mediaQueries),
      mqify(require('./partials/_borders.css'), mediaQueries),
      mqify(require('./partials/_border-radius.css'), mediaQueries),
      mqify(require('./partials/_border-style.css'), mediaQueries),
      mqify(require('./partials/_border-widths.css'), mediaQueries),
      mqify(require('./partials/_box-shadow.css'), mediaQueries),
      mqify(require('./partials/_coordinates.css'), mediaQueries),
      mqify(require('./partials/_clears.css'), mediaQueries),
      mqify(require('./partials/_display.css'), mediaQueries),
      mqify(require('./partials/_flexbox.css'), mediaQueries),
      mqify(require('./partials/_floats.css'), mediaQueries),
      mqify(require('./partials/_font-style.css'), mediaQueries),
      mqify(require('./partials/_font-weight.css'), mediaQueries),
      mqify(require('./partials/_heights.css'), mediaQueries),
      mqify(require('./partials/_letter-spacing.css'), mediaQueries),
      mqify(require('./partials/_line-height.css'), mediaQueries),
      mqify(require('./partials/_max-widths.css'), mediaQueries),
      mqify(require('./partials/_widths.css'), mediaQueries),
      mqify(require('./partials/_overflow.css'), mediaQueries),
      mqify(require('./partials/_position.css'), mediaQueries),
      mqify(require('./partials/_opacity.css'), mediaQueries),
      mqify(require('./partials/_text-decoration.css'), mediaQueries),
      mqify(require('./partials/_text-align.css'), mediaQueries),
      mqify(require('./partials/_text-transform.css'), mediaQueries),
      mqify(require('./partials/_typography.css'), mediaQueries),
      mqify(require('./partials/_visibility.css'), mediaQueries),
      mqify(require('./partials/_white-space.css'), mediaQueries),
    ].join('\n')
  }

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

  generator.colors = () => colorUtils(_config.colors)

  function generator () {}
  return generator
}
