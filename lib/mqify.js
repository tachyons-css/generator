const stripComments = require('strip-css-comments')
const classPrefix = require('postcss-class-prefix')
const classPostfix = require('postcss-class-postfix')
const postcss = require('postcss')

module.exports = async (css, mqs) => {
  const px = mqs.map(({ key, mq, prefix, delimiter = '-' }) => {
    const fn = prefix ?
      classPrefix(`${key}${delimiter}`) :
      classPostfix(`${delimiter}${key}`)

    return postcss([ fn ])
      .process(css)
      .then(mqified => {
        const mqCss = `@media ${mq} {\n${stripComments(mqified.css).trim()}\n}`
        return mqCss
      })
  })

  const mqCss = await Promise.all(px)

  return [css].concat(mqCss).join('\n')
}
