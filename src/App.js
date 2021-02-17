import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Screens/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Messages from "./Screens/Messages/Messages";

export default function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main>
          <div className="container main-row">
            <Sidebar />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  data={props.data.profilePage.posts}
                  newPostText={props.data.profilePage.newPostText}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path="/messages"
              render={() => (
                <Messages
                  data={props.data.messagesPage.receiver}
                  messages={props.data.messagesPage.messages}
                  newMessageText={props.data.messagesPage.newMessageText}
                  dispatch={props.dispatch}
                />
              )}
            />
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
