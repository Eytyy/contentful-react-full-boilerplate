import express from 'express'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 3000
const DIST_DIR = __dirname
const HTML_FILE = path.join(__dirname, 'index.html')

app.use(express.static(DIST_DIR))

const posts = require('./routes/posts')
app.use('/api/posts', posts)

app.get('*', (_, res) => res.sendFile(HTML_FILE))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
