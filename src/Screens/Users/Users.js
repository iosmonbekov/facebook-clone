import axios from "axios";
import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import User from "./Components/User";

export default function Users(props) {
    useEffect(() => {
        props.changeLoader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
            )
            .then((response) => {
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
                let numOfPages = Math.ceil(
                    response.data.totalCount / props.pageSize
                );
                props.setNumberOfPages(numOfPages);
                props.changeLoader(false);
            });
    }, []);

    const changePage = (num) => {
        props.changeLoader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${num}`
            )
            .then((response) => {
                props.setUsers(response.data.items);
                props.setCurrentPage(num);
                props.changeLoader(false);
            });
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
                return (
                    <User
                        key={el.id}
                        id={el.id}
                        photo={el.photos.small}
                        name={el.name}
                        status={el.status}
                        followed={el.followed}
                        followOrUnfollow={props.followOrUnfollow}
                    />
                );
            })}
        </div>
    );
}
