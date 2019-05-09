import React, {Component} from 'react';
import PropTypes from "prop-types";

class Page extends Component {
  render() {
    let classes = "page ";

    if(this.props.className) {
      classes += this.props.className;
    }

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;