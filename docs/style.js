const cxs = require('cxs')

// This ensures that basic styling for
// the styleguide are consistent amongst
// all configurations

module.exports.CodeSectionCx = {
  pre: cxs({
    border: 'thin solid #fafafa',
    padding: '2rem',
    overflow: 'auto'
  }),
  code: cxs({
    display: 'block',
    fontSize: '.875rem',
    padding: '3rem',
    lineHeight: '1.4'
  })
}

module.exports.HtmlSectionCx = {
  wrap: cxs({
    overflow: 'auto'
  })
}
