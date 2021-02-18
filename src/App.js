import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./Screens/Profile/ProfileContainer";
import MessagesContainer from "./Screens/Messages/MessagesContainer";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main>
          <div className="container main-row">
            <Sidebar />
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
