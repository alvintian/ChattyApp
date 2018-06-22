import React, {
  Component
} from 'react';
import ReactDOM from "react-dom";
import Message from "./Message.jsx";
import ChatBar from "./ChatBar.jsx";


class MessageList extends Component {
  render() {
  let messages =this.props.message;
return (<main className="messages"> {messages.map(x=><Message ListMessage={x} key ={x.id}/>)}
  </main>)
  }
}

export default MessageList;