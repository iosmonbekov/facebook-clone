import React from "react";
import Form from "./Components/Form";
import Letter from "./Components/Letter";
import Receiver from "./Components/Receiver";
import "./Messages.css";

export default function Messages(props) {
  return (
    <div className="up-messages">
      <h2>Dialogs</h2>
      <div className="messages">
        <div>
          <ul>
            {props.messagesPage.receiver.map((el, index) => {
              return <Receiver key={index} name={el.name} />;
            })}
          </ul>
        </div>
        <div>
          <div className="dialog">
            {props.messagesPage.messages.map((el) => {
              return <Letter key={el.id} text={el.text} />;
            })}
          </div>
          <Form
            sendMessage={props.sendMessage}
            setNewMessageText={props.setNewMessageText}
            newMessageText={props.messagesPage.newMessageText}
          />
        </div>
      </div>
    </div>
  );
}
