import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { fetchProject } from './actions'
import { UseStore } from './context'
import { Gallery, Image } from '../SharedComponents'
import { CommonStyles } from '../Styles'

const Details = ({ match }) => {
  const { isLoading, isError, content, dispatch } = UseStore(match.params.id)

  React.useEffect(() => {
    !content && fetchProject({ dispatch, id: match.params.id })
  }, [match.params.id])

  if (isError) {
    return <div>Error Fetching Data...</div>
  } else if (isLoading || !content) {
    return <div>Loading...</div>
  }

  const { title, description, media } = content.fields
  return (
    <article>
      <CommonStyles.Header>
        <CommonStyles.H1>{title}</CommonStyles.H1>
        <div>{documentToReactComponents(description)}</div>
      </CommonStyles.Header>
      {media.length > 1 ? (
        <Gallery slides={media} />
      ) : (
        <Image content={media[0].fields} />
      )}
    </article>
  )
}

Details.propTypes = {
  match: PropTypes.object
}

export default withRouter(Details)
