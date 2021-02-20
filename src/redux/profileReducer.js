const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { id: 1, post: "Naruto is Hokage!!!" },
        { id: 2, post: "I love anime" },
        { id: 3, post: "I love Programing " },
        { id: 4, post: "How to become a hero? " },
        { id: 5, post: "Become the best version of Yourself" },
    ],
    newPostText: "",
    userProfile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const index = state.posts[state.posts.length - 1].id + 1;
            const newPost = {
                id: index,
                post: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case SET_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };
        default:
            return state;
    }
};
export default profileReducer;
//Actions

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setNewPostText = (payload) => ({
    type: SET_NEW_POST_TEXT,
    payload,
});
export const setUserProfile = (payload) => ({
    type: SET_USER_PROFILE,
    payload,
});
