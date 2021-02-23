import { connect } from "react-redux";
import {
    followOrUnfollow,
    setCurrentPage,
    getAllUsers,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pages: state.usersPage.pages,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        pageSize: state.usersPage.pageSize,
    };
};

let UsersContainer = connect(mapStateToProps, {
    followOrUnfollow,
    setCurrentPage,
    getAllUsers,
})(Users);

export default UsersContainer;
