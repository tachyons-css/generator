const ReactDOMServer = require('react-dom/server')

const tachyonsGenerator = require('../')

const Layout = require('./components/Layout')
const Styleguide = require('./components/Styleguide')

config = require('../config')

const fn = async () => {
  const { modules } = await tachyonsGenerator(config).css()
  const docs = Layout(Styleguide(config, modules))
  const html = ReactDOMServer.renderToStaticMarkup(docs)
  console.log(html)
}

fn()
