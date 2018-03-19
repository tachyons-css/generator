const defaultConfig = require('../config')

function getColor(customConfig, name, fallback) {
  if (name && customConfig.colors[name]) {
    return customConfig.colors[name]
  }

  if (name) {
    console.warn(`Color "${name}" not found. Using Tachyons default color.`)
  }

  return defaultConfig.colors[fallback]
}

module.exports = {
  getColor
}
