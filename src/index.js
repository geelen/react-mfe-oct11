import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChatApp from './components/ChatApp'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ChatApp/>
  </Provider>,
  document.getElementById('root')
)
