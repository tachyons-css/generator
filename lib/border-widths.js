module.exports = widths => {
  let borderWidths = []

  for (let i = 0; i < widths.length; i++) {
    borderWidths.push(`.bw${i} { border-width: ${ widths[i] }rem; }`)
  }

  borderWidths.push(`
    .bt-0 { border-top-width: 0; }
    .br-0 { border-right-width: 0; }
    .bb-0 { border-bottom-width: 0; }
    .bl-0 { border-left-width: 0; }
  `)

  return borderWidths.join('\n')
}
