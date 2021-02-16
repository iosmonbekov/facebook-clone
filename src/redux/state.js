let renderAllTree = () => {
  console.log("state changed");
};

const state = {
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
};

export const addPost = (text) => {
  const index =
    state.profilePage.posts[state.profilePage.posts.length - 1].id + 1;
  const newPost = {
    id: index,
    post: text,
  };
  state.profilePage.posts.push(newPost);
  renderAllTree(state);
};
export const setNewPostText = (text) => {
  debugger;
  state.profilePage.newPostText = text;
  renderAllTree(state);
};

export const subscribe = (observer) => {
  renderAllTree = observer;
};
export default state;
