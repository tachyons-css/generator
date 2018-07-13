const { getColor } = require('./config-utils')

const docs = () =>
  `
/*

  TABLES
  Docs: http://tachyons.io/docs/elements/tables/

*/
`

const css = (tables, fullConfig) => {
  return `
  .collapse {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ${striped(tables.striped, fullConfig)}
  ${stripe(tables.stripe, fullConfig)}
  `
}

const striped = (stripedColors, fullConfig) =>
  stripedColors.map(color => `
  .striped--${color}:nth-child(odd) {
    background-color: ${getColor(fullConfig, color, color)};
  }
  `
  )

const stripe = (stripeColors, fullConfig) =>
  stripeColors.map(color => `
  .stripe-${color}:nth-child(odd) {
    background-color: ${fullConfig.colors[color] ||
      (color === 'light' ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .1)')};
  }
  `
  )


module.exports = {
  css,
  docs,
}
