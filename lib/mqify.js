const stripComments = require('strip-css-comments')
const classPostfix = require('postcss-class-postfix')
const postcss = require('postcss')

module.exports = async (css, mqs) => {
  const px = mqs.map(mq => {
    return postcss([
      classPostfix(`-${mq[0]}`)
    ])
      .process(css)
      .then(postfixed => {
        const mqCss = `@media ${mq[1]} {\n${stripComments(postfixed.css).trim()}\n}`
        return mqCss
      })
  })

  const mqCss = await Promise.all(px)

  return [css].concat(mqCss).join('\n')
}
