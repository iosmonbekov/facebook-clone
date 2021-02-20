import React from "react";
import "./Form.css";

export default function Form(props) {
  const onChangeHandler = (text) => {
    props.setNewMessageText(text);
  };
  const onClickHandler = () => {
    props.sendMessage();
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
