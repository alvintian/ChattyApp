import React, {
	Component
} from 'react';
import ReactDOM from "react-dom";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class Message extends Component {
  render() {
  let message =this.props.ListMessage;
    // const style = { color: this.props.color };
    // return <h1 style={style}>{this.props.children}</h1>;
    if(message.type==="incomingNotification") {
  return <div className="message system">{message.content}</div>
}else{
  return <div className="message"><span className="message-username">{message.username}</span>
  <span className="message-content">{message.content}</span></div>;
}
  }
}

export default Message;
