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

export default RoundedImage;