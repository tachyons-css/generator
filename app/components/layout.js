import React from 'react'
import Head from './head'

export default ({ config, children }) => (
  <div>
    <Head config={config} />
    {children}
  </div>
)
