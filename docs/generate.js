const fs = require('fs')
const path = require('path')

const tachyonsGenerator = require('../index')
const config = require('../config.js')

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  const out = await tachy.generate()

  fs.writeFileSync(path.join(__dirname, '..', 'out.html'), out.docs)
  fs.writeFileSync(path.join(__dirname, '..', 'out.css'), out.css)
}

generate()
