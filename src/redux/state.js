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
    if (action.type === "ADD-POST") {
      const index =
        this._state.profilePage.posts[this._state.profilePage.posts.length - 1]
          .id + 1;
      const newPost = {
        id: index,
        post: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._renderAllTree(this._state);
    } else if (action.type === "SET-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.payload;
      this._renderAllTree(this._state);
    }
  },
};

export default store;
