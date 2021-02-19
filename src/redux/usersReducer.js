const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      photo:
        "https://i.pinimg.com/originals/ad/71/e2/ad71e2d708a05de9773778b088d6ccff.jpg",
      name: "Kaneki",
      status: "I love anime and Programing",
      location: { city: "Bishkek", country: "Kyrgyzstan" },
    },
    {
      id: 2,
      followed: false,
      photo:
        "https://i.pinimg.com/originals/ad/71/e2/ad71e2d708a05de9773778b088d6ccff.jpg",
      name: "Kirito",
      status: "I love anime and Programing",
      location: { city: "Bishkek", country: "Kyrgyzstan" },
    },
    {
      id: 3,
      followed: true,
      photo:
        "https://i.pinimg.com/originals/ad/71/e2/ad71e2d708a05de9773778b088d6ccff.jpg",
      name: "Yagami",
      status: "I love anime and Programing",
      location: { city: "Bishkek", country: "Kyrgyzstan" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.payload) {
            el.followed = !el.followed;
            return el;
          }
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;

//Actions

export const followOrUnfollow = (payload) => ({
  type: FOLLOW,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
