import React from 'react'

import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import './ChatApp.css'

const ChatApp = () => (
  <div className="ChatApp_Wrapper">
    <ChatWindow/>
    <MessageInput/>
  </div>
)

export default ChatApp
