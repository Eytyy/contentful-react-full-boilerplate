const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../webpack.config.dev')

const { port } = require('./config')

const compiler = webpack(config)
const app = express()

const PORT = port || 3000
const DIST_DIR = __dirname
const HTML_FILE = path.join(__dirname, 'index.html')

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(DIST_DIR))

const posts = require('./routes/posts')
app.use('/api/posts', posts)

app.get('*', (_, res) => res.sendFile(HTML_FILE))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
