const React = require('react')
const e = React.createElement

const {
  CodeSectionCx: {
    pre,
    code
  }
} = require('../style')

module.exports = children =>
  e('pre', { className: pre },
    e('code', { className: code }, children)
  )
