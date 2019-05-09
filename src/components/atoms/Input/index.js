import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <input type="text" className="chat-input" placeholder="Message" />
    );
  }
}

export default Input;