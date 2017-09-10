function opacityStep(o) {
  if (o === 0) { return 0; }

  return o < 0.1 ? o.toString().split('.')[1] : o * 100;
}

module.exports = opacity =>
  opacity
    .map(o => `.o-${opacityStep(o)} { opacity: ${o}; }`)
    .join('\n')
