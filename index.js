'use strict'

const camelcase = require('camelcase')

const DEFAULT_CONFIG = require('./config')

const generate = require('./lib/generate')
const assembleCss = require('./lib/assemble-css')
const extractMediaQueries = require('./lib/media-queries')

module.exports = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config)
  const mediaQueries = extractMediaQueries(_config)

  generator.generate = () => generate(_config, mediaQueries)
  generator.css = () => assembleCss(generator.generate(), _config)

  function generator () {}
  return generator
}
