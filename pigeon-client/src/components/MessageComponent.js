import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Form,Control } from 'react-redux-form';


class Message extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postMessage(this.props.socket, values.message);
    this.props.resetMessageForm();
  }

  render() {
    return(
      <div className="container message">
        <Form model="messageForm" onSubmit={(values) => this.handleSubmit(values)}>
          <Row>
            <Col sm="10">
              <Control.textarea model=".message"
                rows="2"
                required
                className="form-control" />
            </Col>
            <Col sm="2">
              <Button type="submit" color="warning" block>
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default Message;
