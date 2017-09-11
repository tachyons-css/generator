const crypto = require('crypto')

module.exports = (obj, sha = '256') => {
  const str = JSON.stringify(obj)

  return crypto
    .createHash(`sha${sha}`)
    .update(str)
    .digest('hex')
    .slice(0, 32)
}
