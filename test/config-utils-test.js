import test from 'ava'
import { getColor } from '../lib/config-utils'

test('should get the custom color if it exists', t => {
  const customConfig = {
    colors: {
      customBlue: '#f1f8ff'
    }
  }

  const color = getColor(customConfig, 'customBlue', 'blue')

  t.is(color, '#f1f8ff')
})

test('should use the fallback color if the color is not defined', t => {
  const color = getColor({ colors: {} }, 'customRed', 'red')

  t.is(color, '#ff3223')
})
