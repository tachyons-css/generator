const { version } = require('./package.json')

const crypto = require('crypto')
const AWS = require('aws-sdk')
const {
  json,
  send
} = require('micro')

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const sts = new AWS.STS()

module.exports = async (req, res) => {
  try {
    const config = await json(req)
    const hash = hashConfig(config)
    const token = await getToken(hash)
    const object = `${version}/${hash}`

    send(res, 200, { hash, token, object })
  } catch (error) {
    send(res, 500, { error })
  }
}

const getToken = hash => {
  return new Promise((resolve, reject) => {
    sts.getFederationToken({
      Name: hash,
      DurationSeconds: 900,
      Policy: JSON.stringify({
        Version: '2012-10-17',
        Statement: [{
          Effect: 'Allow',
          Action: ['s3:ListBucket'],
          Resource: [`arn:aws:s3:::tachyons-pub/${version}/${hash}`]
        }, {
          Effect: 'Allow',
          Action: ['s3:PutObject', 's3:PutObjectACL'],
          Resource: [`arn:aws:s3:::tachyons-pub/${version}/${hash}/*`]
        }]
      })
    }, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

const hashConfig = (obj, sha = '256') => {
  const str = JSON.stringify(obj)

  return crypto
    .createHash(`sha${sha}`)
    .update(str)
    .digest('hex')
    .slice(0, 32)
}
