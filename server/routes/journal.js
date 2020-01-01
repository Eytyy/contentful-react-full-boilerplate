const express = require('express')
const route = express.Router()
const client = require('../contentfulClient')

const getArticle = id =>
  client.getEntries({
    include: 3,
    content_type: 'post',
    'fields.slug': id
  })

route.get('/', (req, res) => {
  client
    .getEntries({
      content_type: 'post',
      include: 3
    })
    .then(payload => payload.items)
    .then(data => res.json(data))
})

route.get('/:id', (req, res) => {
  getArticle(req.params.id)
    .then(payload => payload.items[0])
    .then(data => res.json(data))
})

module.exports = { route, getArticle }
