import test from 'ava'
import globby from 'globby'
import camel from 'camelcase'
import fs from 'fs'

import config from './config.json'
import tachyonsGenerator from './'

test('nothing explodes', t => {
  fs.writeFileSync('out.css', JSON.stringify(tachyonsGenerator(config).generate(), null, 2))
  t.pass()
})

test('file generation matches Tachyons with the default config', async t => {
  const output = tachyonsGenerator(config).generate()
  const keys = Object.keys(output)
  t.plan(keys.length)

  const src = await globby('node_modules/tachyons/src/*.css').then(processFiles)

  keys.forEach(key => {
    console.log(`testing ${key}`)
    t.deepEqual(output[key], src[key], key)
  })
})

const processFiles = files => {
  const obj = {}

  files.forEach(file => obj[cleanFile(file)] = fs.readFileSync(file, 'utf8'))

  return obj
}

const cleanFile = file => camel(file.split('src/')[1].replace('.css', ''))
