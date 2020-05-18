import React from 'react';
import styled from 'styled-components';

const EspacoDasMensagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MessageSection = styled.span`
  margin: 10px;
  margin-bottom: 10px;
`;

class Form extends React.Component {
  state = {
    message: [
      {
        userName: '',
        userMessage: '',
      },
    ],
  };

  onClickSend = () => {
    const newMessage = {
      userName: this.state.userName,
      userMessage: this.state.userMessage,
    };
    const messages = [...this.state.message, newMessage];

    this.setState({ message: messages });
  };

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeUserMessage = (event) => {
    this.setState({ userMessage: event.target.value });
  };

  render() {
    const newMessagesArray = this.state.message.map((message) => {
      return (
        <section>
          <MessageSection>
            <strong>{message.userName}</strong>
          </MessageSection>
          <span>{message.userMessage}</span>
        </section>
      );
    });
    return (
      <div>
        <EspacoDasMensagem>{newMessagesArray}</EspacoDasMensagem>
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
