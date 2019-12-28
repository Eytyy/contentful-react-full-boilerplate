import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_FAIL':
      return { ...state, isLoading: false, isError: true }
    default:
      throw new Error()
  }
}

const useFetch = url => {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: null
  })

  // Safely update state on mounted component
  const mountedRef = React.useRef()

  React.useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Only allow dispatch when component is mounted
  const safeDispatch = (...args) => mountedRef.current && dispatch(...args)

  React.useEffect(() => {
    const fetchData = async () => {
      safeDispatch({ type: 'FETCH_INIT' })

      try {
        const API_ENDPOINT = '/api'
        const response = await fetch(`${API_ENDPOINT}${url}`)
        const data = await response.json()
        safeDispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        safeDispatch({ type: 'FETCH_FAIL' })
      }
    }
    fetchData()
  }, [url])

  return state
}

export default useFetch
