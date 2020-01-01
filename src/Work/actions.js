export const fetchWork = async ({ dispatch }) => {
  dispatch({ type: 'FETCH_WORK' })

  try {
    const response = await fetch(`/api/work`)
    const data = await response.json()
    dispatch({ type: 'FETCH_WORK_SUCCESS', payload: data })
    return data
  } catch (error) {
    dispatch({ type: 'FETCH_WORK_FAIL' })
  }
}

export const fetchProject = async ({ dispatch, id }) => {
  dispatch({ type: 'FETCH_PROJECT' })
  try {
    const response = await fetch(`/api/work/${id}`)
    const data = await response.json()
    dispatch({ type: 'FETCH_PROJECT_SUCCESS', payload: data })
    return data
  } catch (error) {
    dispatch({ type: 'FETCH_PROJECT_FAIL' })
  }
}
