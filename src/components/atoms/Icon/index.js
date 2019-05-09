import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    return (
      <i className="material-icons">{this.props.type}</i>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;