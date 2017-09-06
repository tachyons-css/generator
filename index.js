'use strict'

const DEFAULT_CONFIG = require('./config')

const assembleCss = require('./lib/assemble-css')
const typeUtils = require('./lib/type-scale')
const spacingUtils = require('./lib/spacing')
const colorUtils = require('./lib/color')
const extractMediaQueries = require('./lib/media-queries')
const mqify = require('./lib/mqify')

module.exports = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config)

  const colors = colorUtils(_config.colors)
  const mediaQueries = extractMediaQueries(_config)

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

  generator.generate = async () => ({
    aspectRatios: await mqify(require('./partials/_aspect-ratios.css'), mediaQueries),
    backgroundColors: colors.bg(),
    backgroundSize: await mqify(require('./partials/_background-size.css'), mediaQueries),
    backgroundPosition: await mqify(require('./partials/_background-position.css'), mediaQueries),
    borders: await mqify(require('./partials/_borders.css'), mediaQueries),
    borderColor: colors.border(),
    borderRadius: await mqify(require('./partials/_border-radius.css'), mediaQueries),
    borderStyle: await mqify(require('./partials/_border-style.css'), mediaQueries),
    borderWidths: await mqify(require('./partials/_border-widths.css'), mediaQueries),
    boxShadow: await mqify(require('./partials/_box-shadow.css'), mediaQueries),
    boxSizing: require('./partials/_box-sizing.css'),
    code: require('./partials/_code.css'),
    colors: colors.variables(),
    spacing: generator.spacing(),
    coordinates: await mqify(require('./partials/_coordinates.css'), mediaQueries),
    clears: await mqify(require('./partials/_clears.css'), mediaQueries),
    display: await mqify(require('./partials/_display.css'), mediaQueries),
    flexbox: await mqify(require('./partials/_flexbox.css'), mediaQueries),
    floats: await mqify(require('./partials/_floats.css'), mediaQueries),
    fontFamily: require('./partials/_font-family.css'),
    fontStyle: await mqify(require('./partials/_font-style.css'), mediaQueries),
    fontWeight: await mqify(require('./partials/_font-weight.css'), mediaQueries),
    forms: require('./partials/_forms.css'),
    links: require('./partials/_links.css'),
    lists: require('./partials/_lists.css'),
    heights: await mqify(require('./partials/_heights.css'), mediaQueries),
    skins: colors.skins(),
    skinsPseudos: colors.hover(),
    images: require('./partials/_images.css'),
    letterSpacing: await mqify(require('./partials/_letter-spacing.css'), mediaQueries),
    lineHeight: await mqify(require('./partials/_line-height.css'), mediaQueries),
    maxWidths: await mqify(require('./partials/_max-widths.css'), mediaQueries),
    normalize: require('./partials/_normalize.css'),
    opacity: await mqify(require('./partials/_opacity.css'), mediaQueries),
    rotations: await mqify(require('./partials/_rotations.css'), mediaQueries),
    outlines: await mqify(require('./partials/_outlines.css'), mediaQueries),
    overflow: await mqify(require('./partials/_overflow.css'), mediaQueries),
    position: await mqify(require('./partials/_position.css'), mediaQueries),
    tables: require('./partials/_tables.css'),
    textDecoration: await mqify(require('./partials/_text-decoration.css'), mediaQueries),
    textAlign: await mqify(require('./partials/_text-align.css'), mediaQueries),
    textTransform: await mqify(require('./partials/_text-transform.css'), mediaQueries),
    verticalAlign: require('./partials/_vertical-align.css'),
    typeScale: generator.typeScale(),
    typography: await mqify(require('./partials/_typography.css'), mediaQueries),
    utilities: require('./partials/_utilities.css'),
    visibility: await mqify(require('./partials/_visibility.css'), mediaQueries),
    whiteSpace: await mqify(require('./partials/_white-space.css'), mediaQueries),
    widths: await mqify(require('./partials/_widths.css'), mediaQueries)
  })

  generator.assembleCss = assembleCss

  function generator () {}
  return generator
}
