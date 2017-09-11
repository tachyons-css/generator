const directions = require('./directions')
const decls = require('./declarations')
const { step, mqSteps } = require('./docs-helper')

const docs = (spacing, mqs) => `
/*

  SPACING
  Docs: http://tachyons.io/docs/layout/spacing/

  An eight step powers of two scale ranging from 0 to 16rem.

  Base:
    p = padding
    m = margin

  Modifiers:
    a = all
    h = horizontal
    v = vertical
    t = top
    r = right
    b = bottom
    l = left

    ${
      Array.from({ length: spacing.steps + 1 })
        .map((_, idx) => step({ zeroth: '/none', nth: 'spacing scale' }, idx)).join('\n    ')
    }

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = (spacing, mediaQueries) => {
  const steps = []

  for (let i = 0; i <= spacing.steps; i++) {
    steps.push(spacingDecls(i, spacing.ratio))
  }

  return steps.join('\n')
}

const spacingDecls = (step, baseScale, opts) => {
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

module.exports = {
  css,
  docs
}
