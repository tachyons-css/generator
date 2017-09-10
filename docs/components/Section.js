const React = require('react')
const e = React.createElement

const {
  SectionCx: {
    wrap,
    h3
  }
} = require('../style')

module.exports = ({ title, children }) =>
  e('article', null,
    e('h3', { className: h3 }, title),
    e('div', { className: wrap }, children)
  )
