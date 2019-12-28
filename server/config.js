const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  accessToken: process.env.ACCESS_TOKEN,
  space: process.env.SPACE_ID
}
