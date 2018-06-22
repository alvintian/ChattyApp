import React, {
	Component
} from 'react';
import ReactDOM from "react-dom";

class Message extends Component {
  render() {
  let message =this.props.ListMessage;
    if(message.type==="incomingNotification") {
  return <div className="message system">{message.content}</div>
}else{
  return <div className="message"><span className="message-username">{message.username}</span>
  <span style={{color: message.nameColor}} className="message-content">{message.content}</span></div>;
}
  }
}

export default Message;
