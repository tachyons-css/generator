const React = require('react')
const e = React.createElement

const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const LOREM = `
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor
  sit amet
`

const generateMeasure = (title, className) =>
  e('div', { className, key: className },
    e('h3', { className: 'mt4 fw6 f6' }, title),
    e('p', { className: 'lh-copy' }, LOREM),
  )

const Measures = () => [
  generateMeasure('Wide Measure', 'measure-wide'),
  generateMeasure('Measure', 'measure'),
  generateMeasure('Narrow Measure', 'measure-narrow'),
]

module.exports = measure =>
  e('div', { className: 'flex-m flex-l' },
    HtmlSection(Measures()),
    CodeSection(measure)
  )
