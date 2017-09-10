const React = require('react')
const e = React.createElement

const Section = require('./Section')
const HtmlSection = require('./HtmlSection')
const CodeSection = require('./CodeSection')

const Headings = config => config.typeScale.map((f, i) => {
  const step = i+1
  const tag = step > 6 ? 'h6' : `h${step}`

  return e(tag, { key: step, className: `f${step}` }, `Level ${step} Heading`)
})

module.exports = (config, typeScale) =>
  Section({
    title: 'Typography',
    children: [
      HtmlSection(Headings(config)),
      CodeSection(typeScale)
    ]
  })
