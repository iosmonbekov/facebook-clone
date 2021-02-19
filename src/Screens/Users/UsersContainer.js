import { connect } from "react-redux";
import { followOrUnfollow, setUsers } from "../../redux/usersReducer";

import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followToHim: (id) => {
      dispatch(followOrUnfollow(id));
    },
    getUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
