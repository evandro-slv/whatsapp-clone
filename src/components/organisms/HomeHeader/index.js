import React, {Component} from 'react';
import Header from "../Header";
import RoundedIconButton from "../../molecules/RoundedIconButton";
import './HomeHeader.css';

class HomeHeader extends Component {
  render() {
    return (
      <Header>
        <div className="title">
          <h3>WhatsApp</h3>
        </div>
        <div className="icons">
          <RoundedIconButton type="search" />
          <RoundedIconButton type="more_vert" />
        </div>
      </Header>
    );
  }
}

export default HomeHeader;