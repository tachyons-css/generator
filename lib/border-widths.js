const { step, mqSteps } = require('./docs-helper')

const docs = (widths, mqs) => `
/*

  BORDER WIDTHS
  Docs: http://tachyons.io/docs/themes/borders/

  Base:
    bw = border-width

  Modifiers:
    ${ widths.map((_, idx) =>
      step({ zeroth: ' width border', nth: 'border-width scale' }, idx)).join('\n    ')
    }

 Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = widths => {
  let borderWidths = []

  for (let i = 0; i < widths.length; i++) {
    borderWidths.push(`.bw${i} { border-width: ${ widths[i] }rem; }`)
  }

  borderWidths.push(`
    .bt-0 { border-top-width: 0; }
    .br-0 { border-right-width: 0; }
    .bb-0 { border-bottom-width: 0; }
    .bl-0 { border-left-width: 0; }
  `)

  return borderWidths.join('\n')
}

module.exports = {
  css,
  docs
}
