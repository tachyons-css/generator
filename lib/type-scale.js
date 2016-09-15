module.exports = (step, size, opts) => {
  opts = opts || {}

  const postfix = opts.postfix || ''

  return `.f${step}${postfix} { font-size: ${size}rem; }`
}
