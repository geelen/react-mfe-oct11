import React from 'react'
import { connect } from 'react-redux'

class MessageInput extends React.Component {
  state = { input_value: '' }

  updateValue = (event) => {
    this.setState({ input_value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_NEW_MESSAGE',
      message: this.state.input_value
    })
    this.setState({ input_value: '' })
  }

  render() {
    return (
      <form className="MessageInput"
            onSubmit={this.handleSubmit}>
        <div className="MessageInput_Input">
          <input type="text"
                 value={this.state.input_value}
                 onChange={this.updateValue}/>
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

export default connect()(MessageInput)
