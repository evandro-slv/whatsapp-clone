import React, {Component} from 'react';
import './RoundedImage.css';

class RoundedImage extends Component {
  render() {
    const style = { width: this.props.size, height: this.props.size, minWidth: this.props.size };
    return (
      <img {...this.props}  alt="profile-thumbnail" style={style} />
    );
  }
}

RoundedImage.propTypes = {
  size: function(props, propName, componentName) {
    if (!/\d+(px|em|rem)/.test(props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.'
      );
    }
  },
};

export default RoundedImage;