import React, {Component} from 'react';
import './TextMessage.css';
import Headline from "../../organisms/Headline";

class TextMessage extends Component {
  render() {
    let classes = 'message message--text ';

    if(this.props.right) {
      classes += "message--right";
    }
    else {
      classes += "message--left";
    }

    return (
      <div className={classes}>
        <div className="message-body">
          <Headline title={this.props.title} subtitle={this.props.message} titleColor={this.props.color} />
          <time>{this.props.timestamp}</time>
        </div>
      </div>
    );
  }
}

export default TextMessage;