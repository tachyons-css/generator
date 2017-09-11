const React = require('react')
const e = React.createElement

const {
  SectionCx: {
    wrap,
    h3
  }
} = require('../style')

module.exports = ({ title, children }) =>
  e('article', { className: 'center' },
    e('h3', { className: h3 }, title),
    e('div', { className: wrap }, children)
  )
