import React, {Component} from 'react';
import ListItem from "../../molecules/ListItem";
import ChatList from "../../molecules/ChatList";
import {Redirect} from "react-router-dom";

import jake from './jake-100.png';
import cake from './cake-100.png';
import gunter from './gunter-100.png';
import princessBubblegum from './princess-bubblegum-100.png';
import marceline from './marceline-100.png';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openChat() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 200);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/chat/user' />;
    }

    return (
      <ChatList>
        <ListItem image={jake} header1="Jake" header2="Dude, suckin' at something is the first step to being sorta good at something." sidetext="12:30" onClick={this.openChat.bind(this)} />
        <ListItem image={cake} header1="Cake" header2="Shut up, he's into you!" sidetext="yesterday" onClick={this.openChat.bind(this)} />
        <ListItem image={gunter} header1="Gunter" header2="..." sidetext="yesterday" onClick={this.openChat.bind(this)} />
        <ListItem image={princessBubblegum} header1="Princess Bubblegum" header2="Hey... I'm a tough gum. Nothing never happening to me. Never." sidetext="12/03/19" onClick={this.openChat.bind(this)} />
        <ListItem image={marceline} header1="Marceline" header2="I eat shades of red." sidetext="12/01/18" onClick={this.openChat.bind(this)} />
      </ChatList>
    );
  }
}

export default Contacts;