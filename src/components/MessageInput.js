import React from 'react'

const MessageInput = () => (
  <form className="MessageInput">
    <div className="MessageInput_Input">
      <input type="text"/>
    </div>
    <div className="MessageInput_Button">
      <button type="submit">
        <span>➡</span>
      </button>
    </div>
  </form>
)

export default MessageInput
