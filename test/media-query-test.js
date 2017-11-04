import test from 'ava'
import fs from 'fs'
import path from 'path'

import config from '../config'
import tachyonsGenerator from '../'

test('handle greater than queries', async t => {
  const tachy = tachyonsGenerator({
    customMedia: [
      { m: '32' },
      {
        l: {
          value: '64'
        }
      },
      {
        med: {
          value: 64,
          minWidth: true,
          prefix: true,
          delimiter: '@'
        }
      },
      {
        xl: {
          value: 123,
          minWidth: true
        }
      },
      {
        ns: {
          value: 1234,
          maxWidth: true
        }
      }
    ]
  })

  const {
    modules: {
      borderWidths
    }
  } = await tachy.generate()

  t.snapshot(borderWidths)
})
