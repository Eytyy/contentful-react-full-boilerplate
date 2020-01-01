export const fetchJournal = async ({ dispatch }) => {
  dispatch({ type: 'FETCH_JOURNAL' })

  try {
    const response = await fetch(`/api/journal`)
    const data = await response.json()
    dispatch({ type: 'FETCH_JOURNAL_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_JOURNAL_FAIL' })
  }
}

export const fetchJournalEntry = async ({ dispatch, id }) => {
  dispatch({ type: 'FETCH_JOURNAL_ENTRY' })
  try {
    const response = await fetch(`/api/journal/${id}`)
    const data = await response.json()
    dispatch({ type: 'FETCH_JOURNAL_ENTRY_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_JOURNAL_ENTRY_FAIL' })
  }
}
