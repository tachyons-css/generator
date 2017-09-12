const React = require('react')
const e = React.createElement

const colorable = require('colorable')

const {
  ColorsCx: {
    td,
    bg,
    color,
    colorTile
  }
} = require('../style')

const COLORABLE_DESCRIPTION = `
  In visual perception a color is almost never seen as
  it really is – as it physically is. This fact makes color
  the most relative medium in art. - Josef Albers
`

// Need to use this for palx handling
const colorify = require('../../lib/color')

const Section = require('./Section')
const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const Colors = config => {
  const colorMap = colorify(config.colors).colorMap

  return Object.keys(colorMap).map(name => {
    const colorCx = `${td} ${color} ${name}`
    const bgCx = `${td} ${bg} bg-${name}`
    const varCx = td

    return e('tr', { key: name },
      e('td', { className: bgCx }, null),
      e('td', { className: colorCx }, 'Aa'),
      e('td', { className: varCx }, `--${name}: ${colorMap[name]}`)
    )
  })
}

const ColorsTable = config =>
  e('table', { className: 'border-collapse w-100' },
    e('tbody', { className: 'f6', cellspacing: 0, cellpadding: 0 }, Colors(config))
  )

const Colorable = colors =>
  e('div', { className: 'cf w-100 flex flex-wrap' },
    colorable(colors, { threshold: 3 }).map(combo =>
      e('div', { key: combo.name, className: `${colorTile} bg-${combo.name}` },
        combo.combinations.map(color =>
          e('div', { key: `${color.name}${combo.name}`, className: color.name },
            e('h1', null, 'Aa',
              e('span', { className: 'pl1 f5' }, color.contrast.toFixed(2))
            ),
            e('p', { className: 'f6 lh-copy code' }, `.bg-${combo.name} + .${color.name}`),
            e('p', { className: 'f6 lh-copy' }, COLORABLE_DESCRIPTION)
          )
        )
      )
    )
  )

module.exports = (config, typeScale) =>
  e('div', null,
    Section({
      title: 'Colors',
      children: [
        HtmlSection(ColorsTable(config)),
        CodeSection(typeScale),
      ]
    }),
    Section({
      title: 'Color Combinations',
      children: Colorable(config.colors)
    })
  )
