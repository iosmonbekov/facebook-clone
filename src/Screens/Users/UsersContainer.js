import { connect } from "react-redux";
import {
    followOrUnfollow,
    setUsers,
    setTotalUsersCount,
    setNumberOfPages,
    setCurrentPage,
    changeLoader,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pages: state.usersPage.pages,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    };
};

let UsersContainer = connect(mapStateToProps, {
    followOrUnfollow,
    setUsers,
    setTotalUsersCount,
    setNumberOfPages,
    setCurrentPage,
    changeLoader,
})(Users);

export default UsersContainer;
