import test from 'ava'
import globby from 'globby'
import camel from 'camelcase'
import fs from 'fs'
import path from 'path'

import config from '../config'
import tachyonsGenerator from '../'

test.only('palette is generated for colors array when included in config', async t => {
  const tachy = tachyonsGenerator({ palette: '#07cccc' })
  const {
    modules: {
      variables
    }
  } = await tachy.generate()

  const EXPECTED = fixture('palette-variables.css')

  t.is(variables.trim(), EXPECTED)
})

const fixture = file => fs.readFileSync(path.join(__dirname, `fixtures/${file}`), 'utf8').trim()
