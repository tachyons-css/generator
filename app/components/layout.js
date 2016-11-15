import React from 'react'
import Head from './head'

export default ({ config, children }) => (
  <div className='pa4'>
    <Head config={config} />
    {children}
  </div>
)
