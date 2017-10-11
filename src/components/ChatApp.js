import React from 'react'

import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import './ChatApp.css'
import store from '../store'

class ChatApp extends React.Component {
  handleNewMessage = (message) => {
    store.messages.push({
      avatar_url: 'http://fillmurray.com/102/102',
      name: 'Me',
      lines: [
        message
      ]
    })
  }

  render() {
    console.log("Rendered ChatApp!")
    return (
      <div className="ChatApp_Wrapper">
        <ChatWindow messages={store.messages}/>
        <MessageInput onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}

export default ChatApp
