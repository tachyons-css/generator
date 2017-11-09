const directions = require('./directions')
const decls = require('./declarations')
const { step, mqSteps } = require('./docs-helper')
const withUnits = require('./units').withUnits

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

    ${ [].concat(0, spacing).map((_, idx) => step({ zeroth: '/none', nth: 'spacing scale' }, idx )).join('\n    ') }

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = spacing =>
  [].concat(0, spacing).map((spacing, idx) =>
    Object.keys(directions).map(d =>
      [
        `.p${directions[d]}${idx} { ${fullDecl(d, spacing, 'padding')} }`,
        `.m${directions[d]}${idx} { ${fullDecl(d, spacing, 'margin')} }`,
        `.n${directions[d]}${idx} { ${fullDecl(d, `-${spacing}`, 'margin')} }`
      ].join('\n')
    ).join('\n')
  )


const fullDecl = (d, size, prop) => decls[d].map(dir => `${prop}${dir}: ${withUnits(size, 'rem')};`).join('\n')

module.exports = {
  css,
  docs
}
