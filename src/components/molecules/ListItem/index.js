import React, {Component} from 'react';
import RoundedImage from "../../atoms/RoundedImage";
import './ListItem.css'
import Headline from "../../organisms/Headline";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    return (
      <div className="list-item" {...this.props}>
        <RoundedImage src={this.props.image} size="50px" />
        <Headline title={this.props.header1} subtitle={this.props.header2} />
        <span>{this.props.sidetext}</span>
      </div>
    );
  }
}

ListItem.propTypes = {
  image: PropTypes.string,
  header1: PropTypes.string,
  header2: PropTypes.string,
  sidetext: PropTypes.string,
};

export default ListItem;