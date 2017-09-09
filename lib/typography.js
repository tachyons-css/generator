module.exports = typography => `
.measure {
  max-width: ${typography.measure[0]}em;
}
.measure-wide {
  max-width: ${typography.measure[1]}em;
}
.measure-narrow {
  max-width: ${typography.measure[2]}em;
}
.small-caps { font-variant: small-caps; }
.indent {
  text-indent: 1em;
  margin-top: 0;
  margin-bottom: 0;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;
