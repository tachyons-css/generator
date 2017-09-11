const ReactDOMServer = require('react-dom/server')

const cxs = require('cxs')
const Layout = require('./components/Layout')

const Styleguide = require('./components/Styleguide')

module.exports = (config, { min, modules }) => {
  const docs = Layout(Styleguide(config, modules))

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>CUSTOM TACHYONS - Css Toolkit</title>
        <style>
          ${min}
          ${cxs.css()}
        </style>
      </head>

      ${ReactDOMServer.renderToStaticMarkup(docs)}
    </html>
  `
}
