const React = require('react')
const e = React.createElement

module.exports = ({ title, children }) =>
  e('article', { className: 'mt5' },
    e('h3', { className: 'f6 ttu fw6 mt0 mb3 bb pb2' }, title),
    e('div', null, children)
  )
