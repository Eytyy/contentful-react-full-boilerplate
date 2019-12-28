import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import useFetch from './useFetch'

const Post = ({ match }) => {
  const { isLoading, isError, data } = useFetch(`/posts/${match.params.id}`)

  if (isError) {
    return <div>Error Fetching Data...</div>
  } else if (isLoading || !data) {
    return <div>Loading...</div>
  }
  const { title } = data.fields
  return (
    <article>
      <h1>{title}</h1>
    </article>
  )
}

Post.propTypes = {
  match: PropTypes.object
}

export default withRouter(Post)
