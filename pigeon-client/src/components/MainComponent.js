import React, { Component } from 'react';
import Header from './HeaderComponent';
import ChatList from './ChatComponent';
import Message from './MessageComponent';
import { connect } from 'react-redux';
import { fetchMessages, loginUser, logoutUser, postMessage, addMessage } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import io from 'socket.io-client';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
      messages: state.messages,
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message)),
  postMessage: (socket, message) => dispatch(postMessage(socket, message)),
  fetchMessages: () => dispatch(fetchMessages()),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  resetMessageForm: () => dispatch(actions.reset('messageForm'))
});

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      socket: io.connect(baseUrl)
    }
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.state.socket.on('gotMessage', (mes) => {
      this.props.addMessage(mes);
    });
  }

  render() {
    return(
      <React.Fragment>
        <Header
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
        <ChatList
          messages={this.props.messages.messages}
          errMess={this.props.messages.errMess}
          />
        <Message
          postMessage={this.props.postMessage}
          resetMessageForm={this.props.resetMessageForm}
          socket={this.state.socket}
          />
      </React.Fragment>
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
