const cxs = require('cxs')

// This ensures that basic styling for
// the styleguide are consistent amongst
// all configurations
module.exports.BodyCx = {
  body: cxs({
    maxWidth: '96rem',
    paddingLeft: '2rem',
    paddingRigh: '2rem'
  })
}

module.exports.SectionCx = {
  wrap: cxs({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4rem',
    maxWidth: '96rem',
    overflow: 'auto',
    '@media screen and (min-width: 40em)': {
      display: 'flex',
      alignItems: 'center'
    }
  }),
  h3: cxs({
    textTransform: 'uppercase',
    borderBottom: 'thin solid #444',
    fontSize: '.875rem'
  })
}

module.exports.CodeSectionCx = {
  pre: cxs({
    '@media screen and (min-width: 40em)': {
      width: '50%'
    },
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
    overflow: 'auto',
    '@media screen and (min-width: 40em)': {
      width: '50%'
    }
  })
}

module.exports.ColorsCx = {
  td: cxs({ borderBottom: 'thin solid #fafafa' }),
  bg: cxs({ padding: '2rem' }),
  color: cxs({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  })
}
