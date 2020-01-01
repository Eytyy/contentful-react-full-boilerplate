import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import App from '../src/App'

const app = express()

const PORT = process.env.PORT || 3000
const DIST_DIR = __dirname

app.use(express.static(DIST_DIR))

const journal = require('./routes/journal')
const work = require('./routes/work')

app.use('/api/journal', journal.route)
app.use('/api/work', work.route)

app.get('/', (req, res) => {
  handleRender(req, res)
})

app.get('/work/:id', (req, res) => {
  work.getProject(req.id).then(payload => {
    const {
      seo: { title, description, image }
    } = payload.items[0].fields
    handleRender(req, res, {
      title,
      image: image ? image.fields.file.url : image,
      description
    })
  })
})

app.get('/journal/:id', (req, res) => {
  journal.getArticle(req.id).then(payload => {
    const { title, description, image } = payload.items[0].fields.seo.fields
    handleRender(req, res, {
      title,
      image: image.fields.file.url,
      description
    })
  })
})

function handleRender(req, res, content = {}) {
  console.log(req.url)
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send(renderFullPage(html, { ...content, url: req.url }))
}

function renderFullPage(
  html,
  { title = 'Contentful Demo', description = 'boilerplate', image = '', url }
) {
  return `
	<!DOCTYPE html>
	<html lang="EN">
		<head>
			<meta charset="utf-8" />
			<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			<title>${title}</title>
			<meta property="description" content="${description}" />
			<meta property="og:title" content="Contentful Boilerplate | ${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:url" content="${url}" />
			<meta property="og:image" content="${image}" />
			<meta property="og:image:secure_url" content="${image}" />
		</head>
	
		<body>
			<div id="app">${html}</div>
			<script
				crossorigin
				src="https://unpkg.com/react@16/umd/react.production.min.js"
			></script>
			<script
				crossorigin
				src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
			></script>
			
		<script type="text/javascript" src="/app.bundle.js"></script></body>
	</html>
	`
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
