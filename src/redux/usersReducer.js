const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT_OF_USERS = "SET_TOTAL_COUNT_OF_USERS";
const SET_NUMBER_OF_PAGES = "SET_NUMBER_OF_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const CHANGE_LODADER = "CHANGE_LODADER";

let initialState = {
    users: [],
    usersTotalCount: 0,
    currentPage: 1,
    pageSize: 10,
    numberOfPages: 0,
    pages: [1, 2, 3, 4, 5, 6, 7, 8],
    isLoading: false,
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
        case SET_TOTAL_COUNT_OF_USERS:
            return {
                ...state,
                usersTotalCount: action.payload,
            };
        case SET_NUMBER_OF_PAGES:
            return {
                ...state,
                numberOfPages: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case CHANGE_LODADER:
            return {
                ...state,
                isLoading: action.payload,
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

export const setTotalUsersCount = (payload) => ({
    type: SET_TOTAL_COUNT_OF_USERS,
    payload,
});

export const setNumberOfPages = (payload) => ({
    type: SET_NUMBER_OF_PAGES,
    payload,
});

export const setCurrentPage = (payload) => ({
    type: SET_CURRENT_PAGE,
    payload,
});

export const changeLoader = (payload) => ({
    type: CHANGE_LODADER,
    payload,
});
