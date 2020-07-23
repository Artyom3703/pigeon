import React from 'react';
import { Media } from 'reactstrap';

const ChatList = (props) => {
    if (!props.errMess) {
    return(
      <div className="container chat">
        <div className="bottom">
          {props.messages.map((message) => {
            return(
              <Media>
                <Media body>
                  <Media heading>
                    {message.author.username} at {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(message.updatedAt)))}
                  </Media>
                    {message.message}
                </Media>
              </Media>
            )
          })}
        </div>
      </div>
    );
  } else {
    return(
      <div className="container chat">
        <div className="bottom">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  }

export default ChatList;
