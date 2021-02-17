import React from "react";
import { sendMessage, setNewMessageText } from "../../../redux/state";
import "./Form.css";

export default function Form(props) {
  const onChangeHandler = (text) => {
    props.dispatch(setNewMessageText(text));
  };
  const onClickHandler = () => {
    props.dispatch(sendMessage());
  };
  return (
    <div className="sender">
      <input
        onChange={(e) => onChangeHandler(e.target.value)}
        value={props.newMessageText}
      />
      <button onClick={onClickHandler}>Send</button>
    </div>
  );
}
