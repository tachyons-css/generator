import test from 'ava'
import config from './config.json'
import tachyonsGenerator from './'

test('tachyons-generator does something awesome', t => {
  console.log(tachyonsGenerator(config).spacing())
  console.log(tachyonsGenerator(config).colors())
  console.log(tachyonsGenerator(config).typeScale())
  t.pass()
})
