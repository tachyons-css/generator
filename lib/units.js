const hasUnits = str => /(px|em|rem)$/.test(str)

const withUnits = (str, unit = 'em') => hasUnits(str) ? str : `${str}${unit}`

module.exports = {
  withUnits,
  hasUnits
}
