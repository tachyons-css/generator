const React = require('react')
const e = React.createElement

const {
  ColorsCx: {
    td,
    bg,
    color
  }
} = require('../style')

// Need to use this for palx handling
const colorify = require('../../lib/color')

const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const Colors = config => {
  const colorMap = colorify(config.colors).colors

  return Object.keys(colorMap).colors.map(name => {
    const bgCx = `${td} bg-${name}`
    const colorCx = `${td} ${name}`
    const varCx = td

    return e('tr', { key: name },
      e('td', { className: bgCx }, null),
      e('td', { className: colorCx }, 'Aa'),
      e('td', { className: varCx }, `--${name}: colorMap[name]`)
    )
  })
}

const ColorsTable = config =>
  e('table', { className: 'border-collapse w-100' },
    e('tbody', { className: 'f6', cellspacing: 0, cellpadding: 0 }, Colors(config))
  )

module.exports = (config, typeScale) =>
  e('div', { className: 'flex-m flex-l' },
    HtmlSection(ColorsTable(config)),
    CodeSection(typeScale)
  )
