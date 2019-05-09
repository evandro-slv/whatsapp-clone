import React from 'react';
import ChatListPage from "./components/pages/ChatListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatPage from "./components/pages/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ChatListPage} />
        <Route path="/chat/:user" exact component={ChatPage} />
      </div>
    </Router>
  );
}

export default App;
