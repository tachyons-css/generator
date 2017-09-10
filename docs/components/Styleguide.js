const React = require('react')
const e = React.createElement

const TypeScale = require('./TypeScale')
const Measure = require('./Measure')
const Colors = require('./Colors')

module.exports = (config, modules) =>
  e('div', null,
    TypeScale(config, modules.typeScale),
    Measure(modules.typography),
    Colors(config, [
      modules.colors,
      modules.backgroundColors
    ].join('\n'))
  )
