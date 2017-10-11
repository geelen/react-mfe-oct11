import React from 'react'

const ChatWindow = ({ messages }) => (
  <div className="ChatWindow">
    {
      messages.map((entry, i) => (
        <div className="ChatWindow_Entry" key={i}>
          <img className="ChatWindow_Avatar"
               src={entry.avatar_url}
               alt={entry.name}/>
          <div className="ChatWindow_Lines">
            {
              entry.lines.map((line, i) => (
                <div key={i}>{ line }</div>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
)

export default ChatWindow
