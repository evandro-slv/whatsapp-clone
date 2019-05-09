import React, {Component} from 'react';
import './TextMessage.css';
import Headline from "../../organisms/Headline";
import PropTypes from "prop-types";

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

TextMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  color: function(props, propName, componentName) {
    if(props[propName] && !/#[0-9A-Fa-f]{3,6}/.test(props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.');
    }
  },
};

export default TextMessage;