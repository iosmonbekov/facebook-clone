import { connect } from "react-redux";
import {
  addPostActionCreator,
  setNewPostText,
} from "../../redux/profileReducer";
import Profile from "./Profile";

let mapStatetoProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    changePostText(text) {
      dispatch(setNewPostText(text));
    },
    addPost() {
      dispatch(addPostActionCreator());
    },
  };
};

const ProfileContainer = connect(mapStatetoProps, mapDispatchtoProps)(Profile);

export default ProfileContainer;
