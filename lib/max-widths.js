module.exports = widths =>
  widths
    .map((width, idx) => `.mw${idx+1} { max-width: ${width}rem; }`)
    .concat([
      '.mw-none { max-width: none; }',
      '.mw-100 { max-width: 100%; }'
    ])
    .join('\n')
