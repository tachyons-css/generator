import test from 'ava'
import config from './config.json'
import tachyonsGenerator from './'

test('tachyons-generator does something awesome', t => {
  console.log(tachyonsGenerator(config).spacing())
  console.log(tachyonsGenerator(config).typeScale())
  console.log(tachyonsGenerator(config).generate())
  require('fs').writeFileSync('out.css', tachyonsGenerator(config).generate())
  t.pass()
})
