import { connect } from "react-redux";
import { sendMessage, setNewMessageText } from "../../redux/messageReducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  setNewMessageText,
})(Messages);

export default MessagesContainer;
