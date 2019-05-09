import React, {Component} from 'react';
import './Chat.css';
import PageContent from "../../atoms/PageContent";
import TextMessage from "../../molecules/TextMessage";

class Chat extends Component {
  render() {
    return (
      <PageContent className="chat">
        <TextMessage title="Jake" message="Alright, what's going on?" timestamp="23:45" color="#075E54" />
        <TextMessage right={true} message="Uhh, nothing at all, buddy!" timestamp="23:45" />
        <TextMessage message="Hey, dude. I think you and Bubblegum are up to something." timestamp="23:46" />
        <TextMessage right={true} message="Ahha ah, what? No, no way." timestamp="23:46" />
        <TextMessage message="Whoa, you guys are up to something. Is it some sort of prank? Can I get in on it?" timestamp="23:47" />
        <TextMessage message="Hmm..." timestamp="23:47" />
      </PageContent>
    );
  }
}

export default Chat;