const React = require('react')
const e = React.createElement

const cxs = require('cxs')

module.exports = children =>
  e('html', null,
    e('head', null,
      e('style', null, cxs.css()),
      e('link', { src: 'css/tachyons.min.css' })
    ),
    e('body', null, children)
  )
