import test from 'ava'
import globby from 'globby'
import camel from 'camelcase'
import fs from 'fs'
import path from 'path'

import config from '../config'
import tachyonsGenerator from '../'

test('media-queries are handled correctly', async t => {
  const tachy = tachyonsGenerator(config)
  const {
    modules: {
      display
    }
  } = await tachy.generate()

  const EXPECTED = fixture('display.css')

  t.is(display.trim(), EXPECTED)
})

test('type-scale', async t => {
  const tachy = tachyonsGenerator(config)
  const {
    modules: {
      typeScale
    }
  } = await tachy.generate()

  const EXPECTED = fixture('type-scale.css')

  t.is(typeScale.trim(), EXPECTED)
})

test('module skipping', async t => {
  const tachy = tachyonsGenerator({ skipModules: ['aspect-ratios'] })
  const {
    modules: {
      aspectRatios
    }
  } = await tachy.generate()

  t.is(aspectRatios, undefined)
})

test('css', async t => {
  const tachy = tachyonsGenerator(config)

  const { post, css, min } = await tachy.generate()

  fs.writeFileSync('out.css', css)

  t.snapshot(css)
})

const fixture = file => fs.readFileSync(path.join(__dirname, `fixtures/${file}`), 'utf8').trim()
