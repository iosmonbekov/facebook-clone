import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
