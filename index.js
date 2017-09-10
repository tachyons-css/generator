'use strict'

const camelcase = require('camelcase')
const buildCss = require('tachyons-build-css')

const DEFAULT_CONFIG = require('./config')

const generate = require('./lib/generate')
const assembleCss = require('./lib/assemble-css')
const extractMediaQueries = require('./lib/media-queries')

module.exports = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config)
  const mediaQueries = extractMediaQueries(_config)

  generator.generate = () => generate(_config, mediaQueries)
  generator.css = async () => {
    const modules = await generator.generate()
    const post = await assembleCss(modules, _config)

    const min = await buildCss(post, { minified: true })
    const css = await buildCss(post)

    return {
      post,
      modules,
      css: css.css,
      min: min.css
    }
  }

  function generator () {}
  return generator
}
