const camel = require('camelcase')
const kebab = require('kebab-case')
const isBlank = require('is-blank')

const manifest = require('./manifest')
const typeScale = require('./type-scale')
const spacing = require('./spacing')
const color = require('./color')
const mqify = require('./mqify')

module.exports = (config, mediaQueries) => {
  console.log(Object.keys(manifest))
  const colors = color(config.colors)

  const px = Object
    .keys(manifest)
    .filter(filterSkipped.bind(null, config.skipModules))
    .map(name => {
      const module = manifest[name]

      let raw = null

      if (module.colors) {
        raw = colors[name]()
      } else if (name == 'typeScale') {
        raw = typeScale(config.typeScale)
      } else if (name == 'spacing') {
        raw = spacing(config.spacing)
      } else {
        raw = requireify(name)
      }

      return module.mq ?
        mqify(raw, mediaQueries).then(css => ({ name, css })) :
        { name, css: raw }
    })

  return Promise
    .all(px)
    .then(reduceModules)
}

const reduceModules = modules => {
  return modules.reduce((prev, curr) => {
    console.log(curr.name)
    prev[camel(curr.name)] = curr.css
    return prev
  }, {})
}

const filterSkipped = (skipModules, name) => {
  if (isBlank(skipModules)) {
    return true
  } else {
    return !skipModules.includes(camel[name])
  }
}

const requireify = name => {
  const kebabed = kebab(name)
  return require(`../partials/_${kebabed}.css`)
}
