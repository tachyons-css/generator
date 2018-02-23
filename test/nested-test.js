import test from 'ava'
import fs from 'fs'
import path from 'path'

import config from '../config'
import tachyonsGenerator from '../'

test('nested links colors fall back to default values when not defined', async t => {
  const tachy = tachyonsGenerator()
  const { modules: { nested } } = await tachy.generate()

  t.snapshot(nested)
})

test('nested links colors are generated when defined', async t => {
  const tachy = tachyonsGenerator({
    nested: {
      links: ['blue', 'lightest-blue'],
    },
  })
  const { modules: { nested } } = await tachy.generate()

  t.snapshot(nested)
})
