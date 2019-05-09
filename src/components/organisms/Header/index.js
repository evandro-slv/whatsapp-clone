import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;