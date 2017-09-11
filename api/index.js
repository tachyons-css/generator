const {
  json,
  send
} = require('micro')

const tachyonsGenerator = require('tachyons-generator')

const { version } = require('./package.json')
const hashConfig = require('./lib/hash-config')
const AWS = require('./lib/aws-client')

const upload = ({ bucket, name, contentType, dir, body }) => {
  return new Promise((resolve, reject) => {
    bucket.putObject({
      Bucket: 'tachyons-pub',
      Key: `${dir}/${name}`,
      ContentType: contentType,
      Body: body,
      ACL: 'public-read'
    }, err => err ? reject(err) : resolve())
  })
}

module.exports = async (req, res) => {
  try {
    const config = await json(req)
    const hash = hashConfig(config)
    const dir = `${version}/${hash}`

    const bucket = new AWS.S3()

    const tGenerate = await tachyonsGenerator(config)
    const tachy = await tGenerate.generate()

    const px = [
      upload({ bucket, name: 'css/tachyons.css', contentType: 'text/css', dir, body: tachy.css }),
      upload({ bucket, name: 'css/tachyons.min.css', contentType: 'text/css', dir, body: tachy.min }),
      upload({ bucket, name: 'config.json', contentType: 'application/json', dir, body: JSON.stringify(config, null, 2) }),
      upload({ bucket, name: 'modules.json', contentType: 'application/json', dir, body: JSON.stringify(tachy.modules, null, 2) }),
      upload({ bucket, name: 'index.html', contentType: 'text/html', dir, body: tachy.docs })
    ]

    await Promise.all(px)

    send(res, 200, { url: `https://s3-us-west-1.amazonaws.com/tachyons-pub/${dir}/index.html` })
  } catch (error) {
    console.log(error)
    send(res, 500, { error })
  }
}
