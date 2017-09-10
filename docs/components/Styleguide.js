const React = require('react')
const e = React.createElement

const Typography = require('./Typography')

module.exports = (config, modules) =>
  e('div', null,
    Typography(config, modules.typeScale)
  )
