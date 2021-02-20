import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    addPostActionCreator,
    setNewPostText,
    setUserProfile,
} from "../../redux/profileReducer";
import Profile from "./Profile";

let mapStatetoProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

const ProfileWithRouter = withRouter(Profile);

export default connect(mapStatetoProps, {
    setNewPostText,
    addPostActionCreator,
    setUserProfile,
})(ProfileWithRouter);
