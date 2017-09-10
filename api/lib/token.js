const AWS = require('./aws-client')

const sts = new AWS.STS()

module.exports = (hash, version) => {
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
      if (err) {
        return reject(err)
      }

      resolve({
        accessKeyId: data.Credentials.AccessKeyId,
        secretAccessKey: data.Credentials.SecretAccessKey,
        sessionToken: data.Credentials.SessionToken
      })
    })
  })
}
