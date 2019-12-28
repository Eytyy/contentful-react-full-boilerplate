const { createClient } = require('contentful')
const { accessToken, space } = require('./config')

module.exports = createClient({
  accessToken,
  space
})
