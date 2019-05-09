import React, {Component} from 'react';
import Page from "../../atoms/Page";
import HomeHeader from "../../organisms/HomeHeader";
import PageContent from "../../atoms/PageContent";
import Contacts from "../../organisms/Contacts";

class ChatListPage extends Component {
  render() {
    return (
      <Page className="chat-list-page">
        <HomeHeader />
        <PageContent>
          <Contacts />
        </PageContent>
      </Page>
    );
  }
}

export default ChatListPage;