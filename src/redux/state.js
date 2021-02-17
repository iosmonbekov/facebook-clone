import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Naruto is Hokage!!!" },
        { id: 2, post: "I love anime" },
        { id: 3, post: "I love Programing " },
        { id: 4, post: "How to become a hero? " },
        { id: 5, post: "Become the best version of Yourself" },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
  },
  _renderAllTree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderAllTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);

    this._renderAllTree(this._state);
  },
};

export default store;
