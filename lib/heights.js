const { step, mqSteps } = require('./docs-helper')

const docs = (heights, mqs) => `
/*

  HEIGHTS
  Docs: http://tachyons.io/docs/layout/heights/

  Base:
    h = height
    min-h = min-height
    min-vh = min-height vertical screen height
    vh = vertical screen height

  Modifiers
    ${ heights.map((_, idx) => step({ nth: 'height scale' }, idx + 1)).join('\n    ') }

    -25   = literal value 25%
    -50   = literal value 50%
    -75   = literal value 75%
    -100  = literal value 100%

    -auto = string value of auto
    -inherit = string value of inherit

  Media Query Extensions:
    ${mqSteps(mqs)}

*/`

const css = heights =>
  heights
    .map((height, idx) => `.h${idx+1} { height: ${height}rem; }`)
    .concat([
      '.h-25 { height: 25%; }',
      '.h-50 { height: 50%; }',
      '.h-75 { height: 75%; }',
      '.h-100 { height: 100%; }',
      '.min-h-100 { min-height: 100%; }',
      '.vh-25 { height: 25vh; }',
      '.vh-50 { height: 50vh; }',
      '.vh-75 { height: 75vh; }',
      '.vh-100 { height: 100vh; }',
      '.min-vh-100 { min-height: 100vh; }',
      '.h-auto { height: auto; }',
      '.h-inherit { height: inherit; }'
    ])
    .join('\n')

module.exports = {
  css,
  docs
}
