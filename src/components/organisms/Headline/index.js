import React, {Component} from 'react';
import './Headline.css';
import PropTypes from "prop-types";

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

Headline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
};

export default Headline;