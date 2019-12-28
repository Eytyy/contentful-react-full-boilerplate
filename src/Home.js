import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

const Home = () => {
  const { isLoading, isError, data } = useFetch('/posts')
  return (
    <div>
      {isError ? (
        <div>Error Fetching Data...</div>
      ) : isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        data.map(({ sys, fields }) => (
          <div key={sys.id}>
            <Link to={`/posts/${fields.slug}`}>{fields.title}</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
