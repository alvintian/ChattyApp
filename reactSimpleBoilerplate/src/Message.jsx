import React, {
	Component
} from 'react';
import ReactDOM from "react-dom";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class Message extends Component {
  render() {
  let message =this.props.ListMessage;
  console.log(message);
    if(message.type==="incomingNotification") {
  return <div className="message system">{message.content}</div>
}else{
  return <div className="message"><span className="message-username">{message.username}</span>
  <span style={{color: message.nameColor}} className="message-content">{message.content}</span></div>;
}
  }
}

export default Message;
