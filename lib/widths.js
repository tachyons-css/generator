module.exports = widths =>
  widths
    .map((width, idx) => `.w${idx+1} { width: ${width}rem; }`)
    .concat([
      '.w-10 {  width:  10%; }',
      '.w-20 {  width:  20%; }',
      '.w-25 {  width:  25%; }',
      '.w-30 {  width:  30%; }',
      '.w-33 {  width:  33%; }',
      '.w-34 {  width:  34%; }',
      '.w-40 {  width:  40%; }',
      '.w-50 {  width:  50%; }',
      '.w-60 {  width:  60%; }',
      '.w-70 {  width:  70%; }',
      '.w-75 {  width:  75%; }',
      '.w-80 {  width:  80%; }',
      '.w-90 {  width:  90%; }',
      '.w-100 { width: 100%; }',
      '.w-third { width: calc(100% / 3); }',
      '.w-two-thirds { width: calc(100% / 1.5); }',
      '.w-auto { width: auto; }'
    ])
    .join('\n')
