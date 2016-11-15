import React from 'react'
import Head from 'next/head'

import generator from '../index'

export default config => (
  <Head>
    <title>Tachyons Generator</title>

    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

    <style children={generator.assembleCss(generator(config).generate())} />
  </Head>
)
