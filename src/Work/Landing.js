import React from 'react'
import { Link } from 'react-router-dom'
import { fetchWork } from './actions'
import { UseStore } from './context'

const Landing = () => {
  const { isLoading, isError, content, dispatch } = UseStore()

  React.useEffect(() => {
    if (!content || content.length === 0) fetchWork({ dispatch })
  }, [])

  return (
    <section>
      <header>
        <h2>Work</h2>
      </header>
      {isError ? (
        <div>Error Fetching Data...</div>
      ) : isLoading || !content ? (
        <div>Loading...</div>
      ) : (
        content.map(({ sys, fields }) => (
          <div key={sys.id}>
            <Link to={`/work/${fields.slug}`}>{fields.title}</Link>
          </div>
        ))
      )}
    </section>
  )
}

export default Landing
