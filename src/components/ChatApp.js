import React from 'react'

import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import './ChatApp.css'

class ChatApp extends React.Component {
  render() {
    console.log("Rendered ChatApp!")
    return (
      <div className="ChatApp_Wrapper">
        <ChatWindow/>
        <MessageInput/>
      </div>
    )
  }
}

export default ChatApp
