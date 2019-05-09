import React, {Component} from 'react';
import './Footer.css';
import RoundedIconButton from "../../molecules/RoundedIconButton";
import Input from "../../atoms/Input";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <RoundedIconButton type="insert_emoticon" />
          <Input />
          <RoundedIconButton type="mic" />
        </div>
      </div>
    );
  }
}

export default Footer;