import React, {Component} from 'react';
import './ChatList.css';

class ChatList extends Component {
  render() {
    return (
      <div className="chat-list">
        {this.props.children}
      </div>
    );
  }
}

export default ChatList;