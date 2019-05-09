import React, {Component} from 'react';
import ListItem from "../../molecules/ListItem";
import RoundedIconButton from "../../molecules/RoundedIconButton";
import Header from "../Header";
import {Redirect} from "react-router-dom";
import jake from '../Contacts/jake-100.png';

class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goHome() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 200);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/' />;
    }

    return (
      <Header>
        <RoundedIconButton type="arrow_back" onClick={this.goHome.bind(this)} />
        <ListItem image={jake} header1="Jake" header2="Online" />
        <RoundedIconButton type="attach_file" />
        <RoundedIconButton type="more_vert" />
      </Header>
    );
  }
}

export default ChatHeader;