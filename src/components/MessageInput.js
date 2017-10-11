import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { connect } from 'react-redux'

const state = observable({
  input_value: ''
})

const updateValue = (event) => {
  state.input_value = event.target.value
}


class MessageInput extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_NEW_MESSAGE',
      message: state.input_value
    })
    state.input_value = ''
  }

  render() {
    return (
      <form className="MessageInput"
            onSubmit={this.handleSubmit}>
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
  }
}

export default connect()(observer(MessageInput))
