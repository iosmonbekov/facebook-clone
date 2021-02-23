import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import User from "./Components/User";

export default function Users(props) {
    useEffect(() => {
        props.getAllUsers();
    }, []);

    const changePage = (num) => {
        props.setCurrentPage(num);
    };

    return props.isLoading ? (
        <Loader />
    ) : (
        <div className="users">
            <div>
                {props.pages.map((el) => {
                    if (el === props.currentPage) {
                        return (
                            <button
                                style={{ background: "aqua" }}
                                onClick={() => changePage(el)}
                                key={el}
                            >
                                {el}
                            </button>
                        );
                    }
                    return (
                        <button onClick={() => changePage(el)} key={el}>
                            {el}
                        </button>
                    );
                })}
            </div>
            {props.users.map((el) => {
                if (props.currentPage === 1) {
                    if (el.id > props.pageSize) {
                        return null;
                    }
                } else {
                    if (el.id <= props.pageSize) {
                        return null;
                    }
                }
                return (
                    <User
                        followOrUnfollow={props.followOrUnfollow}
                        key={el.id}
                        user={el}
                    />
                );
            })}
        </div>
    );
}
