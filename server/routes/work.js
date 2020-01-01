const express = require('express')
const route = express.Router()
const client = require('../contentfulClient')

const getProjects = () =>
  client.getEntries({
    content_type: 'project',
    include: 3
  })

route.get('/', (req, res) => {
  getProjects().then(payload => res.json(payload.items))
})

const getProject = id =>
  client.getEntries({
    include: 3,
    content_type: 'project',
    'fields.slug': id
  })

route.get('/:id', (req, res) => {
  getProject(req.params.id).then(payload => res.json(payload.items[0]))
})

module.exports = {
  route,
  getProjects,
  getProject
}
