import React, {
	Component
} from 'react';
import MessageList from "./MessageList.jsx";
import Message from "./Message.jsx";
class ChatBar extends Component {
	 constructor(props) {
    super(props);
    this.state = {
  		content: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  handleEnterPressed = event => {
    event.preventDefault();
    if (event.key === "Enter") {
  	this.props.onMessageSubmit(this.state.content);
    console.log("is this bugged??");
  	this.setState({content:""});
    }
  }
//defaultValue={this.props.user}
	render() {
	return (<footer className="chatbar">
  <input className="chatbar-username"  onChange={this.props.NameChange} value={this.props.user} placeholder="Your Name (Optional)" 
  onKeyUp={this.handleEnterPressed}/>
  <input className="chatbar-message" value={this.state.content} onChange={this.handleChange} 
  onKeyUp={this.handleEnterPressed} placeholder="Type a message and hit ENTER"/>
</footer>)
	}
}

// export const addTask = taskName => {
//   const newTask = {
//     taskName,
//     finished: false,
//     id: generateRandomId()
//   };
//   tasks.push(newTask);
//   return delayResolve({ ...newTask });
// };
export default ChatBar;