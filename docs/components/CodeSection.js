const React = require('react')
const e = React.createElement

const stripMedia = require('strip-css-media-queries')

const {
  CodeSectionCx: {
    pre,
    code
  }
} = require('../style')

module.exports = css =>
  e('pre', { className: pre, key: 'code' },
    e('code', { className: code }, stripMedia(css))
  )
