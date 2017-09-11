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

function step({ zeroth = '', nth = '' }, idx) {
  if (idx === 0) { return `0 = 0${zeroth}` }
  const last = Math.abs(idx).toString().split('').reverse()[0]

  return `${idx} = ${idx}${suffix(last)} step in ${nth}`
}

function mqSteps(mediaQueries, delimiter = '\n    ') {
  return mediaQueries.map((mq) => {
    const key = Object.keys(mq)[0];
    return `-${key}  = ${mq[key]}em`
  })
  .join(delimiter)
}

module.exports = {
  step,
  mqSteps
}
