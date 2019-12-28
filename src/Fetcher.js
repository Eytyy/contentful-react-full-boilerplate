import React from 'react'
import PropTypes from 'prop-types'
// import useFetch from './useFetch' you can this inside render prop component implementation instead

const Fetcher = ({ children, url }) => {
  const [state, setState] = React.useState({
    data: null,
    isLoading: true,
    error: null
  })

  const mountedRef = React.useRef()

  React.useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const safeSetState = (...args) => mountedRef.current && setState(...args)

  React.useEffect(() => {
    const fetchData = async () => {
      safeSetState({ type: 'FETCH_INIT' })

      try {
        const response = await fetch(url)
        const data = await response.json()
        safeSetState({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        safeSetState({ type: 'FETCH_FAIL' })
      }
    }
    fetchData()
  })

  return children(state)
}

Fetcher.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default Fetcher
