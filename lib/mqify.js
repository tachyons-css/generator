module.exports = (css, mqs) => {
  const mqedCss = [css]

  mqs.forEach(mq => {
    mqedCss.push(`@media ${mq[1]} {
      ${css}
    }`)
  })

  return mqedCss.join('\n')
}
