import { connect } from "react-redux";
import { sendMessage, setNewMessageText } from "../../redux/messageReducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchtoState = (dispatch) => {
  return {
    changeMessageText(text) {
      dispatch(setNewMessageText(text));
    },
    addMessage() {
      dispatch(sendMessage());
    },
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchtoState
)(Messages);

export default MessagesContainer;
