const docs = opacity => `
/*

  OPACITY
  Docs: http://tachyons.io/docs/themes/opacity/

  Base:
    o = opacity

  Modifiers:
    ${ opacity.map(o => `-${opacityStep(o)} = literal value ${o}`).join('\n    ') }

*/
`

function opacityStep(o) {
  if (o === 0) { return 0; }

  return o < 0.1 ? o.toString().split('.')[1] : o * 100;
}

const css = opacity =>
  opacity
    .map(o => `.o-${opacityStep(o)} { opacity: ${o}; }`)
    .join('\n')

module.exports = {
  css,
  docs
}
