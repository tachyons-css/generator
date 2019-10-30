const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.TACHYONS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.TACHYONS_AWS_SECRET_ACCESS_KEY
})

module.exports = AWS
