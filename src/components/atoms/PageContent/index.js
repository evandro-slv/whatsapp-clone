import React, {Component} from 'react';
import './PageContent.css';
import PropTypes from "prop-types";

class PageContent extends Component {
  render() {
    let classes = "page-content ";

    if(this.props.className) {
      classes += this.props.className;
    }

    return (
      <div {...this.props} className={classes}>{this.props.children}</div>
    );
  }
}

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;