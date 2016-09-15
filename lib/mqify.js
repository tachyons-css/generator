const stripComments = require('strip-css-comments')

module.exports = (css, mqs) => {
  const mqedCss = [css]

  mqs.forEach(mq => {
    mqedCss.push(`@media ${mq[1]} {
      ${stripComments(css)}
    }`)
  })

  return mqedCss.join('\n')
}
