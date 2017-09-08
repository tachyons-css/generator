const fs = require('fs')
const globby = require('globby')
const camel = require('camelcase')
const kebab = require('kebab-case')
const stripComments = require('strip-css-comments')
const stripMedia = require('strip-css-media-queries')

const IGNORED = {
  typeScale: true,
  colors: true,
  variables: true,
  borderColors: true,
  skins: true,
  skinsPseudo: true,
  spacing: true,
  negativeMargins: true,
  borderWidths: true
}

const fileToModule = file => camel(file.split('src/_')[1].replace('.css', ''))
const files = globby.sync('node_modules/tachyons/src/_*.css', { nodir: true })

const readFile = file => {
  const css = fs.readFileSync(`node_modules/tachyons/src/_${file}.css`, 'utf8')

  return {
    file,
    css: stripComments(stripMedia(css))
  }
}

const writeFile = ({ file, css }) => {
  const js = "module.exports = `\n" + css.trim() + "\n`"
  fs.writeFileSync(`partials/_${file}.css.js`, js)
}

files
  .map(fileToModule)
  .filter(file => !IGNORED[file])
  .map(kebab)
  .map(readFile)
  .map(writeFile)
