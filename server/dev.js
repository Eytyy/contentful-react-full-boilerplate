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

const journal = require('./routes/journal')
const work = require('./routes/work')

app.use('/api/journal', journal.route)
app.use('/api/work', work.route)

app.get('*', (_, res) => res.sendFile(HTML_FILE))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
