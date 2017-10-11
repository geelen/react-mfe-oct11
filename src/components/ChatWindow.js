import React from 'react'
import { observer } from 'mobx-react'

const ChatWindow = ({ messages }) => (
  console.log("Rendered ChatWindow!"),
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

export default observer(ChatWindow)
