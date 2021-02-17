const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

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
    if (action.type === ADD_POST) {
      const index =
        this._state.profilePage.posts[this._state.profilePage.posts.length - 1]
          .id + 1;
      const newPost = {
        id: index,
        post: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._renderAllTree(this._state);
    } else if (action.type === SET_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.payload;
      this._renderAllTree(this._state);
    } else if (action.type === SET_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.payload;
      this._renderAllTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const index =
        this._state.messagesPage.messages[
          this._state.messagesPage.messages.length - 1
        ].id + 1;
      const newMessage = {
        id: index,
        text: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._renderAllTree(this._state);
    }
  },
};

//Actions
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setNewPostText = (payload) => ({
  type: SET_NEW_POST_TEXT,
  payload,
});
export const setNewMessageText = (payload) => ({
  type: SET_NEW_MESSAGE_TEXT,
  payload,
});
export const sendMessage = () => ({ type: SEND_MESSAGE });

export default store;
