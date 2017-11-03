const { step, mqSteps } = require('./docs-helper')
const isObject = require('isobject')

const docs = (steps, mqs) => `
/*
  TYPE SCALE
  Docs: http://tachyons.io/docs/typography/scale/

  Base:
    f = font-size

  Modifiers:
    ${ steps.map((s, idx) => step({ nth: 'size scale' }, idx + 1, s.alias)).join('\n    ') }

  Media Query Extensions:
    ${mqSteps(mqs)}
*/`

const css = typeScale => {
  const steps = []

  for (let i = 0; i < typeScale.length; i++) {
    steps.push(decl(i + 1, typeScale[i]))
  }

  return steps.join('\n')
}

const decl = (step, size) => {

  let classNames = [step]

  if (isObject(size)) {
    classNames = classNames.concat(size.alias)
    size = size.value
  }
  return `.f${classNames.join(', .f')} { font-size: ${size}rem; }`
}

module.exports = {
  css,
  docs
}
