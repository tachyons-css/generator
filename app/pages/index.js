import React from 'react'

import commaSplit from 'comma-split'

import conf from '../config'
const config = conf()

import Layout from '../components/layout'

export default class extends React.Component {
  constructor () {
    super()

    this.state = { config }
    this.handleTypeScale = this.handleTypeScale.bind(this)
  }

  handleTypeScale (e, i) {
    const { config } = this.state
    const typeScale = config.typeScale
    typeScale[i] = e.target.value

    const newConfig = Object.assign({}, config, { typeScale })
    this.setState({ config: newConfig })
  }

  render () {
    const { config, currTypeScale } = this.state

    return (
      <Layout config={config}>
        <h3 className='f6 ttu fw6 mb0 mt5 bb pb2'>Typography</h3>
        {config.typeScale.map((f, i) => (
          <div>
            <p className={`f${i + 1}`}>Heading {i + 1}</p>
            <input value={config.typeScale[i]} onChange={e => this.handleTypeScale(e, i)} />
          </div>
        ))}
        <h3 className='f6 ttu fw6 mb0 mt5 bb pb2'>Config</h3>
        <pre children={JSON.stringify(config, null, 2)} />
      </Layout>
    )
  }
}
