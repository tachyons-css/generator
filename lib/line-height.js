const { step, mqSteps } = require('./docs-helper')

const docs = (_, mqs) => `
/*
  LINE HEIGHT / Leading
  Docs: http://tachyons.io/docs/typography/line-height/

  Base:
    lh = line-height

  Media Query Extensions:
    ${mqSteps(mqs)}
*/
`

const indexLabelMapping = {
  0: 'solid',
  1: 'title',
  2: 'copy',
}

const css = lineHeights =>
  lineHeights
    .map(
      (lineHeight, idx) =>
        `.lh-${indexLabelMapping[idx]} { line-height: ${lineHeight} }`
    )
    .join('\n')

module.exports = {
  css,
  docs,
}
