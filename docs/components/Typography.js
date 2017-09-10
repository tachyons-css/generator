const React = require('react')
const e = React.createElement

const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const Headings = config => config.typeScale.map((f, i) => {
  const step = i+1
  const tag = step > 6 ? 'h6' : `h${step}`

  return e(tag, { key: step, className: `f${step}` }, `Level ${step} Heading`)
})

module.exports = (config, typeScale) =>
  e('div', { className: 'flex-m flex-l' },
    HtmlSection(Headings(config)),
    CodeSection(typeScale)
  )
