import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { messagesReducer } from './reducers'

const ORIGINAL_STATE = {
  messages: [
    {
      avatar_url: 'http://fillmurray.com/98/98',
      name: 'Bill Murray',
      lines: [
        'Line one',
        'Line two',
        'Line three',
      ]
    },
    {
      avatar_url: 'http://fillmurray.com/100/100',
      name: 'Bill Murray #2',
      lines: [
        'Hey',
        'There',
        'Bill!',
      ]
    },
  ]
}

export default () => {
  return createStore(
    messagesReducer,
    ORIGINAL_STATE,
    applyMiddleware(
      logger
    )
  )
}
