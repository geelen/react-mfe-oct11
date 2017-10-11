const MY_AVATAR = 'http://fillmurray.com/102/102'

export const messagesReducer = (old_state, action) => {
  if (action.type === 'ADD_NEW_MESSAGE') {
    const lastMessage = old_state.messages[old_state.messages.length - 1]

    if (lastMessage && lastMessage.avatar_url === MY_AVATAR) {
      return {
        ...old_state,
        messages: [
          ...old_state.messages.slice(0, old_state.messages.length - 1),
          {
            ...lastMessage,
            lines: [
              ...lastMessage.lines,
              action.message
            ],
          },
        ],
      }
    } else {
      return {
        ...old_state,
        messages: [
          ...old_state.messages,
          {
            avatar_url: MY_AVATAR,
            name: 'Me',
            lines: [
              action.message
            ]
          },
        ]
      }
    }
  }

  return old_state
}
