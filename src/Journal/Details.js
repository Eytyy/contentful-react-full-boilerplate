import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { fetchJournalEntry } from './actions'
import { UseStore } from './context'

import { CommonStyles } from '../Styles'

const Details = ({ match }) => {
  const { isLoading, isError, content, dispatch } = UseStore(match.params.id)

  React.useEffect(() => {
    !content && fetchJournalEntry({ dispatch, id: match.params.id })
  }, [match.params.id])

  if (isError) {
    return <div>Error Fetching Data...</div>
  } else if (isLoading || !content) {
    return <div>Loading...</div>
  }

  const { title, body } = content.fields
  return (
    <article>
      <CommonStyles.Header>
        <CommonStyles.H1>{title}</CommonStyles.H1>
      </CommonStyles.Header>
      <div>{documentToReactComponents(body)}</div>
    </article>
  )
}

Details.propTypes = {
  match: PropTypes.object
}

export default withRouter(Details)
