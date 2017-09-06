const directions = require('./directions')
const decls = require('./declarations')

module.exports = (step, baseScale, opts) => {
  opts = opts || {}

  const postfix = opts.postfix || ''
  const spacing = []
  const paddingClass = 'p' // TODO: Make configurable
  const marginClass = 'm'
  const negativeMarginClass = 'n'
  const size = step * baseScale

  // TODO: Don't create negative margin classes for horiz/vert directions
  return Object.keys(directions).map(d => `
    .${paddingClass}${directions[d]}${step}${postfix} { ${fullDecl(d, size, 'padding')} }
    .${marginClass}${directions[d]}${step}${postfix} { ${fullDecl(d, size, 'margin')} }
    .${negativeMarginClass}${directions[d]}${step}${postfix} { ${fullDecl(d, -size, 'margin')} }
  `).join('\n')
}

const fullDecl = (d, size, prop) => decls[d].map(dir => `${prop}${dir}: ${size}rem;`).join('\n')
