const React = require('react')
const e = React.createElement

const {
  HtmlSectionCx: {
    wrap
  }
} = require('../style')

module.exports = children => e('div', { className: wrap, key: 'html' }, children)
