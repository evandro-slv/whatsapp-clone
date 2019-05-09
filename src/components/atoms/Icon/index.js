import React, {Component} from 'react';

class Icon extends Component {
  render() {
    return (
      <i className="material-icons">{this.props.type}</i>
    );
  }
}

export default Icon;