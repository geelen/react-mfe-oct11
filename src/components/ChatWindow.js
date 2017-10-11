import React from 'react'

const Wrapper = 'div'
const Entry = 'div'
const Avatar = 'div'
const Lines = 'div'

const ChatWindow = () => (
  <div className="ChatWindow">
    <Entry>
      <Avatar>
        <img src="http://fillmurray.com/98/98" alt="Bill Murray"/>
      </Avatar>
      <Lines>
        <div>Line one</div>
        <div>Line two</div>
        <div>Line three</div>
      </Lines>
    </Entry>
  </div>
)

export default ChatWindow
