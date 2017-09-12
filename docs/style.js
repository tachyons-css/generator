
const cxs = require('cxs')

// This ensures that basic styling for
// the styleguide are consistent amongst
// all configurations
module.exports.BodyCx = {
  body: cxs({
    width: '100%',
    overflowX: 'hidden',
    maxWidth: '96rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  })
}

module.exports.GettingStartedCx = {
  wrap: cxs({
    borderTop: 'thin solid #fafafa',
    color: 'rgba(0, 0, 0, .7)',
    paddingTop: '4rem',
    paddingBottom: '4rem'
  }),
  pre: cxs({
    backgroundColor: 'rgba(0, 0, 0, .7)',
    color: '#e8fdf5',
    padding: '1rem',
    overflow: 'auto',
    whiteSpace: 'pre'
  })
}

module.exports.SectionCx = {
  wrap: cxs({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4rem',
    marginBottom: '4rem',
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
  }),
  colorTile: cxs({
    width: '100%',
    padding: '2rem',
    '@media screen and (min-width: 40em)': {
      width: '50%'
    },
    '@media screen and (min-width: 60em)': {
      width: '25%'
    },
  })
}

module.exports.ButtonCx = {
  button: cxs({
    color: '#444',
    backgroundColor: '#fff',
    padding: '1rem',
    border: 'thin solid #444',
    transition: 'background-color .15s ease-in-out',
    margin: '1rem',
    textDecoration: 'none',
    ':hover': {
      color: '#fff',
      backgroundColor: '#444'
    }
  })
}
