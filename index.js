'use strict'

const defaultConfig = require('./config.json')
const typeUtils = require('./lib/type-scale')
const spacingUtils = require('./lib/spacing')
const colorUtils = require('./lib/color')
const mqify = require('./lib/mqify')

module.exports = config => {
  const _config = Object.assign({}, defaultConfig, config || {})
  const colors = colorUtils(_config.colors)

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

  generator.generate = () => {
    return [
      { backgroundColor: colors.bg() },
      { backgroundSize: mqify(require('./partials/_background-size.css'), mediaQueries) },
      { backgroundPosition: mqify(require('./partials/_background-position.css'), mediaQueries) },
      { borders: mqify(require('./partials/_borders.css'), mediaQueries) },
      { borderColor: colors.border() },
      { borderRadius: mqify(require('./partials/_border-radius.css'), mediaQueries) },
      { borderStyle: mqify(require('./partials/_border-style.css'), mediaQueries) },
      { borderWidths: mqify(require('./partials/_border-widths.css'), mediaQueries) },
      { boxShadow: mqify(require('./partials/_box-shadow.css'), mediaQueries) },
      { boxSizing: require('./partials/_box-sizing.css') },
      { code: require('./partials/_code.css') },
      { color: colors.text() },
      { coordinates: mqify(require('./partials/_coordinates.css'), mediaQueries) },
      { clears: mqify(require('./partials/_clears.css'), mediaQueries) },
      { display: mqify(require('./partials/_display.css'), mediaQueries) },
      { flexbox: mqify(require('./partials/_flexbox.css'), mediaQueries) },
      { floats: mqify(require('./partials/_floats.css'), mediaQueries) },
      { fontFamily: require('./partials/_font-family.css') },
      { fontStyle: mqify(require('./partials/_font-style.css'), mediaQueries) },
      { fontWeight: mqify(require('./partials/_font-weight.css'), mediaQueries) },
      { forms: require('./partials/_forms.css') },
      { links: require('./partials/_links.css') },
      { lists: require('./partials/_lists.css') },
      { heights: mqify(require('./partials/_heights.css'), mediaQueries) },
      { hover: colors.hover() },
      { images: require('./partials/_images.css') },
      { letterSpacing: mqify(require('./partials/_letter-spacing.css'), mediaQueries) },
      { lineHeight: mqify(require('./partials/_line-height.css'), mediaQueries) },
      { maxWidths: mqify(require('./partials/_max-widths.css'), mediaQueries) },
      { normalize: require('./partials/_normalize.css') },
      { opacity: mqify(require('./partials/_opacity.css'), mediaQueries) },
      { outlines: mqify(require('./partials/_outlines.css'), mediaQueries) },
      { overflow: mqify(require('./partials/_overflow.css'), mediaQueries) },
      { position: mqify(require('./partials/_position.css'), mediaQueries) },
      { tables: require('./partials/_tables.css') },
      { textDecoration: mqify(require('./partials/_text-decoration.css'), mediaQueries) },
      { textAlign: mqify(require('./partials/_text-align.css'), mediaQueries) },
      { textTransform: mqify(require('./partials/_text-transform.css'), mediaQueries) },
      { verticalAlign: require('./partials/_vertical-align.css') },
      { typography: mqify(require('./partials/_typography.css'), mediaQueries) },
      { utilities: require('./partials/_utilities.css') },
      { visibility: mqify(require('./partials/_visibility.css'), mediaQueries) },
      { whiteSpace: mqify(require('./partials/_white-space.css'), mediaQueries) },
      { widths: mqify(require('./partials/_widths.css'), mediaQueries) }
    ]
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

  function generator () {}
  return generator
}
