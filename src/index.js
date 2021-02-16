import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/state";
import "./index.css";
import App from "./App";
// Data from state

const renderAllTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAllTree(store.getState());

store.subscribe(renderAllTree);
