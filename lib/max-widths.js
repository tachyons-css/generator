const { step, mqSteps } = require('./docs-helper')

const docs = (widths, mqs) => `
/*
  MAX WIDTHS
  Docs: http://tachyons.io/docs/layout/max-widths/

  Base:
    mw = max-width

  Modifiers:
    ${ widths.map((_, idx) => step({ nth: 'width scale' }, idx + 1)).join('\n    ') }

    -100 = literal value 100%

    -none  = string value none

  Media Query Extensions:
    ${mqSteps(mqs)}
*/
`

const css = widths =>
  widths
    .map((width, idx) => `.mw${idx+1} { max-width: ${width}rem; }`)
    .concat([
      '.mw-none { max-width: none; }',
      '.mw-100 { max-width: 100%; }'
    ])
    .join('\n')

module.exports = {
  css,
  docs
}
