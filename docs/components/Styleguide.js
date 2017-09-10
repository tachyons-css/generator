const React = require('react')
const e = React.createElement

const TypeScale = require('./TypeScale')
const Measure = require('./Measure')

module.exports = (config, modules) =>
  e('div', null,
    TypeScale(config, modules.typeScale),
    Measure(modules.typography)
  )
