const isObject = require('isobject')

const suffix = (idx) => {
  if (idx == 1) {
    return 'st'
  } else if(idx == 2) {
    return 'nd'
  } else if(idx == 3) {
    return 'rd'
  } else {
    return 'th'
  }
}

function step({ zeroth = '', nth = '' }, idx, alias) {
  if (idx === 0) { return `0 = 0${zeroth}` }
  const last = Math.abs(idx).toString().split('').reverse()[0]

  if (alias) return `${idx} = ${alias}`
  return `${idx} = ${idx}${suffix(last)} step in ${nth}`
}

function mqSteps(mediaQueries, delimiter = '\n    ') {
  return mediaQueries.map((mq) => {
    const key = Object.keys(mq)[0];
    const maybeObj = isObject(mq[key]) && mq[key]
    const delimiter = maybeObj && maybeObj.delimiter || '-'
    const value = maybeObj ? maybeObj.value : mq[key]

    return `${delimiter}${key}  = ${value}em`
  })
  .join(delimiter)
}

module.exports = {
  step,
  mqSteps
}
