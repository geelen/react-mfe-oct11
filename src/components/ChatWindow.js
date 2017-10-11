import React from 'react'

const Wrapper = 'div'
const Entry = 'div'
const Avatar = 'div'
const Lines = 'div'

const ChatWindow = () => (
  <div className="ChatWindow">
    <div className="ChatWindow_Entry">
      <img className="ChatWindow_Avatar"
           src="http://fillmurray.com/98/98"
           alt="Bill Murray"/>
      <div className="ChatWindow_Lines">
        <div>Line one</div>
        <div>Line two</div>
        <div>Line three</div>
      </div>
    </div>
  </div>
)

export default ChatWindow
