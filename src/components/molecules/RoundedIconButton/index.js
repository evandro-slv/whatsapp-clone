import React, {Component} from 'react';
import Icon from "../../atoms/Icon";
import './RoundedIconButton.css';
import PropTypes from "prop-types";

class RoundedIconButton extends Component {
  render() {
    return (
      <button className="rounded-icon-button" {...this.props}>
        <Icon type={this.props.type} />
      </button>
    );
  }
}

RoundedIconButton.propTypes = {
  type: PropTypes.string.isRequired
};

export default RoundedIconButton;