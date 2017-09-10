const React = require('react')
const e = React.createElement

// Need to use this for palx handling
const color = require('../lib/color.js')

const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const Colors = config => color(config.colors).colors.map(c => {
  const [key, val] = color.keyVal(c)

  return e(
})

module.exports = (config, typeScale) =>
  e('div', { className: 'flex-m flex-l' },
    HtmlSection(Headings(config)),
    CodeSection(typeScale)
  )
