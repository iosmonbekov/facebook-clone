const state = {
  profilePage: {
    posts: [
      { id: 1, post: "Naruto is Hokage!!!" },
      { id: 2, post: "I love anime" },
      { id: 3, post: "I love Programing " },
      { id: 4, post: "How to become a hero? " },
      { id: 5, post: "Become the best version of Yourself" },
    ],
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
  const newPost = {
    id: 6,
    post: text,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
