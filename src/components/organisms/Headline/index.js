import React, {Component} from 'react';
import './Headline.css';

class Headline extends Component {
  render() {
    return (
      <div className="headline">
        {this.props.title && <h1 style={{ color: this.props.titleColor }}>{this.props.title}</h1>}
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

export default Headline;