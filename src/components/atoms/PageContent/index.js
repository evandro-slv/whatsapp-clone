import React, {Component} from 'react';
import './PageContent.css';

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

export default PageContent;