import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
    addPostActionCreator,
    setNewPostText,
    getUser,
} from "../../redux/profileReducer";
import Profile from "./Profile";

let mapStatetoProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

export default compose(
    connect(mapStatetoProps, {
        setNewPostText,
        addPostActionCreator,
        getUser,
    }),
    withRouter
)(Profile);
