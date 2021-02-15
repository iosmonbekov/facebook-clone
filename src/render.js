import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Data from state
import { addPost, setNewPostText } from "./redux/state";

const renderAllTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} addPost={addPost} setNewPostText={setNewPostText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export { renderAllTree };
