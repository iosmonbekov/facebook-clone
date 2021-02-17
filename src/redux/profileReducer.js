const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const index = state.posts[state.posts.length - 1].id + 1;
      const newPost = {
        id: index,
        post: state.newPostText,
      };
      state.posts.push(newPost);
      return state;
    case SET_NEW_POST_TEXT:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};

//Actions

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setNewPostText = (payload) => ({
  type: SET_NEW_POST_TEXT,
  payload,
});

export default profileReducer;
