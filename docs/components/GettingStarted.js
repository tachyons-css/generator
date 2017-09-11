const React = require('react')
const e = React.createElement

const {
  GettingStartedCx: {
    wrap,
    pre
  },
  ButtonCx: {
    button
  }
} = require('../style')

const DESCRIPTION = `
  Copy the link style tag and paste it
  it in the head of the html file(s) you
  want to include this custom tachyons
  build in
`

const html = (hash, version) => `<html lang="en">
  <title> </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${link(hash, version)}
  <body>
  </body>
</html>
`

const link = (hash, version) => `<link rel="stylesheet" href="https://tachyons.pub/${version}/${hash}/css/tachyons.min.css" />`

const css = (hash, version) => `https://tachyons.pub/${version}/${hash}/css/tachyons.css`
const config = (hash, version) => `https://tachyons.pub/${version}/${hash}/config.json`
const modules = (hash, version) => `https://tachyons.pub/${version}/${hash}/modules.json`

module.exports = (hash, version) =>
  e('article', { className: wrap },
    e('h3', { className: 'f3' }, 'Getting Started'),
    e('p', { className: 'lh-copy measure' }, DESCRIPTION),
    e('pre', { className: pre }, html(hash, version)),
    e('div', { className: 'tc mv4' },
      e('h4', { className: 'mb2 ttu' }, 'Start Using'),
      e('a', { className: button, href: 'http://tachyons.io' }, 'Tachyons'),
      e('a', { className: button, href: 'https://github.com/tachyons-css/tachyons-generator' }, 'GitHub'),
      e('a', { className: button, href: css }, 'Download Css'),
      e('a', { className: button, href: css }, 'Config'),
      e('a', { className: button, href: css }, 'Modules')
    )
  )
