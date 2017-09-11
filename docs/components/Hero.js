const React = require('react')
const e = React.createElement

const DESCRIPTION1 = `
  Welcome to your custom build of Tachyons.
`

const DESCRIPTION2 = `
  Create fast loading, highly readable, and
  100% responsive interfaces with as little
  css as possible.
`

module.exports = () =>
  e('article', { className: 'mv4' },
    e('h3', { className: 'f1' }, 'Built for designing.'),
    e('p', { className: 'f4 lh-copy measure-wide' }, DESCRIPTION1),
    e('p', { className: 'f4 lh-copy measure-wide' }, DESCRIPTION2)
  )
