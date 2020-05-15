import React from 'react';
//import styled from "styled-components"

class Form extends React.Component {
  state = {
    message: {
      userName: '',
      userMessage: '',
    },
  };
  onClickSend = () => {
    const newMessage = {
      userName: this.state.userName,
      userMessage: this.state.userMessage,
    };
    const messages = [newMessage, ...this.state.message];

    this.setState({ message: messages });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.userName} placeholder={'User'} />
        <input
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
