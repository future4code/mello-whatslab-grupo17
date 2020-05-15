import React from 'react';
//import styled from "styled-components"

class Form extends React.Component {
  state = {
    message: [
     { 
      userName: '',
      userMessage: ''
     }
    ]
  };
  onClickSend = () => {
    const newMessage = {
      userName: this.state.userName,
      userMessage: this.state.userMessage,
    };
    const messages = [newMessage, ...this.state.message];

    this.setState({ message: messages });
  };

  onChangeUserName = (event) => {
    this.setState({userName: event.target.value});
  };

  onChangeUserMessage = (event) => {
    this.setState({userMessage: event.target.value});
  };

  render() {
    const newMessagesArray = this.state.message.map((message) => {
      return (
        <p>
          {message.userName}{message.userMessage}
        </p>
      )
    });
    return (
      <div>
        <div>
          {newMessagesArray}
        </div>
        <input 
          onChange={this.onChangeUserName}
          type="text" 
          value={this.state.userName} 
          placeholder={'User'} 
        />
        <input
          onChange={this.onChangeUserMessage}
          type="text"
          value={this.state.userMessage}
          placeholder={'Message'}
        />
        <button onClick={this.onClickSend}>Enviar</button>
      </div>
    );
  }
}

export default Form;
