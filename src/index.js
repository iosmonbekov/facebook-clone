import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/reduxStore";
import "./index.css";
import App from "./App";

const renderAllTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAllTree(store.getState());

store.subscribe(() => {
  renderAllTree(store.getState());
});
