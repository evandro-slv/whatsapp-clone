import React, {Component} from 'react';
import Icon from "../../atoms/Icon";
import './RoundedIconButton.css';

class RoundedIconButton extends Component {
  render() {
    return (
      <button className="rounded-icon-button" {...this.props}>
        <Icon type={this.props.type} />
      </button>
    );
  }
}

export default RoundedIconButton;