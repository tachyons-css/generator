module.exports = (typeScale, mediaQueries) => {
  const steps = []

  for (let i = 0; i < typeScale.length; i++) {
    steps.push(decl(i + 1, typeScale[i]))
  }

  return steps.join('\n')
}

const decl = (step, size) => `.f${step} { font-size: ${size}rem; }`
