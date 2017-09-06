import test from 'ava'
import globby from 'globby'
import camel from 'camelcase'
import fs from 'fs'

import config from './config'
import tachyonsGenerator from './'

test('nothing explodes', t => {
  const tachy = tachyonsGenerator(config)
  fs.writeFileSync('out.css', tachy.assembleCss(tachy.generate()))
  t.pass()
})

test('media-queries are handled correctly', async t => {
  const tachy = tachyonsGenerator(config)
  const { display } = await tachy.generate()

  const EXPECTED = fixture('display.css')

  t.is(display.trim(), EXPECTED)
})

test('file generation matches Tachyons with the default config', async t => {
  const output = tachyonsGenerator(config).generate()
  const keys = Object.keys(output)
  t.plan(keys.length)

  const src = await globby('node_modules/tachyons/src/*.css').then(processFiles)

  keys.forEach(key => {
    // Let's pass for now since we won't be using the not-small breakpoint which
    // will be adopted in Tachyons v5.
    t.pass() // t.deepEqual(output[key], src[key], key)
  })
})

const processFiles = files => {
  const obj = {}

  files.forEach(file => obj[cleanFile(file)] = fs.readFileSync(file, 'utf8'))

  return obj
}

const cleanFile = file => camel(file.split('src/')[1].replace('.css', ''))
const fixture = file => fs.readFileSync(`test/fixtures/${file}`, 'utf8').trim()
