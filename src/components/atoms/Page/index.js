import React, {Component} from 'react';

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

export default Page;