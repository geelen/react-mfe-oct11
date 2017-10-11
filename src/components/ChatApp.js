import React from 'react'

import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import './ChatApp.css'

class ChatApp extends React.Component {
  state = {
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

  handleNewMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat({
        avatar_url: 'http://fillmurray.com/102/102',
        name: 'Me',
        lines: [
          message
        ]
      })
    })
  }

  render() {
    const { messages } = this.state

    return (
      <div className="ChatApp_Wrapper">
        <ChatWindow messages={messages}/>
        <MessageInput onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
}

export default ChatApp
