import React from 'react'
import Head from 'next/head'

import generator from 'tachyons-generator'

export default ({ config }) => {
  const gen = generator(config)

  return (
    <Head>
      <title>Tachyons Generator</title>

      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <style children={`${gen.assembleCss(gen.generate())} ${gen.typeScale()} ${gen.spacing()}`} />
    </Head>
  )
}
