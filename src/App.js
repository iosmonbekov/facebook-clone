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
                  addPost={props.addPost}
                  setNewPostText={props.setNewPostText}
                />
              )}
            />
            <Route
              path="/messages"
              render={() => (
                <Messages data={props.data.messagesPage.receiver} />
              )}
            />
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
