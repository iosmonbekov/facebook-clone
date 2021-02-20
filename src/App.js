import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./Screens/Profile/ProfileContainer";
import MessagesContainer from "./Screens/Messages/MessagesContainer";
import UsersContainer from "./Screens/Users/UsersContainer";

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <main>
                    <div className="container main-row">
                        <Sidebar />
                        <Route
                            path="/profile/:userId?"
                            component={ProfileContainer}
                        />
                        <Route path="/messages" component={MessagesContainer} />
                        <Route path="/users" component={UsersContainer} />
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
