const React = require('react')
const e = React.createElement

const {
  BodyCx: {
    body
  }
} = require('../style')

const className = `${body} sans-serif`

module.exports = children =>
  e('body', { className }, children)
