import React, { Component } from 'react';
import Chat from "../../organisms/Chat";
import Page from "../../atoms/Page";
import Footer from "../../organisms/Footer";
import './ChatPage.css';
import ChatHeader from "../../organisms/ChatHeader";

class ChatPage extends Component {
  render() {
    return (
      <Page className="chat-page">
        <ChatHeader />
        <Chat />
        <Footer />
      </Page>
    );
  }
}

export default ChatPage;