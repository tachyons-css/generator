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

  t.snapshot(display)
})

test('type-scale', async t => {
  const tachy = tachyonsGenerator(config)
  const {
    modules: {
      typeScale
    }
  } = await tachy.generate()

  t.snapshot(typeScale)
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

  const { css, docs } = await tachy.generate()

  fs.writeFileSync('out.css', css)
  fs.writeFileSync('out.html', docs)

  t.snapshot(css)
})
