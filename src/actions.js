import store from './store'

const MY_AVATAR = 'http://fillmurray.com/102/102'

export const addNewMessage = (message) => {
  const lastMessage = store.messages[store.messages.length - 1]

  if (lastMessage && lastMessage.avatar_url === MY_AVATAR) {
    lastMessage.lines.push(message)
  } else {
    store.messages.push({
      avatar_url: MY_AVATAR,
      name: 'Me',
      lines: [
        message
      ]
    })
  }
}
