import React, {
  Component
} from 'react';
import Message from "./Message.jsx";


class MessageList extends Component {
  render() {
  let messages =this.props.message;
return (<main className="messages"> {messages.map(x=><Message ListMessage={x} key ={x.id}/>)}
  </main>)
  }
}

export default MessageList;