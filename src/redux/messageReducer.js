const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  receiver: [
    { id: 1, name: "Naruto" },
    { id: 2, name: "Sasuke" },
    { id: 3, name: "Yagami" },
    { id: 4, name: "Kirito" },
  ],
  messages: [
    { id: 1, text: "Hi" },
    { id: 2, text: "Bye" },
  ],
  newMessageText: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      };
    case SEND_MESSAGE:
      const index = state.messages[state.messages.length - 1].id + 1;
      const newMessage = {
        id: index,
        text: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    default:
      return state;
  }
};

export const setNewMessageText = (payload) => ({
  type: SET_NEW_MESSAGE_TEXT,
  payload,
});
export const sendMessage = () => ({ type: SEND_MESSAGE });

export default messageReducer;
