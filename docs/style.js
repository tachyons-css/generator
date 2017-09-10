const cxs = require('cxs')

// This ensures that basic styling for
// the styleguide are consistent amongst
// all configurations

module.exports.CodeSectionCx = {
  pre: cxs({
    border: 'thin solid #fafafa',
    padding: '1rem',
    overflow: 'auto'
  }),
  code: cxs({
    display: 'block',
    fontSize: '.875rem',
    padding: '1rem',
    lineHeight: '1.4'
  })
}

module.exports.HtmlSectionCx = {
  wrap: cxs({
    overflow: 'auto'
  })
}

module.exports.ColorsCx = {
  td: cxs({ borderBottom: 'thin solid #fafafa' }),
  bg: cxs({ padding: '2rem' }),
  color: cxs({
    paddingLeft: '2rem',
    paddingRight: '2rem'
  })
}
