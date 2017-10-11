import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { addNewMessage } from '../actions'

const state = observable({
  input_value: ''
})

const updateValue = (event) => {
  state.input_value = event.target.value
}

const handleSubmit = (event) => {
  event.preventDefault()
  addNewMessage(state.input_value)
  state.input_value = ''
}

const MessageInput = () => (
  <form className="MessageInput"
        onSubmit={handleSubmit}>
    <div className="MessageInput_Input">
      <input type="text"
             value={state.input_value}
             onChange={updateValue}/>
    </div>
    <div className="MessageInput_Button">
      <button type="submit">
        <span>➡</span>
      </button>
    </div>
  </form>
)

export default observer(MessageInput)
