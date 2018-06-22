import React, {
	Component
} from 'react';

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
  	this.setState({content:""});
    }
  }
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