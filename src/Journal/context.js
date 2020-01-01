import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_JOURNAL':
    case 'FETCH_JOURNAL_ENTRY':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_JOURNAL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_JOURNAL_ENTRY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, action.payload]
      }
    case 'FETCH_JOURNAL_FAIL':
    case 'FETCH_JOURNAL_ENTRY_FAIL':
      return { ...state, isLoading: false, isError: true }
    default:
      throw new Error()
  }
}

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export const UseStore = id => {
  const { state, dispatch } = React.useContext(Context)
  const { isLoading, isError, data } = state
  const content = id ? data.filter(({ fields }) => fields.slug === id)[0] : data

  return {
    isLoading,
    isError,
    content,
    dispatch
  }
}
