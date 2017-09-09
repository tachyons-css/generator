module.exports = heights =>
  heights
    .map((height, idx) => `.h${idx+1} { height: ${height}rem; }`)
    .concat([
      '.h-25 { height: 25%; }',
      '.h-50 { height: 50%; }',
      '.h-75 { height: 75%; }',
      '.h-100 { height: 100%; }',
      '.min-h-100 { min-height: 100%; }',
      '.vh-25 { height: 25vh; }',
      '.vh-50 { height: 50vh; }',
      '.vh-75 { height: 75vh; }',
      '.vh-100 { height: 100vh; }',
      '.min-vh-100 { min-height: 100vh; }',
      '.h-auto { height: auto; }',
      '.h-inherit { height: inherit; }'
    ])
    .join('\n')
