export const addMessage = message => dispatch => {
  dispatch({ type: 'SYSTEM_SYNCING' })

  dispatch({
    type: 'ADD_NEW_MESSAGE',
    message
  })

  fetch('http://lol.com/api/new_message')
    .then(() => {
        dispatch({ type: 'SYSTEM_SYNCED' })
      }, () =>
        dispatch({ type: 'SYSTEM_OFFLINE' })
    )
}
