const React = require('react')
const e = React.createElement

const Typography = require('./Typography')
const Measure = require('./Measure')

module.exports = (config, modules) =>
  e('div', null,
    Typography(config, modules.typeScale),
    Measure(modules.typography)
  )
