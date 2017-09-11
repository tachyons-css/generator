const React = require('react')
const e = React.createElement

const Hero = require('./Hero')
const GettingStarted = require('./GettingStarted')
const TypeScale = require('./TypeScale')
const Measure = require('./Measure')
const Colors = require('./Colors')

const hashConfig = require('../../lib/hash-config')
const { version } = require('../../package')

module.exports = (config, modules) => {
  const hash = hashConfig(config)

  return e('div', null,
    Hero(),
    GettingStarted(hash, version),
    TypeScale(config, modules.typeScale),
    Measure(modules.typography),
    Colors(config, [
      modules.colors,
      modules.backgroundColors
    ].join('\n'))
  )
}
