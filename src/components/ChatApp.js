import React from 'react'
import styled from 'styled-components'

import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import './ChatApp.css'

const Wrapper = styled.div`
  height: 100vh;
`

class ChatApp extends React.Component {
  render() {
    console.log("Rendered ChatApp!")
    return (
      <Wrapper>
        <ChatWindow/>
        <MessageInput/>
      </Wrapper>
    )
  }
}

export default ChatApp
