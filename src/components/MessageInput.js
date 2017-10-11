import React from 'react'

class MessageInput extends React.Component {
  state = { input_value: '' }

  updateValue = (event) => {
    this.setState({ input_value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onNewMessage(this.state.input_value)
    this.setState({ input_value: '' })
  }

  render() {
    const { input_value } = this.state

    return (
      <form className="MessageInput"
            onSubmit={this.handleSubmit}>
        <div className="MessageInput_Input">
          <input type="text"
                 value={input_value}
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

export default MessageInput
